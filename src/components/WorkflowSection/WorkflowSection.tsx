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
import WorkflowProcess from "./WorkflowProcess";
import { AdvancedAiFeatures } from "../AdvancedAiFeatures/AdvancedAiFeatures";

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
      image: "/images/workflow/1.png",
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
      image: "/images/workflow/4.png",
    },
  ];

  return (
    <div className="bg-white py-16">
      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <motion.h1
          className="text-black text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("vocalchat.perfectWorkflow")}
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl border border-gray-200 bg-white/30 shadow-md backdrop-blur-sm cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
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

      <AdvancedAiFeatures />

      {/* Workflow Process Section */}
      <WorkflowProcess steps={workflowSteps} />
    </div>
  );
};

export default WorkflowSection;
