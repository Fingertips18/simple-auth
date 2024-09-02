import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

import { ValidateEmail, ValidatePassword } from "../../../utils/validations";
import { useAuthStore } from "../../../stores/auth-store";
import { AppRoutes } from "../../../constants/routes";
import { Input } from "../../../components/input";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, signIn, success, error: Error } = useAuthStore();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await signIn(email, password);
      toast.success(success);
    } catch (error) {
      console.error(error);
      toast.error(Error);
    }
  };

  const emailValid = ValidateEmail(email);
  const passwordValid = ValidatePassword(password).allCriteriaMet;
  const disabled = !email || !emailValid || !password || !passwordValid;

  return (
    <form onSubmit={onSubmit}>
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
      <Link
        to={AppRoutes.forgotPassword}
        className="text-sm text-dark-accent hover:underline underline-offset-4 font-semibold"
      >
        Forgot Password?
      </Link>

      <button
        className="mt-5 w-full py-3 px-4 bg-accent font-bold rounded-lg shadow-lg hover:brightness-90
        focus:outline-none hover:drop-shadow-glow transition duration-200 active:scale-90 flex-center
        disabled:bg-accent/50 disabled:text-foreground/50 disabled:pointer-events-none"
        type="submit"
        disabled={loading || disabled}
      >
        {loading ? <Loader className="w-5 h-5 animate-spin" /> : "Sign In"}
      </button>
    </form>
  );
};

export { SignInForm };
