"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Check, X } from "lucide-react";

const ComparisonSection: React.FC = () => {
  const { t } = useTranslation();

  const comparisonFeatures = [
    "vocalchat.feature1",
    "vocalchat.feature2",
    "vocalchat.feature3",
    "vocalchat.feature4",
    "vocalchat.feature5"
  ];

  const traditionalLimitations = [
    "vocalchat.limitation1",
    "vocalchat.limitation2",
    "vocalchat.limitation3",
    "vocalchat.limitation4",
    "vocalchat.limitation5"
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">
            {t("vocalchat.vsTitle")}
          </h2>
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors mt-4">
            {t("vocalchat.bookCall")}
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pioneer Agency Column */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-black text-2xl font-bold mb-6 text-center">{t("vocalchat.pioneerAI")}</h3>
            <div className="space-y-4">
              {comparisonFeatures.map((featureKey, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-black">{t(featureKey)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Traditional Methods Column */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-black text-2xl font-bold mb-6 text-center">{t("vocalchat.traditional")}</h3>
            <div className="space-y-4">
              {traditionalLimitations.map((limitationKey, index) => (
                <div key={index} className="flex items-center gap-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <span className="text-gray-600">{t(limitationKey)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;