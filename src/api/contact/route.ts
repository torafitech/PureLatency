// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      purpose,
      message,
      organisation,
      phoneNumber,
      country,
      userAgent,
    } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const submissionData = {
      fullName,
      email,
      purpose,
      message,
      organisation: organisation || "",
      phoneNumber: phoneNumber || "",
      country: country || "",
      userAgent: userAgent || "",
      submittedAt: new Date().toISOString(),
      timestamp: Date.now(),
      source: "home-contact-section",
    };

    // 1) Save to Firestore
    await addDoc(collection(db, "contacts"), submissionData);

    // 2) Send email to reachus@purelatency.com
    await resend.emails.send({
      from: "PureLatency <no-reply@your-domain.com>",
      to: "reachus@purelatency.com",
      subject: "New Contact Enquiry from Website",
      html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organisation:</strong> ${organisation || "N/A"}</p>
        <p><strong>Purpose:</strong> ${purpose || "N/A"}</p>
        <p><strong>Country:</strong> ${country || "N/A"}</p>
        <p><strong>Phone:</strong> ${phoneNumber || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr />
        <p><strong>User Agent:</strong> ${userAgent || "N/A"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
