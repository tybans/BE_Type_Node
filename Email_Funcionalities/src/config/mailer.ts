import nodemailer from 'nodemailer'; // Importing nodemailer from 'nodemailer', which is by default installed with the package. 
import dotenv from 'dotenv';

dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail", // The email service provider, e.g., Gmail, Yahoo, etc.
  auth: {
    user: process.env.EMAIL_USER, // The email address to send from, stored in environment variable
    pass: process.env.EMAIL_PASS, // The password for the email account, stored in environment variable
  }, // Authentication object containing user credentials}
}) // Create a transporter object using the default SMTP transport
//What is SMTP transport?
//SMTP (Simple Mail Transfer Protocol) is a protocol used for sending emails across the Internet.
// It defines how email messages are sent from one server to another.
// The transporter object is used to send emails using the SMTP protocol.
//Explain createTransport
//The createTransport method is used to create a transporter object that can be used to send emails
// using the SMTP protocol. It takes an options object as an argument, which can include the host, port, secure, auth, and other options.
