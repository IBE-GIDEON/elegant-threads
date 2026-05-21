import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  serviceType?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Unable to read the contact form submission." },
      { status: 400 },
    );
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const phone = payload.phone?.trim();
  const serviceType = payload.serviceType?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !serviceType || !message) {
    return NextResponse.json(
      { error: "Please complete the required contact form fields." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  // Replace this stub with a real email, CRM, or database integration later.
  console.log("Elegance Stitches inquiry", {
    name,
    email,
    phone,
    serviceType,
    message,
  });

  return NextResponse.json({
    message:
      "Thank you for reaching out. Your request has been noted and is ready to be connected to your preferred inbox workflow.",
  });
}
