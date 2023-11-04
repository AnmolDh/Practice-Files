import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModal";
import sendMail from "@/helpers/mailer";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "Invalid User" }, { status: 400 });
    }
    await sendMail({ email, emailType: "reset", userID: user._id });
    return NextResponse.json({ message: "email sent" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({error: error.message}, {status: 500})
  }
}