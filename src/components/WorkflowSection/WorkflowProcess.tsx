"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface WorkflowStep {
  titleKey: string;
  descKey: string;
  number: string;
  image: string;
}

interface WorkflowProcessProps {
  steps: WorkflowStep[];
}

const WorkflowProcess: React.FC<WorkflowProcessProps> = ({ steps }) => {
  const { t } = useTranslation();

  return (
    <section className="max-w-5xl mx-auto px-4">
      <motion.h1
        className="text-black text-3xl md:text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("vocalchat.fullyAutomated")}
      </motion.h1>

      <div className="space-y-0">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-2"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className={`flex-1 ${index % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="bg-gray-50 rounded-2xl p-8 cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-bold text-black bg-white rounded-full w-12 h-12 flex items-center justify-center">
                    {step.number}
                  </span>
                  <h3 className="text-black text-2xl font-bold">
                    {t(step.titleKey)}
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>
            </div>

            <div className={`flex-1 ${index % 2 === 1 ? "md:order-1" : ""}`}>
              <motion.div
                className="rounded-2xl p-4 bg-transparent"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-45 rounded-lg flex items-center justify-center overflow-hidden">
                  <motion.img
                    src={step.image}
                    alt={t(step.titleKey)}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkflowProcess;
