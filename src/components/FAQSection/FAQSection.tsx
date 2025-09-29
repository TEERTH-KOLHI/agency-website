"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import MembersSection from "../MembersSection/MembersSection";
import Button from "../Button/button";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  const memberAvatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/56.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
  ];

  const faqItems: FAQItem[] = [
    { id: 1, question: t("faq.question1"), answer: t("faq.answer1") },
    { id: 2, question: t("faq.question2"), answer: t("faq.answer2") },
    { id: 3, question: t("faq.question3"), answer: t("faq.answer3") },
    { id: 4, question: t("faq.question4"), answer: t("faq.answer4") },
    { id: 5, question: t("faq.question5"), answer: t("faq.answer5") },
    { id: 6, question: t("faq.question6"), answer: t("faq.answer6") },
  ];

  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center p-6">
            <div className="flex items-center gap-2 rounded-full px-4 py-2 border border-pink-400/30">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <span className="text-sm text-white font-medium">
                {t("faq.header")}
              </span>
            </div>
          </div>
          <h1
            className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-wider leading-[1.03]"
            dangerouslySetInnerHTML={{ __html: t("faq.title") }}
          />
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-black/20 backdrop-blur-sm rounded-lg border border-purple-500/30 overflow-hidden transition-all duration-300 hover:border-purple-400/50"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between text-white hover:bg-white/5 transition-colors duration-200 cursor-pointer"
              >
                <span className="text-2xl font-medium pr-4">
                  <h1>{item.question}</h1>
                </span>
                <div className="flex-shrink-0">
                  {openItems[item.id] ? (
                    <ChevronUp className="w-6 h-6 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-purple-400" />
                  )}
                </div>
              </button>

              {/* Smooth transition container */}
              <div
                className={`px-8 overflow-hidden transition-all duration-500 ${
                  openItems[item.id]
                    ? "max-h-96 pt-2 pb-6"
                    : "max-h-0 pt-0 pb-0"
                }`}
              >
                <div className="text-gray-300 text-2xl leading-relaxed">
                  <h1>{item.answer}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-white mt-20 flex flex-col items-center gap-8">
        <Button href="#" label={t("faq.button")} />
        <MembersSection avatars={memberAvatars} memberCount={80} />
      </div>
    </div>
  );
};

export default FAQSection;
