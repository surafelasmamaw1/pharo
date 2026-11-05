import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // Pass-through middleware (all /api admin actions are guarded with HMAC verification)
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
