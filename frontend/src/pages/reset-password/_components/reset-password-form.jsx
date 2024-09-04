import { useParams, useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { ValidatePassword } from "../../../utils/validations";
import { useAuthStore } from "../../../stores/auth-store";
import { AppRoutes } from "../../../constants/routes";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";

const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { loading, resetPassword, success, error: Error } = useAuthStore();
  const { token } = useParams();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await resetPassword(token, password);
      toast.success(success);
      navigate(AppRoutes.signIn);
    } catch (error) {
      console.error(error);
      toast.error(Error);
    }
  };

  const passwordValid = ValidatePassword(password).allCriteriaMet;
  const confirmPasswordValid =
    ValidatePassword(confirmPassword).allCriteriaMet &&
    password === confirmPassword;
  const disabled =
    !password ||
    !passwordValid ||
    !confirmPassword ||
    !confirmPasswordValid ||
    password !== confirmPassword;

  return (
    <form onSubmit={onSubmit}>
      <Input
        icon={Lock}
        type="password"
        placeholder="Password"
        value={password}
        disabled={loading}
        autoComplete="off"
        name="password"
        maxLength={64}
        onChange={(e) => setPassword(e.target.value)}
        isValid={passwordValid}
      />
      <Input
        icon={Lock}
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        disabled={loading}
        autoComplete="off"
        name="confirm-password"
        maxLength={64}
        onChange={(e) => setConfirmPassword(e.target.value)}
        isValid={confirmPasswordValid}
      />

      <Button
        loading={loading}
        disabled={disabled}
        label="Set New Password"
        withLoader={false}
        loadingLabel="Resetting..."
      />
    </form>
  );
};

export { ResetPasswordForm };
