import { motion } from "framer-motion";

const Orb = () => {
  return (
    <motion.span
      className="absolute w-1/2 h-full rounded-3xl bg-primary blur-lg"
      animate={{
        x: ["-150%", "100%", "150%"],
      }}
      transition={{
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      }}
      aria-hidden="true"
    />
  );
};

export { Orb };
