"use client";
import React from "react";
import MembersSection from "../MembersSection/MembersSection";
import Button from "../Button/button";
import { useTranslation } from "react-i18next";

const EarlyLifeProfile = () => {
  const { t } = useTranslation();

  // Example avatars array (replace with your real data)
  const memberAvatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/56.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden flex flex-col items-center justify-center gap-16 px-8">
      {/* About the Founder button */}
      <div>
        <button className="bg-pink-500/20 border border-pink-400/30 rounded-full px-6 py-2 text-sm font-medium text-pink-300 backdrop-blur-sm hover:bg-pink-500/30 transition-colors duration-300">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <span>{t("aboutFounder")}</span>
          </div>
        </button>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16">
          <h1
            className="text-3xl md:text-8xl font-black tracking-wider mb-4"
            dangerouslySetInnerHTML={{ __html: t("earlyLifeTitle") }}
          />
        </div>

        {/* Content section */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-12">
          {/* Image section */}
          <div style={{ transform: "translateX(-100px) translateY(70px)" }}>
            <div className="-rotate-5 relative z-20 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 bg-white/10">
              <img
                src="images/agencies/img1.jpg"
                alt={t("nathanLaptopAlt")}
                className="w-80 h-60 object-cover rounded-xl"
              />
            </div>

            <div className="absolute -top-22 -right-38 z-30 rounded-xl p-4 shadow-xl transform rotate-9 hover:rotate-6 transition-transform duration-300 bg-white/10">
              <img
                src="images/agencies/img2.jpg"
                alt={t("luxuryCarAlt")}
                className="w-80 h-60 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Text content */}
          <div
            className="flex-1 max-w-lg"
            style={{ transform: "translateX(60px)" }}
          >
            <p className="text-[23px] leading-relaxed text-gray-200 mb-6">
              <span className="font-semibold">{t("nathanName")}</span>{" "}
              {t("earlyLifeDesc1Part1")}{" "}
              <span className="font-semibold">{t("earlyLifeDesc1Part2")}</span>
              {t("earlyLifeDesc1Part3")}{" "}
              <span className="font-bold text-cyan-300">
                {t("earlyLifeAgency")}
              </span>{" "}
              {t("earlyLifeDesc1Part4")}
            </p>

            <p className="text-[23px] leading-relaxed text-gray-200">
              {t("earlyLifeDesc2")}
            </p>
          </div>
        </div>

        {/* Reusable Button */}
        <div className="text-center mt-20 flex flex-col items-center gap-8">
          <Button href="#" label={t("heroButton")} />
          <MembersSection avatars={memberAvatars} memberCount={80} />
        </div>
      </div>
    </div>
  );
};

export default EarlyLifeProfile;
