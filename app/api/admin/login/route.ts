import { NextRequest, NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "pharo2026";
const COOKIE_NAME = "admin_session";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { password } = body ?? {};

    if (password === ADMIN_PASSWORD) {
      const res = NextResponse.json({ success: true, message: "Logged in successfully" });
      res.cookies.set(COOKIE_NAME, "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });
      return res;
    }

    return NextResponse.json(
      { success: false, message: "Invalid admin password" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error during authentication" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const sessionCookie = req.cookies.get(COOKIE_NAME)?.value;
  const isAuthenticated = sessionCookie === "authenticated";

  return NextResponse.json({ authenticated: isAuthenticated });
}

export async function DELETE() {
  const res = NextResponse.json({ success: true, message: "Logged out" });
  res.cookies.delete(COOKIE_NAME);
  return res;
}
