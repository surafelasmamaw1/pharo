import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

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
    const body = await req.json();
    const validated = applicationSchema.parse(body);

    const application = await db.application.create({
      data: validated,
    });

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

export async function GET() {
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
