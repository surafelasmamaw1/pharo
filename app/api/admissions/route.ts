import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { isAdminAuthenticated } from "@/app/api/admin/login/route";

// --- Simple in-memory rate limiter for public submissions ---
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
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

const applicationSchema = z.object({
  applicantName: z.string().min(2, "Applicant name must be at least 2 characters"),
  parentName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Valid phone number required"),
  emergencyPhone: z.string().optional(),
  gradeLevel: z.string().min(1, "Grade level is required"),
  age: z.string().optional(),
  gender: z.string().optional(),
  previousSchool: z.string().optional(),
  city: z.string().optional(),
  program: z.string().optional(),
  notes: z.string().optional(),
});

// Safe database reference to prevent VS Code TS cache warnings
const db = prisma as any;

export async function POST(req: NextRequest) {
  try {
    const ip = getRateLimitKey(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please wait a moment and try again." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const validated = applicationSchema.parse(body);

    const application = await db.application.create({
      data: validated,
    });

    // Send email notification to school via Web3Forms
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3Key) {
      try {
        const formData = new URLSearchParams();
        formData.append("access_key", web3Key);
        formData.append("subject", `New Admissions Application: ${validated.applicantName}`);
        formData.append("from_name", "Pharo School Website");
        formData.append("Student Name", validated.applicantName);
        formData.append("Grade Level", validated.gradeLevel);
        formData.append("Email", validated.email);
        formData.append("Phone", validated.phone);
        if (validated.parentName) formData.append("Parent Name", validated.parentName);
        if (validated.age) formData.append("Age", validated.age);
        if (validated.gender) formData.append("Gender", validated.gender);
        if (validated.city) formData.append("City", validated.city);
        if (validated.program) formData.append("Program", validated.program);
        if (validated.previousSchool) formData.append("Previous School", validated.previousSchool);
        if (validated.notes) formData.append("Notes", validated.notes);

        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formData.toString(),
        });
      } catch {
        // Email failure should not block the successful submission
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully!",
        data: application,
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      const msg = error.errors.map((e) => `${e.path.join(".")}: ${e.message}`).join(", ");
      return NextResponse.json(
        { success: false, message: msg || "Validation error" },
        { status: 400 }
      );
    }
    console.error("Admissions API error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Failed to submit application." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  if (!isAdminAuthenticated(req)) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const applications = await db.application.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: applications });
  } catch (error: any) {
    console.error("Fetch applications error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch applications." },
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

    if (!id || !status) {
      return NextResponse.json({ success: false, message: "ID and status are required" }, { status: 400 });
    }

    const updated = await db.application.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error("Update application status error:", error);
    return NextResponse.json({ success: false, message: "Failed to update application" }, { status: 500 });
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

    await db.application.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Application deleted successfully" });
  } catch (error) {
    console.error("Delete application error:", error);
    return NextResponse.json({ success: false, message: "Failed to delete application" }, { status: 500 });
  }
}
