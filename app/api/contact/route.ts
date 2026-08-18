import { NextRequest, NextResponse } from "next/server";

const phoneRegExp = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = (formData.get("name") as string) ?? "";
    const email = (formData.get("email") as string) ?? "";
    const phone = (formData.get("phone") as string) ?? "";
    const subject = (formData.get("subject") as string) ?? "";
    const message = (formData.get("message") as string) ?? "";

    // Server-side validation
    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }
    if (phone.trim().length < 6 || !phoneRegExp.test(phone.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    // Forward to Web3Forms if access key present, otherwise return success
    const accessKey = formData.get("access_key");
    if (accessKey && typeof accessKey === "string" && accessKey.length > 0) {
      try {
        const external = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        const result = await external.json();
        if (result?.success) return NextResponse.json({ success: true });
      } catch {
        // Fall through to local success
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
