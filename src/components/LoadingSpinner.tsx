"use client";

import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.div
        className="relative w-20 h-20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 border-4 border-purple-500/20 rounded-full"
          animate={{
            borderColor: [
              "rgba(168, 85, 247, 0.2)",
              "rgba(236, 72, 153, 0.2)",
              "rgba(59, 130, 246, 0.2)",
              "rgba(168, 85, 247, 0.2)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Inner spinning element */}
        <motion.div
          className="absolute top-0 left-1/2 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full -ml-1"
          animate={{
            boxShadow: [
              "0 0 10px rgba(168, 85, 247, 0.8)",
              "0 0 20px rgba(236, 72, 153, 0.8)",
              "0 0 10px rgba(168, 85, 247, 0.8)"
            ]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Loading text */}
      <motion.div
        className="absolute mt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          className="text-white font-medium"
          animate={{
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading...
        </motion.span>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;