import { sendEmail } from "../email/email.js";

export const sendEmailController = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (name && email && message) {
      await sendEmail({
        name,
        email,
        message,
      });
      res.json({ message: "Email sent successfully" });
    } else {
      res.status(404).send("Please fill in all the fields");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
