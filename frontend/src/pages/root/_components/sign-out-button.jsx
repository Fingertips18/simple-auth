import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { toast } from "sonner";

const SignOutButton = ({ loading, success, error: Error, signOut }) => {
  const onClick = async () => {
    try {
      await signOut();
      toast.success(success);
    } catch (error) {
      console.error(error);
      toast.error(Error);
    }
  };

  return (
    <motion.button
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.5,
      }}
      className="mt-5 w-full py-3 px-4 bg-accent font-bold rounded-lg shadow-lg hover:brightness-90
        focus:outline-none hover:drop-shadow-glow active:scale-90 flex-center
        disabled:bg-accent/50 disabled:text-foreground/50 disabled:pointer-events-none"
      disabled={loading}
      onClick={onClick}
    >
      {loading ? <Loader className="w-5 h-5 animate-spin" /> : "Sign Out"}
    </motion.button>
  );
};

export { SignOutButton };
