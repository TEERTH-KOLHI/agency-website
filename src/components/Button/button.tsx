"use client";
import React from "react";

interface ButtonProps {
  href?: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ href = "#", label }) => {
  return (
    <h1 className="pt-10">
      <a
        href={href}
        className="text-3xl px-8 py-3 rounded-full border-2 border-white bg-transparent text-white font-bold
               inline-block
               transition-shadow duration-300
               hover:shadow-[0_0_15px_5px_rgba(128,90,250,0.6),0_0_25px_10px_rgba(59,130,246,0.4)]
               hover:scale-105"
      >
        {label}
      </a>
    </h1>
  );
};

export default Button;
