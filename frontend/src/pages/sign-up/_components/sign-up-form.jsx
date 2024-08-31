import { Lock, Mail, User } from "lucide-react";
import { useState } from "react";

import { PasswordStrengthMeter } from "../../../components/password-strength-meter";
import { Input } from "../../../components/input";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        icon={Mail}
        type="email"
        placeholder="example@domain.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        icon={Lock}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <PasswordStrengthMeter password={password} />

      <button
        className="mt-5 w-full py-3 px-4 bg-accent font-bold rounded-lg shadow-lg hover:brightness-90
          focus:outline-none hover:drop-shadow-glow transition duration-200 active:scale-90"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
};

export { SignUpForm };
