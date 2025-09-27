"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();

  const [language, setLanguage] = useState("en");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent px-6 py-4 z-50">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide text-pink-400 drop-shadow-md text-center sm:text-left">
          {t("title")}
        </h1>

        <div className="flex items-center gap-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-black text-white px-3 py-2 rounded-full border-2 border-[#1846de] hover:border-indigo-500 transition-colors"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>

          <Link
            href="#waitlist"
            className="relative inline-block px-6 py-2 font-bold text-white rounded-full border-2 border-[#1846de]
               bg-black
               hover:shadow-[0_0_15px_5px_rgba(128,90,250,0.6),0_0_25px_10px_rgba(59,130,246,0.4)]
               transition-shadow duration-300 text-center"
          >
            <h1 className="relative z-10 text-3xl">{t("button")}</h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
