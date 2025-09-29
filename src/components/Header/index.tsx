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
