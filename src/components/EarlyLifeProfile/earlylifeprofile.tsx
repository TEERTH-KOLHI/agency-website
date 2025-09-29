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
    <div className="min-h-screen text-white relative overflow-hidden flex flex-col items-center justify-center gap-10 px-4 sm:px-6 md:px-8">
      {/* About the Founder button */}
      <div>
        <button className="bg-pink-500/20 border border-pink-400/30 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium text-pink-300 backdrop-blur-sm hover:bg-pink-500/30 transition-colors duration-300">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <span>{t("aboutFounder")}</span>
          </div>
        </button>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl">
        {/* Title */}
        <div className="text-center mb-10 md:mb-16">
          <h1
            className="text-3xl sm:text-4xl md:text-7xl  font-black tracking-wider mb-4"
            dangerouslySetInnerHTML={{ __html: t("earlyLifeTitle") }}
          />
        </div>

        {/* Content section */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 lg:gap-12">
          {/* Image section */}
          <div
            className="relative flex-shrink-0 mb-8 lg:mb-0 
                       lg:translate-x-[-100px] lg:translate-y-[70px]" // keep original desktop transform
          >
            <div className="-rotate-3 sm:-rotate-5 relative z-20 rounded-2xl p-4 sm:p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 bg-white/10">
              <img
                src="images/agencies/img1.jpg"
                alt={t("nathanLaptopAlt")}
                className="w-60 h-44 sm:w-72 sm:h-52 md:w-80 md:h-60 object-cover rounded-xl"
              />
            </div>

            <div
              className="absolute -top-12 -right-12 sm:-top-16 sm:-right-20 
                         md:-top-20 md:-right-28 
                         lg:-top-22 lg:-right-38 // keep original desktop offsets
                         z-30 rounded-xl p-3 sm:p-4 shadow-xl transform rotate-6 sm:rotate-9 hover:rotate-3 sm:hover:rotate-6 transition-transform duration-300 bg-white/10"
            >
              <img
                src="images/agencies/img2.jpg"
                alt={t("luxuryCarAlt")}
                className="w-60 h-44 sm:w-72 sm:h-52 md:w-80 md:h-60 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Text content */}
          <div
            className="flex-1 max-w-lg text-center lg:text-left 
                       lg:translate-x-[60px]" // keep original desktop transform
          >
            <p className="text-lg sm:text-xl md:text-[23px] leading-relaxed text-gray-200 mb-6">
              <span className="font-semibold">{t("nathanName")}</span>{" "}
              {t("earlyLifeDesc1Part1")}{" "}
              <span className="font-semibold">{t("earlyLifeDesc1Part2")}</span>
              {t("earlyLifeDesc1Part3")}{" "}
              <span className="font-bold text-cyan-300">
                {t("earlyLifeAgency")}
              </span>{" "}
              {t("earlyLifeDesc1Part4")}
            </p>

            <p className="text-lg sm:text-xl md:text-[23px] leading-relaxed text-gray-200">
              {t("earlyLifeDesc2")}
            </p>
          </div>
        </div>

        {/* Reusable Button */}
        <div className="text-center mt-12 md:mt-20 flex flex-col items-center gap-6 md:gap-8">
          <Button href="#" label={t("heroButton")} />
          <MembersSection avatars={memberAvatars} memberCount={80} />
        </div>
      </div>
    </div>
  );
};

export default EarlyLifeProfile;
