"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSectionNew: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { questionKey: "vocalchat.faq1", answerKey: "vocalchat.faq1Answer" },
    { questionKey: "vocalchat.faq2", answerKey: "vocalchat.faq2Answer" },
    { questionKey: "vocalchat.faq3", answerKey: "vocalchat.faq3Answer" },
    { questionKey: "vocalchat.faq4", answerKey: "vocalchat.faq4Answer" },
    { questionKey: "vocalchat.faq5", answerKey: "vocalchat.faq5Answer" },
    { questionKey: "vocalchat.faq6", answerKey: "vocalchat.faq6Answer" },
    { questionKey: "vocalchat.faq7", answerKey: "vocalchat.faq7Answer" },
    { questionKey: "vocalchat.faq8", answerKey: "vocalchat.faq8Answer" },
    { questionKey: "vocalchat.faq9", answerKey: "vocalchat.faq9Answer" },
    { questionKey: "vocalchat.faq10", answerKey: "vocalchat.faq10Answer" },
    { questionKey: "vocalchat.faq11", answerKey: "vocalchat.faq11Answer" },
    { questionKey: "vocalchat.faq12", answerKey: "vocalchat.faq12Answer" }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">
            {t("vocalchat.questionsTitle")}
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-black font-medium text-lg">{t(faq.questionKey)}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">{t(faq.answerKey)}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSectionNew;