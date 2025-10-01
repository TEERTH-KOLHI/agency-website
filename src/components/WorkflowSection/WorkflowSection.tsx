"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Clock,
  Calendar,
  DollarSign,
  TrendingUp,
  Headphones,
  Users,
  Award,
  BarChart3,
  ArrowUpRight,
  PiggyBank,
  Layers,
  Settings,
} from "lucide-react";

const WorkflowSection: React.FC = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Clock,
      titleKey: "vocalchat.benefit1",
      descKey: "vocalchat.benefit1Desc",
    },
    {
      icon: Calendar,
      titleKey: "vocalchat.benefit2",
      descKey: "vocalchat.benefit2Desc",
    },
    {
      icon: DollarSign,
      titleKey: "vocalchat.benefit3",
      descKey: "vocalchat.benefit3Desc",
    },
    {
      icon: TrendingUp,
      titleKey: "vocalchat.benefit4",
      descKey: "vocalchat.benefit4Desc",
    },
    {
      icon: Headphones,
      titleKey: "vocalchat.benefit5",
      descKey: "vocalchat.benefit5Desc",
    },
    {
      icon: Users,
      titleKey: "vocalchat.benefit6",
      descKey: "vocalchat.benefit6Desc",
    },
    {
      icon: Award,
      titleKey: "vocalchat.benefit7",
      descKey: "vocalchat.benefit7Desc",
    },
    {
      icon: BarChart3,
      titleKey: "vocalchat.benefit8",
      descKey: "vocalchat.benefit8Desc",
    },
    {
      icon: ArrowUpRight,
      titleKey: "vocalchat.benefit9",
      descKey: "vocalchat.benefit9Desc",
    },
    {
      icon: PiggyBank,
      titleKey: "vocalchat.benefit10",
      descKey: "vocalchat.benefit10Desc",
    },
    {
      icon: Layers,
      titleKey: "vocalchat.benefit11",
      descKey: "vocalchat.benefit11Desc",
    },
    {
      icon: Settings,
      titleKey: "vocalchat.benefit12",
      descKey: "vocalchat.benefit12Desc",
    },
  ];

  const workflowSteps = [
    {
      titleKey: "vocalchat.step1Title",
      descKey: "vocalchat.step1Desc",
      number: "01",
      image: "/images/workflow/1.jpeg",
    },
    {
      titleKey: "vocalchat.step2Title",
      descKey: "vocalchat.step2Desc",
      number: "02",
      image: "/images/workflow/2.jpeg",
    },
    {
      titleKey: "vocalchat.step3Title",
      descKey: "vocalchat.step3Desc",
      number: "03",
      image: "/images/workflow/3.jpeg",
    },
    {
      titleKey: "vocalchat.step4Title",
      descKey: "vocalchat.step4Desc",
      number: "04",
      image: "/images/workflow/4.jpeg",
    },
  ];

  return (
    <div className="bg-white py-16">
      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <motion.h2
          className="text-black text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("vocalchat.perfectWorkflow")}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl border border-gray-200 bg-white/30 shadow-md backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <benefit.icon className="w-12 h-12 text-black mx-auto mb-4" />
              <h3 className="text-black text-lg font-bold mb-2">
                {t(benefit.titleKey)}
              </h3>
              <p className="text-gray-700">{t(benefit.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workflow Process */}
      <section className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-black text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("vocalchat.fullyAutomated")}
        </motion.h2>

        <div className="space-y-12">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`flex-1 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="bg-gray-50 rounded-2xl p-8">
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
                <div className="rounded-2xl p-8 bg-transparent">
                  <div className="w-full h-48 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={step.image}
                      alt={t(step.titleKey)}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkflowSection;
