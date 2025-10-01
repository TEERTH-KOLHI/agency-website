"use client";

import { motion } from "framer-motion";

const AnimatedDownArrow: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center mt-8 cursor-pointer"
      animate={{ y: [0, 15, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {/* Long Tail */}
      <motion.div
        className="w-[2px] h-24 bg-gray-400 mb-1"
        animate={{ height: [24, 32, 24], opacity: [0.3, 0.8, 0.3] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />

      {/* Downward Arrow Head */}
      <motion.div
        className="w-4 h-4 bg-gray-800"
        style={{ clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)" }} // downward pointing triangle
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default AnimatedDownArrow;
