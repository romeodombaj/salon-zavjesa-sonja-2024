// app/api/sendEmail/route.js

import { getNamedMiddlewareRegex } from "next/dist/shared/lib/router/utils/route-regex";
import nodemailer from "nodemailer";

export async function POST(request) {
  console.log("IN EMAIL FUNCTION");

  const data = await request.json();

  console.log(data);

  const { email, name, subject, text } = data;

  console.log("here");
  console.log(email);
  console.log("here2");
  // Configure the transporter

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER, // Replace with your SMTP server
    port: process.env.SMTP_HOST,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // SMTP user from environment variables
      pass: process.env.SMTP_PASS, // SMTP password from environment variables
    },
  });

  try {
    console.log("BEFORE SENDING");
    // Send the email

    console.log(process.env.RECIEVER_MAIL);
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER, //'"Your Name" <shorvat314@gmail.com>',
      to: process.env.RECIEVER_MAIL,
      subject: subject + "[KONTAKT FORMA]",
      html: await bodyHtml({ name, email, subject, text }),
      replyTo: email,
    });

    console.log("AFTER SENDING");

    return new Response(
      JSON.stringify({ message: "Email sent successfully", info }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Error sending email", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

const bodyHtml = async ({ name, email, subject, text }) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Email Data</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; background-color: #f9f9f9; padding: 20px; }
    .container { background-color: #ffffff; padding: 20px; max-width: 100%; margin: 0 auto; }
    .label { }
  </style>
</head>
<body>
  <div class="container">

        <div class="label"><strong>Ime: </strong> ${name}</div>
        <p>----------------</p>
       
        <div class="label"><strong>Email: </strong>${email}</div>
        <p>----------------</p>

        <div class="label"><strong>Naslov:</strong> ${subject}</div>
        <p>----------------</p>

        <div class="label"><strong>Poruka:</strong> <br> ${text}</div>
        <p>----------------</p>
        
  </div>
</body>
</html>
`;
};
