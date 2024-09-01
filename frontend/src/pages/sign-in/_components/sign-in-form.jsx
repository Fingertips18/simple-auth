import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { AppRoutes } from "../../../constants/routes";
import { Input } from "../../../components/input";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        icon={Mail}
        type="email"
        placeholder="example@domain.com"
        value={email}
        disabled={loading}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        icon={Lock}
        type="password"
        placeholder="Password"
        value={password}
        disabled={loading}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link
        to={AppRoutes.forgotPassword}
        className="text-sm text-dark-accent hover:underline underline-offset-4 font-semibold"
      >
        Forgot Password?
      </Link>

      <button
        className="mt-5 w-full py-3 px-4 bg-accent font-bold rounded-lg shadow-lg hover:brightness-90
          focus:outline-none hover:drop-shadow-glow transition duration-200 active:scale-90 flex-center"
        type="submit"
        disabled={loading}
      >
        {loading ? <Loader className="w-5 h-5 animate-spin" /> : "Sign In"}
      </button>
    </form>
  );
};

export { SignInForm };
