"use client";

import {
  Check,
  FileText,
  ClipboardList,
  Megaphone,
  Users,
  Rocket,
  Shield,
} from "lucide-react";
import React from "react";
import Button from "../Button/button";
import { useTranslation } from "react-i18next";

interface Feature {
  icon: React.ElementType;
  textKey: string; // key for i18n
}

const features: Feature[] = [
  { icon: FileText, textKey: "feature1" },
  { icon: ClipboardList, textKey: "feature2" },
  { icon: Megaphone, textKey: "feature3" },
  { icon: Users, textKey: "feature4" },
  { icon: Rocket, textKey: "feature5" },
  { icon: Shield, textKey: "feature6" },
];

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="mt-15 relative flex flex-col items-center justify-center min-h-screen px-4 text-center pt-24">
      {/* Heading */}
      <p className="text-yellow-400 text-sm mb-2">{t("students")}</p>
      <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-7xl leading-[1.03] uppercase">
        {t("heroTitle")}
      </h1>

      {/* Subheading */}
      <p className="text-gray-300 mt-4 max-w-2xl text-base sm:text-lg">
        {t("heroSubtitle")}
      </p>

      {/* Features / Cards */}
      <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-6 mt-8">
        {features.map((item, i) => (
          <li
            key={i}
            className="cursor-pointer rounded-lg bg-white p-4 text-center transition-transform duration-300 ease-out hover:translate-y-[-5px] hover:scale-105 hover:shadow-lg"
          >
            {/* Icon: always black */}
            <item.icon className="mx-auto w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-black" />

            {/* Text: always black */}
            <p className="mt-2 text-xs leading-tight font-medium text-black md:text-sm">
              {t(item.textKey)}
            </p>
          </li>
        ))}
      </ul>

      {/* Reusable Button */}
      <Button href="#" label={t("button")} />

      {/* down checks */}
      <div className="bg-transparent py-4 px-6">
        <div className="flex items-center justify-center space-x-8 max-w-4xl mx-auto">
          {["consistency", "quality", "reliability", "transparency"].map(
            (key, i) => (
              <div key={i} className="flex items-center space-x-2 text-white">
                <Check className="w-5 h-5 text-purple-400" />
                <span className="text-lg font-medium">{t(key)}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
