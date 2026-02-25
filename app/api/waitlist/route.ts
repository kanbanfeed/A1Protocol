import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const { error: dbError } = await supabase
    .from("waitlist_leads")
    .insert([{ email }]);

  if (dbError) {
    console.error("DB Error:", dbError);
    return NextResponse.json({ error: "DB failed" }, { status: 500 });
  }

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "[PROTOCOL NOTICE] Application for Founding 100 Received",
    text: `PROTOCOL STATUS: VERIFICATION PENDING

    Your application for the Founding 100 has been formally recorded.

    All submissions are undergoing eligibility review under A1 Protocol admission criteria.

    If your profile meets qualification standards, an Initiation Link will be issued to this email address.

    Seats are allocated strictly in order of verification.

    — A1 Protocol
    Institutional Strategy Console`,
  });

  if (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }

  console.log("Email Sent:", data);

  return NextResponse.json({ success: true });
}