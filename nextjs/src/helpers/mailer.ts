import nodemailer from "nodemailer";
import User from "@/models/userModal";
import bcryptjs from "bcryptjs";

export default async function sendMail({ email, emailType, userID }: any) {
  try {
    const hashedToken = await bcryptjs.hash(userID.toString(), 10);

    if (emailType === "verify") {
      await User.findByIdAndUpdate(userID, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 2400000,
      });
    } else if (emailType === "reset") {
      await User.findByIdAndUpdate(userID, {
        forgotPasswordToken: hashedToken,
        forgotPasswordExpire: Date.now() + 2400000,
      });
    }

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: "hidethepain.live",
      to: email,
      subject: emailType === "verify" ? "Verify your email" : "Reset password",
      html: `<p>Click <a href="${process.env.DOMAIN}/${
        emailType === "verify" ? "verifyemail" : "forgotpassword"
      }?token=${hashedToken}">here</a>
            to ${
              emailType === "verify"
                ? "verify your email"
                : "reset your password"
            }. 
            or copy paste this link in your browser ${process.env.DOMAIN}/${
        emailType === "verify" ? "verifyemail" : "forgotpassword"
      }?token=${hashedToken}
            </p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;

  } catch (error: any) {
    throw new Error(error.message);
  }
}
