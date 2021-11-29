import { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const keyEnvVar = process.env.CREDS;
  if (!keyEnvVar) {
    res.status(500);
    throw new Error("The $CREDS env variable was not found!");
  }

  const keys = JSON.parse(keyEnvVar);

  try {
    const transporter = createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        type: "OAuth2",
        user: "evan@zaplachi.ca",
        serviceClient: keys.client_id,
        privateKey: keys.private_key,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.CLIENT_EMAIL,
      to: ["evan@zaplachi.ca", req.body.email],
      subject: "Thank you for contacting Evan Zap",
      text:
        "I really appreciate the message and I will get back to you as soon as I can. | Your Message: | Subject: " +
        req.body.subject +
        "| Message: " +
        req.body.message,
      html: `<div>I really appreciate the message and I will get back to you as soon as I can.</div>
            <div><h3>Your Message:</h3>
            <h6>Subject:</h6>
            <p>${req.body.subject}</p>
            <h6>Message:</h6>
            <p>${req.body.message}</p>
            </div>`,
    };

    await transporter.verify();

    await transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        res.status(404);
      } else {
        console.log(info);
        res.status(200);
        res.send(200);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(404);
  }
}
