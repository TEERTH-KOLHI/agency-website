"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/libs/motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  Cpu,
  Cloud,
  BarChart3,
  ShieldCheck,
  Globe,
  Settings,
  CheckCircle2,
  Phone,
  Workflow,
} from "lucide-react";
import {
  SiSalesforce,
  SiHubspot,
  SiGooglecalendar,
  // SiMicrosoftoutlook,
  SiZapier,
  SiSlack,
  // SiMicrosoftteams,
  SiTwilio,
} from "react-icons/si";

import { BsMicrosoftTeams } from "react-icons/bs";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";

const coreFeatures = [
  {
    title: "Unlimited Concurrent Calls",
    icon: <Phone className="w-8 h-8" />,
    description:
      "Handle thousands of calls simultaneously without any capacity limitations",
    details: [
      "Infinite call capacity",
      "Zero wait times",
      "Global infrastructure",
      "Auto-scaling technology",
    ],
    stats: "∞ Calls",
    color: "#8b5cf6", // purple
  },
  {
    title: "24/7 Availability",
    icon: <Cloud className="w-8 h-8" />,
    description:
      "Never miss a call or opportunity with our always-on AI agents",
    details: [
      "Round-the-clock service",
      "99.9% uptime SLA",
      "Global time zones",
      "Instant activation",
    ],
    stats: "99.9% Uptime",
    color: "#06b6d4", // cyan
  },
  {
    title: "Intelligent Call Distribution",
    icon: <Cpu className="w-8 h-8" />,
    description: "Smart routing based on caller needs and agent availability",
    details: [
      "AI-powered routing",
      "Skill-based matching",
      "Priority queuing",
      "Load balancing",
    ],
    stats: "<1s Route Time",
    color: "#a855f7", // purple variant
  },
  {
    title: "Real-time Analytics",
    icon: <BarChart3 className="w-8 h-8" />,
    description:
      "Live performance monitoring with detailed conversation insights",
    details: [
      "Live dashboards",
      "Call recordings",
      "Performance metrics",
      "Predictive insights",
    ],
    stats: "Real-time Data",
    color: "#0891b2", // cyan variant
  },
  {
    title: "Enterprise Security",
    icon: <ShieldCheck className="w-8 h-8" />,
    description: "GDPR compliant, SOC 2 certified with end-to-end encryption",
    details: [
      "AES-256 encryption",
      "SOC 2 compliance",
      "GDPR certified",
      "Regular audits",
    ],
    stats: "Bank-level Security",
    color: "#7c3aed", // deeper purple
  },
  {
    title: "Multi-Language Support",
    icon: <Globe className="w-8 h-8" />,
    description:
      "Communicate globally in different languages with natural fluency",
    details: [
      "50+ languages",
      "Native accents",
      "Cultural adaptation",
      "Real-time translation",
    ],
    stats: "50+ Languages",
    color: "#0284c7", // deeper cyan
  },
];

const integrations = [
  {
    name: "Salesforce",
    icon: SiSalesforce,
    color: "#00A1E0",
    category: "CRM",
  },
  {
    name: "HubSpot",
    icon: SiHubspot,
    color: "#FF7A59",
    category: "Marketing",
  },
  {
    name: "Google Calendar",
    icon: SiGooglecalendar,
    color: "#4285F4",
    category: "Scheduling",
  },
  {
    name: "Outlook",
    icon: PiMicrosoftOutlookLogoFill,
    color: "#0078D4",
    category: "Email",
  },
  {
    name: "Zapier",
    icon: SiZapier,
    color: "#FF4A00",
    category: "Automation",
  },
  {
    name: "Make",
    icon: Workflow,
    color: "#6366F1",
    category: "Automation",
  },
  {
    name: "Slack",
    icon: SiSlack,
    color: "#4A154B",
    category: "Communication",
  },
  {
    name: "Teams",
    icon: BsMicrosoftTeams,
    color: "#6264A7",
    category: "Communication",
  },
  {
    name: "Twilio",
    icon: SiTwilio,
    color: "#F22F46",
    category: "Communications",
  },
];

export const AdvancedAiFeatures = () => {
  const { t } = useTranslation();

  const getCardDesign = (feature: any, index: number) => {
    return (
      <motion.article
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.02,
          y: -4,
          boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
        }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="border-primary-600/20 rounded border-2 -ml-[2px] -mt-[2px] w-full h-full bg-transparent hover:bg-primary-600/20 border-1 transition-colors duration-200"
      >
        <div className="relative p-8 h-full flex flex-col justify-between z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-primary-500">{feature.icon}</div>
            <h3 className="text-xl font-bold text-black">{t(feature.title)}</h3>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            {t(feature.description)}
          </p>
        </div>
      </motion.article>
    );
  };

  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center py-20 px-4 bg-white"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-black mb-4">
          {t("Advanced AI Features")}
        </h1>
        <p className="text-gray-700 text-1xl max-w-[830px]">
          {t(
            "Experience next-generation AI communication with cutting-edge features and enterprise-grade reliability."
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1400px] w-full mb-20">
        {coreFeatures.map((feature, index) => getCardDesign(feature, index))}
      </div>

      {/* Integration Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">
          {t("Seamless Integrations")}
        </h1>
        <p className="text-gray-600 mb-8 text-1xl leading-relaxed max-w-[800px]">
          {t(
            "Seamlessly integrate our AI with your existing tools to streamline workflows and boost productivity."
          )}
        </p>
      </div>
      <div className="flex items-center justify-between flex-col md:flex-row max-w-[1400px] w-full">
        <div className="space-y-8 w-full md:w-1/2">
          <div>
            <div className="grid grid-cols-3 gap-2">
              {integrations.map((integration, index) => {
                const IconComponent = integration.icon;
                return (
                  <div
                    key={integration.name}
                    className="group relative bg-gray-100 rounded-lg"
                  >
                    <div className="relative bg-gradient-to-br from-gray/[0.08] to-gray/[0.02] backdrop-blur-xl border border-white/[0.15] rounded p-6 text-center transition-all duration-500 hover:border-gray/30 hover:from-gray/[0.12] hover:to-white/[0.04] hover:shadow-2xl hover:shadow-primary-500/10  ">
                      {/* Background glow effect */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl "
                        style={{
                          background: `radial-gradient(circle at center, ${integration.color}40 0%, transparent 70%)`,
                        }}
                      ></div>

                      <div className="relative z-10 flex flex-col items-center gap-4">
                        {/* Icon container with professional styling */}
                        <div className="relative">
                          <div
                            className="w-12 h-12 rounded flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                            style={{
                              backgroundColor: `${integration.color}15`,
                              boxShadow: `0 4px 20px ${integration.color}25`,
                            }}
                          >
                            <IconComponent
                              className="w-6 h-6 transition-colors duration-300"
                              style={{ color: integration.color }}
                            />
                          </div>
                          {/* Animated ring on hover */}
                          <div
                            className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"
                            style={{
                              border: `2px solid ${integration.color}40`,
                            }}
                          ></div>
                        </div>

                        {/* Service name */}
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold text-gray-600 group-hover:text-gray-600/95 transition-colors">
                            {t(integration.name)}
                          </h4>
                          <p className="text-xs text-gray-600 group-hover:text-gray-600 transition-colors">
                            {t(integration.category)}
                          </p>
                        </div>
                      </div>

                      {/* Subtle border glow on hover */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${integration.color}10 0%, transparent 50%, ${integration.color}05 100%)`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <div className=" mr-[200px] flex items-center justify-center">
            {[...Array(12)].map((_, i) => {
              const heights = [36, 45, 37, 48, 40, 50, 50, 40, 47, 42, 38, 36];
              const colors = i < 6 ? "bg-green-400" : "bg-orange-400";
              return (
                <div
                  key={i}
                  className={`w-[20px] rounded-full ${colors} transition-all duration-300`}
                  style={{
                    height: `${heights[i]}px`,
                    animation: `wave 1s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
