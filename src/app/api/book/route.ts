import { NextResponse } from "next/server";

type BookingPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  treatment?: string;
  preferredDate?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: BookingPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { firstName, lastName, email, treatment, preferredDate } = body;

  if (!firstName?.trim() || !lastName?.trim() || !preferredDate?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  // Resend integration can be wired in here later; for this phase we just log
  // the request so the booking flow is end-to-end testable without an API key.
  console.log("New appointment request", {
    firstName,
    lastName,
    email,
    treatment: treatment || "Consultation",
    preferredDate,
  });

  return NextResponse.json({ success: true });
}
