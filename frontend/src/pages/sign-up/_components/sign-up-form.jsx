import { Lock, Mail, User, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

import { PasswordStrengthMeter } from "../../../components/password-strength-meter";
import { ValidateEmail, ValidatePassword } from "../../../utils/validations";
import { useAuthStore } from "../../../stores/auth-store";
import { AppRoutes } from "../../../constants/routes";
import { Input } from "../../../components/input";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signUp, loading, error: Error } = useAuthStore();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(username, email, password);
      navigate(AppRoutes.verifyEmail);
    } catch (error) {
      console.error(error);
      toast.error(Error);
    }
  };

  const usernameValid = username.length > 3;
  const emailValid = ValidateEmail(email);
  const passwordValid = ValidatePassword(password).allCriteriaMet;

  const disabled =
    !username ||
    !usernameValid ||
    !email ||
    !emailValid ||
    !password ||
    !passwordValid;

  return (
    <form onSubmit={onSubmit}>
      <Input
        icon={User}
        type="text"
        placeholder="john doe"
        value={username}
        disabled={loading}
        autoComplete="username"
        name="username"
        maxLength={30}
        onChange={(e) => setUsername(e.target.value)}
        isValid={usernameValid}
      />
      <Input
        icon={Mail}
        type="email"
        placeholder="example@domain.com"
        value={email}
        disabled={loading}
        autoComplete="email"
        name="email"
        maxLength={30}
        onChange={(e) => setEmail(e.target.value)}
        isValid={emailValid}
      />
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

      <PasswordStrengthMeter password={password} />

      <button
        className="mt-5 w-full py-3 px-4 bg-accent font-bold rounded-lg shadow-lg hover:brightness-90
        focus:outline-none hover:drop-shadow-glow transition duration-200 active:scale-90 flex-center
        disabled:bg-accent/50 disabled:text-foreground/50 disabled:pointer-events-none"
        type="submit"
        disabled={loading || disabled}
      >
        {loading ? <Loader className="w-5 h-5 animate-spin" /> : "Sign Up"}
      </button>
    </form>
  );
};

export { SignUpForm };
