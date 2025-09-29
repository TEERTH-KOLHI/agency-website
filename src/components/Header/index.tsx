"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Globe } from "lucide-react"; // modern globe icon
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Header() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("nl"); // default Dutch

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-transparent px-4 sm:px-6 md:px-10 py-3 sm:py-4 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="flex items-center justify-between relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {/* Logo / Title */}
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-pink-400 drop-shadow-md"
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 15px rgba(236, 72, 153, 0.7)",
            transition: { duration: 0.2 }
          }}
          animate={{
            textShadow: [
              "0 0 5px rgba(236, 72, 153, 0.3)",
              "0 0 10px rgba(236, 72, 153, 0.5)",
              "0 0 5px rgba(236, 72, 153, 0.3)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {t("title")}
        </motion.h1>

        {/* Right Language Switcher */}
        <motion.div
          className="flex items-center space-x-2 bg-black border border-[#1846de] rounded-full px-2 py-1 shadow-sm"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(24, 70, 222, 0.4)",
            transition: { duration: 0.2 }
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              transition: { duration: 8, repeat: Infinity, ease: "linear" }
            }}
          >
            <Globe className="w-4 h-4 text-gray-300" />
          </motion.div>
          <div className="flex space-x-1">
            <motion.button
              onClick={() => setLanguage("nl")}
              className={`px-2 py-0.5 text-xs sm:text-sm rounded-full transition-all ${
                language === "nl"
                  ? "bg-[#1846de] text-white font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={language === "nl" ? {
                boxShadow: "0 0 8px rgba(24, 70, 222, 0.6)"
              } : {}}
              transition={{ duration: 0.2 }}
            >
              NL
            </motion.button>
            <motion.button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 text-xs sm:text-sm rounded-full transition-all ${
                language === "en"
                  ? "bg-[#1846de] text-white font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={language === "en" ? {
                boxShadow: "0 0 8px rgba(24, 70, 222, 0.6)"
              } : {}}
              transition={{ duration: 0.2 }}
            >
              EN
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
