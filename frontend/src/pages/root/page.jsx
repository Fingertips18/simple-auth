import { motion } from "framer-motion";

const RootPage = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        ease: "easeOut",
        duration: 1,
      }}
      className="w-full h-full flex-center z-50 relative lg:px-4"
    >
      <motion.h1
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
        }}
        transition={{
          delay: 1,
          duration: 0.2,
          type: "spring",
          bounce: 0.25,
        }}
        className="font-bold text-2xl lg:text-6xl text-center drop-shadow-foreground-glow"
      >
        Welcome to MERN Auth | Frontend
      </motion.h1>
    </motion.section>
  );
};

export default RootPage;
