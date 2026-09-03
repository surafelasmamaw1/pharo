import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const db = prisma as any;

const facultySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  role: z.string().min(2, "Role / Title is required"),
  credentials: z.string().min(2, "Academic credentials are required"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  expertise: z.string().optional().default(""),
  imageUrl: z.string().optional().nullable(),
  order: z.number().optional().default(0),
});

export async function GET() {
  try {
    const faculty = await db.facultyMember.findMany({
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });
    return NextResponse.json({ success: true, data: faculty });
  } catch (error: any) {
    console.error("Fetch faculty error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch faculty members." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = facultySchema.parse(body);

    const faculty = await db.facultyMember.create({
      data: validated,
    });

    return NextResponse.json(
      { success: true, message: "Faculty member added successfully!", data: faculty },
      { status: 201 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      const msg = error.errors.map((e) => e.message).join(", ");
      return NextResponse.json({ success: false, message: msg }, { status: 400 });
    }
    console.error("Create faculty error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create faculty member." },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, ...data } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Faculty member ID is required for editing." },
        { status: 400 }
      );
    }

    const validated = facultySchema.parse(data);

    const updated = await db.facultyMember.update({
      where: { id },
      data: validated,
    });

    return NextResponse.json({
      success: true,
      message: "Faculty member updated successfully!",
      data: updated,
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      const msg = error.errors.map((e) => e.message).join(", ");
      return NextResponse.json({ success: false, message: msg }, { status: 400 });
    }
    console.error("Update faculty error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update faculty member." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "ID is required" }, { status: 400 });
    }

    await db.facultyMember.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Faculty member deleted successfully" });
  } catch (error: any) {
    console.error("Delete faculty error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete faculty member." },
      { status: 500 }
    );
  }
}
