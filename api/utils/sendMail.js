import nodemailer from "nodemailer";
import { appendFile } from "fs";
const { EMAIL_USER, EMAIL_PASS } = import.meta.env;

const logToFile = (message) => {
  const logMessage = `[${new Date().toISOString()}] ${message}\n`;
  appendFile("sendMail.log", logMessage, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
};

const sendMail = async (name, to, from, subject, message) => {
  logToFile("Sending email..., in the sendMail.js file");
  try {
    const transporter = nodemailer.createTransport({
      service: "postfix",
      host: "mail.lewishadden.com",
      secure: true,
      port: 587,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: `${name} has sent a message: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    logToFile("Email sent!");
    return true;
  } catch (error) {
    logToFile(`Error sending email: ${error}`);
    return false;
  }
};

export default sendMail;
