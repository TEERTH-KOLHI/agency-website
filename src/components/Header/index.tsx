"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Globe } from "lucide-react"; // modern globe icon
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("nl"); // default Dutch

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent px-4 sm:px-6 md:px-10 py-3 sm:py-4 z-50">
      <div className="flex items-center justify-between relative">
        {/* Logo / Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-pink-400 drop-shadow-md">
          {t("title")}
        </h1>

        {/* Center CTA Button */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link
            href="#waitlist"
            className="relative inline-block px-5 sm:px-6 py-2 sm:py-0.5 font-semibold sm:font-bold text-white rounded-4xl border-2 border-[#1846de]
               bg-black
               hover:shadow-[0_0_15px_5px_rgba(128,90,250,0.6),0_0_25px_10px_rgba(59,130,246,0.4)]
               transition-shadow duration-300 text-center"
          >
            <span className="relative z-10 text-lg sm:text-xl md:text-2xl">
              <h1>{t("button")}</h1>
            </span>
          </Link>
        </div>

        {/* Right Language Switcher */}
        <div className="flex items-center space-x-2 bg-black border border-[#1846de] rounded-full px-2 py-1 shadow-sm">
          <Globe className="w-4 h-4 text-gray-300" />
          <div className="flex space-x-1">
            <button
              onClick={() => setLanguage("nl")}
              className={`px-2 py-0.5 text-xs sm:text-sm rounded-full transition-all ${
                language === "nl"
                  ? "bg-[#1846de] text-white font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              NL
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 text-xs sm:text-sm rounded-full transition-all ${
                language === "en"
                  ? "bg-[#1846de] text-white font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
