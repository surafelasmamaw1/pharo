import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const phoneRegExp = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;

// --- Simple in-memory rate limiter ---
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // max requests per window
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function getRateLimitKey(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() ?? "unknown";
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.expiresAt) {
    rateLimitMap.set(key, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(req: NextRequest) {
  try {
    const ip = getRateLimitKey(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, phone, subject, message } = body ?? {};

    // Server-side validation
    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }
    if (phone.trim().length < 6 || !phoneRegExp.test(phone.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    // Save inquiry to Database via Prisma
    const inquiry = await prisma.inquiry.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
      },
    });

    // Optional Web3Forms forwarding
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (accessKey) {
      try {
        const formData = new URLSearchParams();
        formData.append("access_key", accessKey);
        formData.append("name", name.trim());
        formData.append("email", email.trim());
        formData.append("phone", phone.trim());
        formData.append("subject", subject.trim());
        formData.append("message", message.trim());

        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formData.toString(),
        });
      } catch {
        // Fallback to local database storage
      }
    }

    return NextResponse.json({ success: true, data: inquiry });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: inquiries });
  } catch (err) {
    console.error("Fetch inquiries error:", err);
    return NextResponse.json(
      { error: "Failed to fetch inquiries." },
      { status: 500 }
    );
  }
}
