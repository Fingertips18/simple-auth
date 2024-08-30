import { mailtrapClient, sender } from "../configs/mailtrap.config.js";

export const sendWelcomeEmail = async (username, email) => {
  const recipients = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipients,
      template_uuid: process.env.MAILTRAP_TEMPLATE_ID,
      template_variables: {
        name: username,
      },
    });

    console.log("Welcome email sent successfully!", response);
  } catch (error) {
    console.error("Error sending welcome email!", error);
    throw new Error(`Error sending email: ${error}`);
  }
};
