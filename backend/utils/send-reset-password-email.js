import { PASSWORD_RESET_REQUEST_TEMPLATE } from "../templates/email.template.js";
import { mailtrapClient, sender } from "../configs/mailtrap.config.js";
import { AuthRoutes } from "../constants/routes.constant.js";

export const sendResetPasswordEmail = async (email, resetToken) => {
  const resetURL = `${process.env.CLIENT_URL}${AuthRoutes.resetPassword.path}/${resetToken}`;

  const recipients = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipients,
      subject: "Reset Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Reset Password",
    });

    console.log("Welcome email sent successfully!", response);
  } catch (error) {
    console.error("Error sending reset password", error);
    throw new Error(`Error sending reset password: ${error}`);
  }
};
