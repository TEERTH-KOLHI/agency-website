"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AgentPreview: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 max-w-6xl w-full mb-1 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
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
        <h3 className="text-white text-3xl font-bold mb-2">
          {t("vocalchat.agentName")}
        </h3>
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
                <p className="text-green-600 font-semibold text-sm">
                  {t("vocalchat.incomingLead")}
                </p>
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
            <h4 className="text-black font-bold text-lg">
              {t("vocalchat.businessOwner")}
            </h4>
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
                <p className="text-blue-600 font-semibold text-sm">
                  {t("vocalchat.answeredBy")}
                </p>
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
            <h4 className="text-blue-900 font-bold text-lg">
              {t("vocalchat.aiAlex")}
            </h4>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-blue-800 text-sm font-medium">
                "Hello! I'd be happy to help with automation solutions. Let me
                ask you a few questions to understand your needs better..."
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
  );
};

export default AgentPreview;
