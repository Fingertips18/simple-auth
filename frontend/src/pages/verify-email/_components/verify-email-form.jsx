import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const VerifyEmailForm = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [submittedCode, setSubmittedCode] = useState([]);
  const inputRef = useRef([]);
  const [loading] = useState(false);

  const onChange = (value, index) => {
    if (index === 3 && value.length > 1) return;

    value = value.replace(/\D/g, "");

    const newCode = [...code];

    if (value.length > 1) {
      const pastedCode = value.slice(0, 4).split("");
      for (let i = 0; i < 4; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);

      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 3 ? lastFilledIndex + 1 : 3;
      inputRef.current[focusIndex]?.focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        inputRef.current[index + 1]?.focus();
      }
    }
  };

  const onKeyDown = (event, index) => {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const verificationCode = code.join("");
      toast.success(`Verification code submitted: ${verificationCode}`);
    },
    [code]
  );

  useEffect(() => {
    if (code.every((digit) => digit !== "") && submittedCode !== code) {
      setSubmittedCode(code);
      onSubmit(new Event("submit"));
    }
  }, [code, submittedCode, onSubmit]);

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="flex-center gap-x-4">
        {code.map((digit, i) => (
          <input
            key={`code-${i}`}
            name={`code-${i}`}
            ref={(el) => (inputRef.current[i] = el)}
            type="text"
            maxLength={4}
            value={digit}
            onChange={(e) => onChange(e.target.value, i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            autoComplete="off"
            className="w-12 h-12 text-center text-2xl font-bold bg-secondary bg-opacity-50 rounded-lg border border-secondary outline-none
            focus:border-primary/20 focus:ring-2 focus:ring-primary placeholder-foreground/40 transition duration-200"
          />
        ))}
      </div>
      <button
        className="mt-5 w-full py-3 px-4 bg-accent font-bold rounded-lg shadow-lg hover:brightness-90
        focus:outline-none hover:drop-shadow-glow transition duration-200 active:scale-90 flex-center"
        type="submit"
        disabled={loading}
      >
        {loading ? "Verifying..." : "Verify Email"}
      </button>
    </form>
  );
};

export { VerifyEmailForm };
