import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const db = prisma as any;

const gallerySchema = z.object({
  title: z.string().min(2, "Title is required"),
  category: z.string().default("Campus"),
  imageUrl: z.string().min(5, "Image is required"),
});

export async function GET() {
  try {
    const items = await db.galleryItem.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: items });
  } catch (error: any) {
    console.error("Fetch gallery error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch gallery photos." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = gallerySchema.parse(body);

    const item = await db.galleryItem.create({
      data: validated,
    });

    return NextResponse.json(
      { success: true, message: "Photo added to gallery!", data: item },
      { status: 201 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      const msg = error.errors.map((e) => e.message).join(", ");
      return NextResponse.json({ success: false, message: msg }, { status: 400 });
    }
    console.error("Add gallery photo error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to add photo." },
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

    await db.galleryItem.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Photo deleted from gallery" });
  } catch (error: any) {
    console.error("Delete gallery error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete photo" },
      { status: 500 }
    );
  }
}
