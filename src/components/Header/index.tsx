"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("nl"); // default Dutch
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contactus" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 md:px-10 py-3 sm:py-4 z-50 shadow-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between relative w-full">
        {/* Logo on the left */}
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-black"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          Pioneer
        </motion.h1>

        {/* Center links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-gray-800 hover:text-black font-medium transition-colors duration-200 ${
                pathname === link.href ? "text-purple-500" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Language selector on the right */}
        <div className="hidden md:flex">
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
          {/* Mobile links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-gray-800 hover:text-black font-medium transition-colors duration-200 ${
                pathname === link.href ? "text-purple-500" : ""
              }`}
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile language selector */}
          <div className="flex items-center space-x-2 mt-2">
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
        </motion.div>
      )}
    </motion.header>
  );
}
