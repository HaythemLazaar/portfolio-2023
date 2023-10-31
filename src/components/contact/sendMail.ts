"use server";
import { MongoClient } from "mongodb";

export async function sendEmail(formData: {
  email: string;
  subject: string;
  message: string;
  submitted: boolean;
}) {
  try {
    const client = await connectToDatabase();
    const res = await client.db().collection("messages").insertOne({
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });
    if (res) {
      return {
        message: `Message has been sent to haythem.lazaar1@gmail.com`,
      };
    }
    client.close();
  } catch (error) {
    return {
      message: `There has been an error sending your message`,
    };
  }
}

export async function connectToDatabase() {
  const urlMongo: string =
    typeof process.env.MONGODB_URI == "string"
      ? process.env.MONGODB_URI
      : process.env.MONGODB_URI!.toString();
  const client = await MongoClient.connect(urlMongo);
  return client;
}

// export async function sendEmail(formData: {
//   email: string;
//   subject: string;
//   message: string;
//   submitted: boolean;
// }) {
//   try {
//     await createEmail({
//       to: "haythem.lazaar1@gmail.com",
//       subject: formData.subject?.toString(),
//       text: `Email from: <strong>${
//         formData.email
//       }</strong> <br />${formData.message?.toString()}`,
//     });

//     return {
//       message: `Email sent to haythem.lazaar1@gmail.com, please check your email`,
//     };
//   } catch (error) {}
// }

// const createEmail = (options: {
//   to?: string;
//   subject?: string;
//   text?: string;
// }) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.user,
//       pass: process.env.pass,
//     },
//   });

//   const mailOptions = {
//     from: process.env.user,
//     to: options.to,
//     subject: options.subject,
//     html: options.text,
//   };

//   transporter.sendMail(
//     mailOptions,
//     function (err: Error | null, info: SMTPTransport.SentMessageInfo) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(info);
//       }
//     }
//   );
// };
