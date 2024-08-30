import { VERIFICATION_EMAIL_TEMPLATE } from "../templates/email.template.js";
import { mailtrapClient, sender } from "../configs/mailtrap.config.js";

export const sendEmailVerification = async (email, token) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", token),
      category: "Email Verification",
    });

    console.log("Email verification sent successfully!", response);
  } catch (error) {
    console.error("Error sending verification email!", error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};
