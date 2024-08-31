import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Input = ({ icon: Icon, ...props }) => {
  const [obscure, setObscure] = useState(true);

  const { type: inputType } = props;
  const isPassword = inputType === "password";
  const type = obscure && isPassword ? inputType : "text";

  const EyeIcon = obscure ? EyeOff : Eye;

  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex-center pl-3 pointer-events-none">
        <Icon className="size-5 text-primary" />
      </div>
      <input
        {...props}
        type={type}
        className="w-full px-10 py-2 bg-secondary bg-opacity-50 rounded-lg border border-secondary outline-none
        focus:border-primary/20 focus:ring-2 focus:ring-primary placeholder-foreground/40 transition duration-200"
      />
      {isPassword && (
        <button
          onClick={() => setObscure(!obscure)}
          className="absolute inset-y-0 right-0 flex-center pr-3"
        >
          <EyeIcon className="size-5 text-primary" />
        </button>
      )}
    </div>
  );
};

export { Input };
