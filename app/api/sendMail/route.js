// app/api/sendEmail/route.js

import nodemailer from "nodemailer";

export async function POST(request) {
  const { data } = await request.json();
  const { to, subject, text } = data;
  // Configure the transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com", // Replace with your SMTP server
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // SMTP user from environment variables
      pass: process.env.SMTP_PASS, // SMTP password from environment variables
    },
  });

  try {
    // Send the email
    const info = await transporter.sendMail({
      from: '"Your Name" <your-email@example.com>', // Sender address
      to, // Recipient address
      subject, // Subject
      text, // Plain text content
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully", info }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error sending email", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
