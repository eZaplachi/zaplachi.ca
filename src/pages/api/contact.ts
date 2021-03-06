import { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";
import DOMPurify from "isomorphic-dompurify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get email key as json to access google service account
  // TODO fix mailer credentials
  const keyEnvVar = {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  };
  if (!(keyEnvVar.pass || keyEnvVar.user)) {
    res.status(500);
    throw new Error("The $CREDS env variable was not found!");
  }

  // Sanitize to prevent xss attacks
  const email: string = req.body.email;
  const subject: string = req.body.subject;
  const message: string = req.body.message;

  const sanitizedEmail: string = DOMPurify.sanitize(email);
  const sanitizedSubject: string = DOMPurify.sanitize(subject);
  const sanitizedMessage: string = DOMPurify.sanitize(message);

  try {
    const transporter = createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.EMAIL_USERNAME,
      to: ["evan@zaplachi.ca", sanitizedEmail],
      subject: "Thank you for contacting Evan Zap",
      text:
        "I really appreciate the message and I will get back to you as soon as I can." +
        "| From: " +
        sanitizedEmail +
        "| Subject:" +
        sanitizedSubject +
        "| Message: " +
        sanitizedMessage,
      html: `<div>I really appreciate the message and I will get back to you as soon as I can.</div>
            <div>From: ${sanitizedEmail}</div>
            <div>
              <h3>Your Message:</h3>
              <h6>Subject:</h6>
              <p>${sanitizedSubject}</p>
              <h6>Message:</h6>
              <p>${sanitizedMessage}</p>
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
