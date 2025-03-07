// app/api/sendEmail/route.js

import nodemailer from "nodemailer";
import axios from "axios";

export async function POST(request) {
  const data = await request.json();

  const { email, name, subject, text, token } = data;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_HOST,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const secretKey = process.env.SECRET_KEY; // Use your secret key here

  try {
    // Send the email

    const verificationResponse = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: secretKey,
          response: token, // Send the token from the client
        },
      }
    );

    const { success } = verificationResponse.data;

    if (!success) {
      console.log("RECATPCHA ERROR");
      return new Response(JSON.stringify({ message: "Error captcha" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const info = await transporter.sendMail({
      from: process.env.SMTP_USER, //'"Your Name" <shorvat314@gmail.com>',
      to: process.env.RECIEVER_MAIL,
      subject: subject + "[KONTAKT FORMA]",
      html: await bodyHtml({ name, email, subject, text }),
      replyTo: email,
    });

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
