import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load .env file manually from server folder
dotenv.config({ path: path.resolve(__dirname, ".env") });

const resend = new Resend(process.env.RESEND_API_KEY);


interface Inquiry {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

export async function sendContactEmail(inquiry: Inquiry) {
  const { name, email, company, service, message } = inquiry;

  try {
    const { data, error } = await resend.emails.send({
      from: `Technewity Labs <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL!,
      subject: `New Inquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Service:</strong> ${service || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("❌ Email failed:", error);
      throw new Error("Email sending failed");
    }

    console.log("✅ Email sent:", data?.id);
  } catch (err) {
    console.error("❌ sendContactEmail error:", err);
    throw err;
  }
}
