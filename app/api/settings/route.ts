import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const db = prisma as any;

export async function GET() {
  try {
    let settings = await db.siteSetting.findUnique({
      where: { id: "default" },
    });

    if (!settings) {
      settings = await db.siteSetting.create({
        data: {
          id: "default",
          urgentBannerActive: false,
          urgentBannerText: "",
          tuitionFeeText: "ETB 9,700",
          admissionDeadline: "Rolling Admissions",
          contactPhone: "+251 91 234 5678",
          contactEmail: "admissions@pharoschool.edu.et",
        },
      });
    }

    return NextResponse.json({ success: true, data: settings });
  } catch (error: any) {
    console.error("Fetch settings error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch settings." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      urgentBannerActive,
      urgentBannerText,
      tuitionFeeText,
      admissionDeadline,
      contactPhone,
      contactEmail,
    } = body ?? {};

    const updated = await db.siteSetting.upsert({
      where: { id: "default" },
      update: {
        urgentBannerActive: Boolean(urgentBannerActive),
        urgentBannerText: urgentBannerText ?? "",
        tuitionFeeText: tuitionFeeText ?? "ETB 9,700",
        admissionDeadline: admissionDeadline ?? "Rolling Admissions",
        contactPhone: contactPhone ?? "+251 91 234 5678",
        contactEmail: contactEmail ?? "admissions@pharoschool.edu.et",
      },
      create: {
        id: "default",
        urgentBannerActive: Boolean(urgentBannerActive),
        urgentBannerText: urgentBannerText ?? "",
        tuitionFeeText: tuitionFeeText ?? "ETB 9,700",
        admissionDeadline: admissionDeadline ?? "Rolling Admissions",
        contactPhone: contactPhone ?? "+251 91 234 5678",
        contactEmail: contactEmail ?? "admissions@pharoschool.edu.et",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Site settings updated successfully!",
      data: updated,
    });
  } catch (error: any) {
    console.error("Update settings error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update settings." },
      { status: 500 }
    );
  }
}
