"use client";
import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  href?: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ href = "#", label }) => {
  return (
    <h1 className="pt-10">
      <motion.a
        href={href}
        className="text-3xl px-8 py-3 rounded-full border-2 border-white bg-transparent text-white font-bold
               inline-block relative overflow-hidden group"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 25px rgba(128,90,250,0.6), 0 0 50px rgba(59,130,246,0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-full opacity-0"
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              "0 0 0px rgba(128,90,250,0)",
              "0 0 10px rgba(128,90,250,0.3)",
              "0 0 0px rgba(128,90,250,0)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Text with subtle animation */}
        <motion.span
          className="relative z-10"
          whileHover={{
            textShadow: "0 0 8px rgba(255,255,255,0.8)"
          }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.span>
      </motion.a>
    </h1>
  );
};

export default Button;
