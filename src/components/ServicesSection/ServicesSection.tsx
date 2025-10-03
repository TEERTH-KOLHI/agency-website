"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Phone,
  MessageSquare,
  Settings,
  PhoneCall,
  Bot,
  Workflow,
} from "lucide-react";

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: PhoneCall,
      titleKey: "vocalchat.service1Title",
      subtitleKey: "vocalchat.service1Subtitle",
      features: [
        "vocalchat.service1Feature1",
        "vocalchat.service1Feature2",
        "vocalchat.service1Feature3",
        "vocalchat.service1Feature4",
        "vocalchat.service1Feature5",
      ],
    },
    {
      icon: Bot,
      titleKey: "vocalchat.service2Title",
      subtitleKey: "vocalchat.service2Subtitle",
      features: [
        "vocalchat.service2Feature1",
        "vocalchat.service2Feature2",
        "vocalchat.service2Feature3",
        "vocalchat.service2Feature4",
        "vocalchat.service2Feature5",
      ],
    },
    {
      icon: Workflow,
      titleKey: "vocalchat.service3Title",
      subtitleKey: "vocalchat.service3Subtitle",
      features: [
        "vocalchat.service3Feature1",
        "vocalchat.service3Feature2",
        "vocalchat.service3Feature3",
        "vocalchat.service3Feature4",
        "vocalchat.service3Feature5",
      ],
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-black text-3xl md:text-3xl font-bold mb-4">
            {t("vocalchat.customSolutions")}
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <service.icon className="w-16 h-16 text-black mb-6" />

              <h3 className="text-black text-[16px] font-bold mb-2">
                {t(service.titleKey)}
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {t(service.subtitleKey)}
              </p>

              <button className="w-full mb-6 px-6 py-2 rounded-lg border border-black bg-black text-white text-sm font-medium hover:bg-transparent hover:text-black transition-all duration-300 cursor-pointer">
                {t("vocalchat.bookCall").toUpperCase()}
              </button>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-black text-sm">{t(feature)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
