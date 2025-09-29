"use client";
import React from "react";
import { FaChalkboard, FaBookOpen, FaUsers } from "react-icons/fa";
import MembersSection from "../MembersSection/MembersSection";
import Button from "../Button/button";
import { useTranslation } from "react-i18next";

const HowToPlay = () => {
  const { t } = useTranslation();

  const memberAvatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/56.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
  ];

  return (
    <section className="relative py-10 px-6 text-white bg-transparent">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl">
        {/* LEFT SIDE */}
        <div className="p-4 max-w-md mx-auto md:mx-0">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold uppercase leading-[1] text-center ">
            {t("howToPlayTitle")}
          </h1>

          {/* Reusable components (members) */}
          <div className="mt-6 flex flex-col items-center md:items-start gap-8">
            <Button href="#" label={t("button")} />
            <MembersSection avatars={memberAvatars} memberCount={80} />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-12 p-6 max-w-3xl mx-auto md:mx-0 relative md:right-[50px]">
          {/* Classroom */}
          <div className="flex items-start gap-4">
            <div className="bg-[#1f0a30] p-4 rounded-xl text-pink-400">
              <FaChalkboard size={45} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-bold uppercase">
                {t("classroomTitle")}
              </h3>
              <p className="text-gray-400 text-lg md:text-[20px]">
                {t("classroomText")}
              </p>
            </div>
          </div>

          {/* Coaching */}
          <div className="flex items-start gap-4">
            <div className="bg-[#1f0a30] p-4 rounded-xl text-cyan-400">
              <FaBookOpen size={45} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-bold uppercase">
                {t("coachingTitle")}
              </h3>
              <p className="text-gray-400 text-lg md:text-[20px]">
                {t("coachingText")}
              </p>
            </div>
          </div>

          {/* Community */}
          <div className="flex items-start gap-4">
            <div className="bg-[#1f0a30] p-4 rounded-xl text-purple-400">
              <FaUsers size={45} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-bold uppercase">
                {t("communityTitle")}
              </h3>
              <p className="text-gray-400 text-lg md:text-[20px]">
                {t("communityText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
