import { API_KEY_RESEND, FROM_EMAIL, TO_EMAIL } from "./process.js";
import { Resend } from "resend";
import { emailTemplate } from "./template.js"; 

const resend = new Resend(API_KEY_RESEND);

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
      from: `Portfolio information ${FROM_EMAIL}`,
      to: [TO_EMAIL],
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
