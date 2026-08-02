
import Contact from "../Model/contact.model.js";
import nodemailer from "nodemailer";
export const sendContact = async (req, res) => {
  try {
    console.log("1. Request received");

    const { name, email, subject, message } = req.body;

    console.log("2. Data received");

    await Contact.create({
      name,
      email,
      subject,
      message,
    });

    console.log("3. MongoDB Saved");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("4. Transport Created");

    await transporter.verify();

    console.log("5. SMTP Verified");

 const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  family: 4, // Force IPv4
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

    console.log("6. Email Sent");

    return res.status(200).json({
      success: true,
      message: "Message Sent",
    });

  } catch (error) {
    console.log("ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};