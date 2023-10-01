"use server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function sendEmail(formData: {
  email: string;
  subject: string;
  message: string;
  submitted: boolean;
}) {
  try {
    await createEmail({
      to: "haythem.lazaar1@gmail.com",
      subject: formData.subject?.toString(),
      text: `Email from: <strong>${
        formData.email
      }</strong> <br />${formData.message?.toString()}`,
    });

    return {
      message: `Email sent to haythem.lazaar1@gmail.com, please check your email`,
    };
  } catch (error) {}
}

const createEmail = (options: {
  to?: string;
  subject?: string;
  text?: string;
}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "haytoum.lazaar@gmail.com",
      pass: "didkdcruydzhzxys",
    },
  });

  const mailOptions = {
    from: "haytoum.lazaar@gmail.com",
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(
    mailOptions,
    function (err: Error | null, info: SMTPTransport.SentMessageInfo) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    }
  );
};
