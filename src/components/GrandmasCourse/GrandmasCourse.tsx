"use client";
import React from "react";
import { Check, X } from "lucide-react";
import MembersSection from "../MembersSection/MembersSection";
import Button from "../Button/button";
import { useTranslation } from "react-i18next";

export default function GrandmasCourse() {
  const { t } = useTranslation();

  const traditionalGurus = t("traditionalGurus", {
    returnObjects: true,
  }) as string[];
  const stealMyAgency = t("stealMyAgency", { returnObjects: true }) as string[];

  const memberAvatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/56.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
  ];

  return (
    <div className="mt-20 min-h-screen flex flex-col items-center justify-center text-white">
      {/* Header */}
      <div className="flex justify-end p-6">
        <div className="flex items-center gap-2 rounded-full px-4 py-2 border border-pink-400/30">
          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          <span className="text-sm font-medium">{t("howWeCompare")}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-2 pb-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-7xl font-black mb-6"
            dangerouslySetInnerHTML={{ __html: t("grandmasCourseTitle") }}
          />
          <p className="text-xl text-gray-400 font-medium">
            {t("grandmasCourseSubTitle")}
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="relative max-w-6xl mx-auto mb-16 flex justify-center items-center">
          {/* Traditional Gurus Card */}
          <div className="w-[400px] h-[450px] rounded-2xl p-8 border border-gray-700">
            <h1 className="text-4xl  text-gray-300 mb-8 text-center">
              {t("traditionalGurusTitle")}
            </h1>
            <div className="space-y-6">
              {traditionalGurus.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-8 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Steal My Agency Card */}
          <div className="absolute top-0 -left-5 w-[500px] h-[540px] rounded-2xl p-8 border border-purple-500 bg-black relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl  mb-8 text-center">
                {t("stealMyAgencyTitle")}
              </h1>
              <div className="space-y-6">
                {stealMyAgency.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <p className="leading-relaxed font-medium text-[20px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-20 flex flex-col items-center gap-8">
          <Button href="#" label={t("heroButton")} />
          <MembersSection avatars={memberAvatars} memberCount={80} />
        </div>
      </div>
    </div>
  );
}
