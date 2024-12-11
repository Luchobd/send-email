import * as dotenv from "dotenv";
dotenv.config();
import { Resend } from "resend";
import { emailTemplate } from "./template.js";

const resend = new Resend(process.env.API_KEY_RESEND);

export const sendEmail = async ({ name, email, message }) => {
  try {
    // Configuration value email
    const { subject, html } = emailTemplate({
      name,
      message,
      email,
    });

    // Configuration of send email.
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: [email], 
      subject: subject,
      html: html,
    });

    if (error) {
      console.error("Error sending mail:", error);
      return;
    }

    console.log("Email send successfully:", data);
  } catch (err) {
    console.error("unexpected error:", err);
  }
};
