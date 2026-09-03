import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const db = prisma as any;

const testimonialSchema = z.object({
  name: z.string().min(2, "Name is required"),
  role: z.string().min(2, "Role/grade is required"),
  quote: z.string().min(10, "Quote must be at least 10 characters"),
  type: z.enum(["Parent", "Student", "Teacher"]).default("Parent"),
});

export async function GET() {
  try {
    const testimonials = await db.testimonial.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: testimonials });
  } catch (error: any) {
    console.error("Fetch testimonials error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch testimonials." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = testimonialSchema.parse(body);

    const testimonial = await db.testimonial.create({
      data: validated,
    });

    return NextResponse.json(
      { success: true, message: "Testimonial published!", data: testimonial },
      { status: 201 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      const msg = error.errors.map((e) => e.message).join(", ");
      return NextResponse.json({ success: false, message: msg }, { status: 400 });
    }
    console.error("Create testimonial error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create testimonial." },
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

    await db.testimonial.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Testimonial deleted successfully" });
  } catch (error: any) {
    console.error("Delete testimonial error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete testimonial" },
      { status: 500 }
    );
  }
}
