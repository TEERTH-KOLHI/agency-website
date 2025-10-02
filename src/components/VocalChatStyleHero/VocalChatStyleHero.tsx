"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import VocalChatAgentCarousel from "./VocalChatAgentCarousel";
import AgentPreview from "./AgentPreview";
import AnimatedDownArrow from "./AnimatedDownArrow";
import { HelpCircle, Star } from "lucide-react"; // Import black & white icons

const VocalChatStyleHero: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <motion.section
      className="bg-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Layout */}
      <motion.div
        className="max-w-7xl w-full flex flex-col items-center mb-12 sm:mb-16 md:mb-20 pt-6 sm:pt-12"
        variants={itemVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-black font-bold text-4xl sm:text-5xl lg:text-[42px] leading-tight mb-6">
              {t("vocalchat.heroTitle")}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 whitespace-pre-line">
              {t("vocalchat.heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button className="cursor-pointer bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-[4px] text-sm sm:text-base font-medium shadow-lg border border-black hover:bg-white hover:text-black transition">
                {t("vocalchat.learnMore")}
              </button>
              <button className="cursor-pointer bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-[4px] text-sm sm:text-base font-medium shadow-lg border border-black hover:bg-white hover:text-black transition">
                {t("vocalchat.bookCall")}
              </button>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="relative w-full flex justify-center mt-6 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent rounded-2xl -z-10"></div>
            <VocalChatAgentCarousel />
          </div>
        </div>
      </motion.div>

      {/* Section Heading */}
      <div className="w-full max-w-7xl mx-auto text-center mb-6 md:mb-8 px-2 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          {t("vocalchat.sectionHeading")}
        </h1>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
          {t("vocalchat.sectionSubtitle")}
        </p>
      </div>

      {/* Horizontal Layout: AgentPreview | AnimatedDownArrow | Problem Statement */}
      <motion.div
        className="flex flex-col lg:flex-row items-start justify-start w-full max-w-7xl gap-4 mt-6 px-2 sm:px-4 lg:mr-40"
        variants={itemVariants}
      >
        {/* Left: Agent Preview */}
        <div className="w-full lg:flex-1 lg:min-w-[200px] mt-0 flex justify-center lg:justify-start">
          <AgentPreview />
        </div>

        {/* Right: Problem Statement */}
        <div className="w-full lg:flex-1 lg:min-w-[300px] mt-4 lg:mt-0 lg:mr-0">
          <motion.div
            className="w-full bg-black rounded-2xl p-2 sm:p-3 text-white"
            variants={itemVariants}
          >
            {/* Header */}
            <div className="flex justify-center mb-2 sm:mb-3">
              <span className="bg-gray-900 text-white text-[9px] sm:text-xs px-2 py-1 rounded-full">
                {t("vocalchat.stopLosing")}
              </span>
            </div>

            {/* Problem Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {/* Left Card */}
              <div className="relative bg-black p-2 sm:p-3 rounded-xl text-left">
                <h4 className="text-xs sm:text-sm font-semibold mb-1">
                  {t("vocalchat.problem1Title")}
                </h4>
                <p className="text-gray-400 text-[10px] sm:text-xs">
                  {t("vocalchat.problem1Desc")}
                </p>
                <div className="absolute bottom-1 left-1 text-gray-400 text-3xl sm:text-4xl select-none">
                  <HelpCircle strokeWidth={1.5} />
                </div>
              </div>

              {/* Center Highlighted Card */}
              <div className="relative bg-gradient-to-b from-transparent-900 to-purple-900 p-2 sm:p-3 rounded-xl text-left shadow-md">
                <h4 className="text-sm sm:text-base font-bold mb-1">
                  {t("vocalchat.problem2Title")}
                </h4>
                <p className="text-gray-200 mb-1 sm:mb-2 text-[10px] sm:text-xs">
                  {t("vocalchat.problem2Desc")}
                </p>
                <button className="bg-white text-black px-2 sm:px-3 py-1 rounded-lg font-medium hover:bg-gray-200 transition text-[10px] sm:text-xs">
                  {t("vocalchat.learnMore")}
                </button>
                <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-400/40 to-transparent rounded-b-xl" />
              </div>

              {/* Right Card */}
              <div className="relative bg-black p-2 sm:p-3 rounded-xl text-left">
                <h4 className="text-xs sm:text-sm font-semibold mb-1">
                  {t("vocalchat.problem3Title")}
                </h4>
                <p className="text-gray-400 text-[10px] sm:text-xs">
                  {t("vocalchat.problem3Desc")}
                </p>
                <div className="absolute bottom-1 right-1 text-gray-400 text-3xl sm:text-4xl select-none">
                  <Star strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default VocalChatStyleHero;
