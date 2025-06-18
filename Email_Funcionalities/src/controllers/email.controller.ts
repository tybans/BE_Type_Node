import { Request, Response } from "express";
import {transporter} from "../config/mailer";
import { generateEmailHTML } from "../utils/emailTemplate";

export const sendEmail = async(req: Request, res: Response) => {

  const {to, subject, name} = req.body

  const htmlContent = generateEmailHTML(name) /*It calls a function named generateEmailHTML and passes the variable name as an argument.
  The returned HTML string is stored in the variable htmlContent.

*/

  try {
    const info = await transporter.sendMail({
      from: `"My App" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: htmlContent,
    })

    res.status(200).json({
      message: "Email sent", 
      messageId: info.messageId
    })
  } catch (error: any) {
    console.log("Email send error", error);
    
    res.status(500).json({
      error: "Email failed",
      details: error.message || error
    })
  }

} // Function to send an email