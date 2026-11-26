import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminAuthenticated } from "@/app/api/admin/login/route";
import { contactFormSchema } from "@/lib/zodSchemas";
import { z } from "zod";

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

const VALID_INQUIRY_STATUSES = ["UNREAD", "READ", "ARCHIVED"] as const;

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
    const validated = contactFormSchema.parse({
      name: body?.name?.trim() ?? "",
      email: body?.email?.trim() ?? "",
      phone: body?.phone?.trim() ?? "",
      subject: body?.subject?.trim() ?? "",
      message: body?.message?.trim() ?? "",
    });

    // Save inquiry to Database via Prisma
    const inquiry = await prisma.inquiry.create({
      data: {
        name: validated.name,
        email: validated.email,
        subject: validated.subject,
        message: validated.message,
      },
    });

    // Optional Web3Forms forwarding
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (accessKey) {
      try {
        const formData = new URLSearchParams();
        formData.append("access_key", accessKey);
        formData.append("name", validated.name);
        formData.append("email", validated.email);
        formData.append("phone", validated.phone);
        formData.append("subject", validated.subject);
        formData.append("message", validated.message);

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
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: err.errors[0]?.message || "Invalid form data." },
        { status: 400 }
      );
    }
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  if (!isAdminAuthenticated(req)) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

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

export async function PATCH(req: NextRequest) {
  if (!isAdminAuthenticated(req)) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id, status } = body ?? {};

    if (!id || !VALID_INQUIRY_STATUSES.includes(status)) {
      return NextResponse.json(
        { success: false, message: "Valid ID and status (UNREAD, READ, ARCHIVED) are required" },
        { status: 400 }
      );
    }

    const updated = await prisma.inquiry.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (err) {
    console.error("Update inquiry error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to update inquiry." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  if (!isAdminAuthenticated(req)) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "ID is required" }, { status: 400 });
    }

    await prisma.inquiry.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Inquiry deleted successfully" });
  } catch (err) {
    console.error("Delete inquiry error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to delete inquiry." },
      { status: 500 }
    );
  }
}
