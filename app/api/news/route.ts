import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const newsSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  category: z.string().default("News"),
  snippet: z.string().min(5, "Snippet is required"),
  content: z.string().min(10, "Content is required"),
  date: z.string().min(1, "Date is required"),
  imageUrl: z.string().optional(),
});

export async function GET() {
  try {
    const news = await prisma.newsEvent.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: news });
  } catch (error: any) {
    console.error("Fetch news error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch news." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = newsSchema.parse(body);

    const slug = validated.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "") + "-" + Date.now();

    const article = await prisma.newsEvent.create({
      data: {
        ...validated,
        slug,
      },
    });

    return NextResponse.json(
      { success: true, data: article },
      { status: 201 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    console.error("Create news error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create news." },
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

    await prisma.newsEvent.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "News deleted successfully" });
  } catch (error) {
    console.error("Delete news error:", error);
    return NextResponse.json({ success: false, message: "Failed to delete news" }, { status: 500 });
  }
}
