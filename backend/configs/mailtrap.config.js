import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;

const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Fingertips",
};

export { mailtrapClient, sender };
