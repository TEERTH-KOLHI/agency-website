"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CTASection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-black text-3xl md:text-4xl font-bold mb-8">
            {t("vocalchat.letsTalk")}
          </h2>

          <p className="text-black text-xl mb-8">
            {t("vocalchat.freeConsultation")}
          </p>

          <motion.button
            className="bg-black text-white px-12 py-4 rounded-lg text-xl font-medium hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("vocalchat.bookCall")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;