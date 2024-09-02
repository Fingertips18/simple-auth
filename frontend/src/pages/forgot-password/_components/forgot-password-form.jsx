import { Mail, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

import { ValidateEmail } from "../../../utils/validations";
import { useAuthStore } from "../../../stores/auth-store";
import { Input } from "../../../components/input";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { loading, forgotPassword, success, error: Error } = useAuthStore();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      setSubmitted(true);
      toast.success(success);
    } catch (error) {
      console.error(error);
      toast.error(Error);
    }
  };

  const emailValid = ValidateEmail(email);
  const disabled = !email || !emailValid;

  return !submitted ? (
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

      <button
        className="mt-5 w-full py-3 px-4 bg-accent font-bold rounded-lg shadow-lg hover:brightness-90
        focus:outline-none hover:drop-shadow-glow transition duration-200 active:scale-90 flex-center
      disabled:bg-accent/50 disabled:text-foreground/50 disabled:pointer-events-none"
        type="submit"
        disabled={loading || disabled}
      >
        {loading ? (
          <Loader className="w-5 h-5 animate-spin" />
        ) : (
          "Send Reset Link"
        )}
      </button>
    </form>
  ) : (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4"
      >
        <Mail className="h-8 w-8 text-white" />
      </motion.div>
      <p className="text-sm text-foreground/80">
        If an account exists for {email}, you will receive a password reset link
        shortly.
      </p>
    </div>
  );
};

export { ForgotPasswordForm };
