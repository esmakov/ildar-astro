import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = createTransport({
  // host: "smtp.gmail.com",
  // port: 465,
  // secure: true,
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.GMAIL_USERNAME,
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    accessToken: process.env.OAUTH_ACCESS_TOKEN,
    expires: 3599,
  },
});

export async function post({ request }) {
  console.log(process.env.GMAIL_USERNAME);
  console.log(process.env.OAUTH_CLIENT_ID);
  console.log(process.env.OAUTH_CLIENT_SECRET);
  console.log(process.env.OAUTH_REFRESH_TOKEN);
  console.log(process.env.OAUTH_ACCESS_TOKEN);

  const body = await request.json();
  const mailOptions = {
    from: process.env.GMAIL_USERNAME,
    to: "edwardsmakov@gmail.com", // Replace with your client's email address
    subject: "does this work",
    // text: JSON.stringify(body),
    text: "test",
    html: "<b>Hello world?</b>", // html body
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return new Response("Email sent successfully", {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    return new Response(error, {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}

export const prerender = false;
