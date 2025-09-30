"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const VocalChatStyleHero: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.section
      className="bg-white min-h-screen flex flex-col items-center justify-center px-4 text-center pt-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Company Name */}
      <motion.div className="mb-8" variants={itemVariants}>
        <h1 className="text-black text-2xl font-bold tracking-wider">{t("vocalchat.companyName")}</h1>
      </motion.div>

      {/* Book a Call Button - Top */}
      <motion.div className="mb-8" variants={itemVariants}>
        <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          {t("vocalchat.bookCall")}
        </button>
      </motion.div>

      {/* Main Headline */}
      <motion.h2
        className="text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight max-w-6xl mb-6"
        variants={itemVariants}
      >
        {t("vocalchat.heroTitle")}
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="text-black text-lg md:text-xl max-w-4xl mb-8 leading-relaxed"
        variants={itemVariants}
      >
        {t("vocalchat.heroSubtitle")}
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mb-16"
        variants={itemVariants}
      >
        <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors text-lg">
          {t("vocalchat.learnMore")}
        </button>
        <button className="border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors text-lg">
          {t("vocalchat.bookCall")}
        </button>
      </motion.div>

      {/* Agent Preview Section - Modern Interface */}
      <motion.div
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 max-w-6xl w-full mb-16 overflow-hidden"
        variants={itemVariants}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
          <div className="absolute top-4 left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 right-4 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
        </div>

        {/* Header */}
        <div className="relative z-10 text-center mb-8">
          <motion.div
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">Live AI Demo</span>
          </motion.div>
          <h3 className="text-white text-3xl font-bold mb-2">{t("vocalchat.agentName")}</h3>
          <p className="text-gray-300 text-lg">{t("vocalchat.agentQuestion")}</p>
        </div>

        {/* Main Interface */}
        <div className="relative z-10 grid lg:grid-cols-3 gap-6">
          {/* Incoming Call */}
          <motion.div
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <div>
                  <p className="text-green-600 font-semibold text-sm">{t("vocalchat.incomingLead")}</p>
                  <p className="text-gray-500 text-xs">09:34 AM</p>
                </div>
              </div>
              <motion.div
                className="text-green-500 text-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📞
              </motion.div>
            </div>
            <div className="space-y-3">
              <h4 className="text-black font-bold text-lg">{t("vocalchat.businessOwner")}</h4>
              <p className="text-gray-600 text-sm bg-gray-50 p-3 rounded-lg italic">
                "Hi, I need help with automation solutions for my business..."
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Connected • Waiting for response
              </div>
            </div>
          </motion.div>

          {/* Processing Arrow */}
          <div className="hidden lg:flex items-center justify-center">
            <motion.div
              className="flex flex-col items-center gap-4"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🤖</span>
              </div>
              <div className="text-white text-sm font-medium bg-white/10 px-4 py-2 rounded-full">
                AI Processing
              </div>
              <motion.div
                className="text-4xl text-blue-400"
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ➜
              </motion.div>
            </motion.div>
          </div>

          {/* AI Response */}
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-xl border border-blue-100"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AI</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <p className="text-blue-600 font-semibold text-sm">{t("vocalchat.answeredBy")}</p>
                  <p className="text-gray-500 text-xs">Instantly</p>
                </div>
              </div>
              <motion.div
                className="text-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ⚡
              </motion.div>
            </div>
            <div className="space-y-3">
              <h4 className="text-blue-900 font-bold text-lg">{t("vocalchat.aiAlex")}</h4>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-blue-800 text-sm font-medium">
                  "Hello! I'd be happy to help with automation solutions. Let me ask you a few questions to understand your needs better..."
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-blue-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                Active • AI handling conversation
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="relative z-10 mt-8 grid grid-cols-3 gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="text-center">
            <div className="text-white text-2xl font-bold">0.3s</div>
            <div className="text-gray-400 text-sm">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-white text-2xl font-bold">24/7</div>
            <div className="text-gray-400 text-sm">Availability</div>
          </div>
          <div className="text-center">
            <div className="text-white text-2xl font-bold">100%</div>
            <div className="text-gray-400 text-sm">Success Rate</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Problem Statement Section */}
      <motion.div className="max-w-6xl w-full" variants={itemVariants}>
        <h3 className="text-black text-3xl font-bold mb-12">{t("vocalchat.stopLosing")}</h3>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <h4 className="text-black text-xl font-bold mb-4">{t("vocalchat.problem1Title")}</h4>
            <p className="text-gray-700">{t("vocalchat.problem1Desc")}</p>
          </div>

          <div className="text-center">
            <h4 className="text-black text-xl font-bold mb-4">{t("vocalchat.problem2Title")}</h4>
            <p className="text-gray-700">{t("vocalchat.problem2Desc")}</p>
          </div>

          <div className="text-center">
            <h4 className="text-black text-xl font-bold mb-4">{t("vocalchat.problem3Title")}</h4>
            <p className="text-gray-700">{t("vocalchat.problem3Desc")}</p>
          </div>
        </div>

        <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors text-lg">
          {t("vocalchat.learnMore")}
        </button>
      </motion.div>
    </motion.section>
  );
};

export default VocalChatStyleHero;