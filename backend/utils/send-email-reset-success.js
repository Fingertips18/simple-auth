import { PASSWORD_RESET_SUCCESS_TEMPLATE } from "../templates/email.template.js";
import { mailtrapClient, sender } from "../configs/mailtrap.config.js";

export const sendEmailResetSuccess = async (email) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });

    console.log("Password reset email sent successfully!", response);
  } catch (error) {
    console.error("Error sending reset password success email!", error);
    throw new Error(`Error sending reset password success email: ${error}`);
  }
};
