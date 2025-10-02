"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Header() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("nl"); // default Dutch
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 md:px-10 py-3 sm:py-4 z-50 shadow-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between relative">
        {/* Logo / Title */}
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-black"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          Pioneer Automation Agency
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.div
            className="flex items-center space-x-2 bg-white border border-black rounded-full px-2 py-1 shadow-sm"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: { duration: 8, repeat: Infinity, ease: "linear" },
              }}
            >
              <Globe className="w-4 h-4 text-black" />
            </motion.div>
            <div className="flex space-x-1">
              {["nl", "en"].map((lang) => (
                <motion.button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-0.5 text-xs sm:text-sm rounded-full transition-all ${
                    language === lang
                      ? "bg-black text-white font-semibold"
                      : "text-gray-600 hover:text-black"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={
                    language === lang
                      ? { boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)" }
                      : {}
                  }
                  transition={{ duration: 0.2 }}
                >
                  {lang.toUpperCase()}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md border border-gray-300"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden mt-2 flex flex-col gap-2 bg-white border-t border-gray-200 px-4 py-4 rounded-md shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-black" />
            <div className="flex space-x-2">
              {["nl", "en"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 text-sm rounded-full transition-all ${
                    language === lang
                      ? "bg-black text-white font-semibold"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Add links here if needed */}
          {/* Example: */}
          {/* <Link href="/about" className="text-gray-800 hover:text-black">About</Link> */}
        </motion.div>
      )}
    </motion.header>
  );
}
