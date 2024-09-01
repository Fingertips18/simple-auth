import { Lock, Mail, User, Loader } from "lucide-react";
import { useState } from "react";

import { PasswordStrengthMeter } from "../../../components/password-strength-meter";
import { Input } from "../../../components/input";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
  };

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
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        icon={Mail}
        type="email"
        placeholder="example@domain.com"
        value={email}
        disabled={loading}
        autoComplete="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        icon={Lock}
        type="password"
        placeholder="Password"
        value={password}
        disabled={loading}
        autoComplete="off"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <PasswordStrengthMeter password={password} />

      <button
        className="mt-5 w-full py-3 px-4 bg-accent font-bold rounded-lg shadow-lg hover:brightness-90
          focus:outline-none hover:drop-shadow-glow transition duration-200 active:scale-90 flex-center"
        type="submit"
        disabled={loading}
      >
        {loading ? <Loader className="w-5 h-5 animate-spin" /> : "Sign Up"}
      </button>
    </form>
  );
};

export { SignUpForm };
