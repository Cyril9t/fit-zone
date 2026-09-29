console.log("🔥🔥🔥 EMAIL.JS FILE LOADED 🔥🔥🔥");

import "dotenv/config";
import nodemailer from "nodemailer";

console.log("===== SMTP CONFIG =====");
console.log("SMTP HOST:", process.env.SMTP_HOST);
console.log("SMTP PORT:", process.env.SMTP_PORT);
console.log("EMAIL USER:", process.env.EMAIL_USER);
console.log("EMAIL PASS EXISTS:", !!process.env.EMAIL_PASS);
console.log("=======================");


export const messenger = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  family: 4,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

