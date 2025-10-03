"use client";

import React from "react";
import { Check, X, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ComparisonSection() {
  const { t } = useTranslation();

  const vocalchatFeatures = t("comparison.vocalchatFeatures", {
    returnObjects: true,
  }) as string[];
  const traditionalLimitations = t("comparison.traditionalLimitations", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="min-h-screen bg-gray-50 py-5 px-4 sm:px-8 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-center items-center lg:items-center gap-6 lg:gap-90 mb-5 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-gray-800">
            {t("comparison.header.part1")}{" "}
            <span className="text-purple-500">vs.</span>
            <br />
            {t("comparison.header.part2")}
          </h1>
          <button className="flex items-center gap-2 px-5 py-2.5 border border-black rounded-md bg-black text-white text-sm font-medium hover:bg-transparent hover:text-black transition-all duration-300 cursor-pointer">
            {t("comparison.bookCall")}
            <Phone className="w-4 h-4" />
          </button>
        </div>

        {/* Comparison Container */}
        <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-16 border border-white/20 rounded-2xl shadow-md shadow-black/10 bg-transparent backdrop-blur-sm p-4 lg:p-6 mx-auto w-full lg:max-w-[1000px]">
          {/* Left Side - VocalChat AI */}
          <div className="flex-1 mb-6 lg:mb-0">
            <div className="bg-gradient-to-br from-purple-200 via-purple-150 to-purple-100 rounded-2xl p-4">
              <div className="bg-black rounded-xl p-5 w-full">
                {/* Icon Section */}
                <div className="bg-gray-900 rounded-lg py-3 px-4 mb-5 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-purple-500"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r="14"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    />
                    <circle cx="20" cy="20" r="6" fill="currentColor" />
                    <path
                      d="M20 6v8M20 26v8M6 20h8M26 20h8"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Features */}
                <div className="space-y-3 overflow-x-visible">
                  {vocalchatFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 whitespace-normal"
                    >
                      <Check
                        className="w-4 h-4 text-white mt-0.5 flex-shrink-0"
                        strokeWidth={2.5}
                      />
                      <span className="text-white text-sm font-normal">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Traditional */}
          <div className="flex-1 pt-2 mt-4 md:mt-0 lg:mt-0">
            {/* Traditional Badge */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="inline-flex items-center px-4 py-1.5 bg-white border border-gray-300 rounded-full">
                <span className="text-gray-800 text-xs font-medium">
                  {t("comparison.traditionalBadge")}
                </span>
              </div>
            </div>

            {/* Limitations */}
            <div className="space-y-3 overflow-x-visible">
              {traditionalLimitations.map((limitation, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 whitespace-normal"
                >
                  <X
                    className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-gray-700 text-sm font-normal">
                    {limitation}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
