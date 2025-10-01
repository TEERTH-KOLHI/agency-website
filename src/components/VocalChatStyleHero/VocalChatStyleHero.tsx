"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import VocalChatAgentCarousel from "./VocalChatAgentCarousel";
import AgentPreview from "./AgentPreview";
import AnimatedDownArrow from "./AnimatedDownArrow";

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
      className="bg-white min-h-screen flex flex-col items-center justify-center px-6 pt-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Layout */}
      <motion.div
        className="max-w-7xl w-full flex flex-col items-center mb-25 pt-36"
        variants={itemVariants}
      >
        <div className="grid md:grid-cols-2 items-center gap-5 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center">
            <h1 className="text-black font-bold text-5xl sm:text-6xl lg:text-[42px] leading-tight mb-6">
              {t("vocalchat.heroTitle")}
            </h1>
            <p className="text-gray-600 md:text-lg mb-8">
              {t("vocalchat.heroSubtitle")}
            </p>
            <div className="flex gap-3">
              <button className="cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-[4px] text-sm font-medium shadow-lg hover:bg-indigo-700 transition">
                {t("vocalchat.learnMore")}
              </button>
              <button className="cursor-pointer border border-gray-300 text-black px-4 py-2 rounded-[4px] text-sm font-medium hover:bg-black hover:text-white transition">
                {t("vocalchat.bookCall")}
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent rounded-2xl -z-10"></div>
            <VocalChatAgentCarousel />
          </div>
        </div>
      </motion.div>

      {/* Agent Preview Section */}
      <AgentPreview />

      {/* AnimatedDownArrow here */}
      <AnimatedDownArrow />

      {/* Problem Statement Section */}
      <motion.div
        className="max-w-6xl w-full bg-black rounded-3xl p-10 text-white mt-10"
        variants={itemVariants}
      >
        {/* Header */}
        <div className="flex justify-center mb-12">
          <span className="bg-gray-900 text-white text-sm px-6 py-2 rounded-full">
            {t("vocalchat.stopLosing")}
          </span>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Card */}
          <div className="relative bg-black p-6 rounded-2xl text-left">
            <h4 className="text-xl font-semibold mb-3">
              {t("vocalchat.problem1Title")}
            </h4>
            <p className="text-gray-400">{t("vocalchat.problem1Desc")}</p>
            {/* Background pattern */}
            <div className="absolute bottom-6 left-6 text-gray-700/40 text-9xl font-bold select-none">
              ?
            </div>
          </div>

          {/* Center Highlighted Card */}
          <div className="relative bg-gradient-to-b from-indigo-900 to-purple-900 p-8 rounded-2xl text-left shadow-lg">
            <h4 className="text-2xl font-bold mb-3">
              {t("vocalchat.problem2Title")}
            </h4>
            <p className="text-gray-200 mb-6">{t("vocalchat.problem2Desc")}</p>
            <button className="bg-white text-black px-6 py-2 rounded-xl font-medium hover:bg-gray-200 transition">
              {t("vocalchat.learnMore")}
            </button>
            {/* Gradient dot overlay */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-400/40 to-transparent rounded-b-2xl" />
          </div>

          {/* Right Card */}
          <div className="relative bg-black p-6 rounded-2xl text-left">
            <h4 className="text-xl font-semibold mb-3">
              {t("vocalchat.problem3Title")}
            </h4>
            <p className="text-gray-400">{t("vocalchat.problem3Desc")}</p>
            {/* Background pattern */}
            <div className="absolute bottom-6 right-6 text-gray-700/40 text-9xl font-bold select-none">
              ✦
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default VocalChatStyleHero;
