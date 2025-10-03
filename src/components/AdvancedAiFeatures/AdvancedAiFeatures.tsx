"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Cpu,
  Cloud,
  BarChart3,
  ShieldCheck,
  Globe,
  Phone,
  Workflow,
} from "lucide-react";
import {
  SiSalesforce,
  SiHubspot,
  SiGooglecalendar,
  SiZapier,
  SiSlack,
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
    color: "#8b5cf6",
  },
  {
    title: "24/7 Availability",
    icon: <Cloud className="w-8 h-8" />,
    description:
      "Never miss a call or opportunity with our always-on AI agents",
    color: "#06b6d4",
  },
  {
    title: "Intelligent Call Distribution",
    icon: <Cpu className="w-8 h-8" />,
    description: "Smart routing based on caller needs and agent availability",
    color: "#a855f7",
  },
  {
    title: "Real-time Analytics",
    icon: <BarChart3 className="w-8 h-8" />,
    description:
      "Live performance monitoring with detailed conversation insights",
    color: "#0891b2",
  },
  {
    title: "Enterprise Security",
    icon: <ShieldCheck className="w-8 h-8" />,
    description: "GDPR compliant, SOC 2 certified with end-to-end encryption",
    color: "#7c3aed",
  },
  {
    title: "Multi-Language Support",
    icon: <Globe className="w-8 h-8" />,
    description:
      "Communicate globally in different languages with natural fluency",
    color: "#0284c7",
  },
];

const integrations = [
  { name: "Salesforce", icon: SiSalesforce, color: "#00A1E0", category: "CRM" },
  { name: "HubSpot", icon: SiHubspot, color: "#FF7A59", category: "Marketing" },
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
  { name: "Zapier", icon: SiZapier, color: "#FF4A00", category: "Automation" },
  { name: "Make", icon: Workflow, color: "#6366F1", category: "Automation" },
  { name: "Slack", icon: SiSlack, color: "#4A154B", category: "Communication" },
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

  const getCardDesign = (feature: any, index: number) => (
    <motion.article
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.0,
        y: -4,
        boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
      }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="border-primary-600/20 rounded border-2 -ml-[2px] -mt-[2px] w-full h-full bg-transparent hover:bg-primary-600/20 transition-colors duration-200"
    >
      <div className="relative p-6 md:p-8 h-full flex flex-col justify-between z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-primary-500">{feature.icon}</div>
          <h3 className="text-lg md:text-[16px] font-bold text-black">
            {t(feature.title)}
          </h3>
        </div>
        <p className="text-gray-600 text-sm md:text-[16px] leading-relaxed">
          {t(feature.description)}
        </p>
      </div>
    </motion.article>
  );

  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center py-4 px-4 bg-white"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
          {t("Advanced AI Features")}
        </h1>
        <p className="text-gray-700 text-sm md:text-base max-w-[830px] mx-auto">
          {t(
            "Experience next-generation AI communication with cutting-edge features and enterprise-grade reliability."
          )}
        </p>
      </div>

      {/* Core Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 max-w-[1100px] w-full mb-10 cursor-pointer">
        {coreFeatures.map((feature, index) => getCardDesign(feature, index))}
      </div>

      {/* Integrations Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
          {t("Seamless Integrations")}
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-[850px] mx-auto leading-relaxed">
          {t(
            "Seamlessly integrate our AI with your existing tools to streamline workflows and boost productivity."
          )}
        </p>
      </div>

      {/* Integrations Grid + Animated Bars */}
      <div className="flex flex-col md:flex-row md:justify-center items-center w-full max-w-[1200px] gap-26">
        {/* Integrations */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4 w-full md:w-1/2">
          {integrations.map((integration, i) => {
            const IconComponent = integration.icon;
            return (
              <div
                key={i}
                className="group relative bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center transition-all hover:shadow-lg"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded mb-2"
                  style={{ backgroundColor: `${integration.color}33` }}
                >
                  <IconComponent
                    className="w-6 h-6"
                    style={{ color: integration.color }}
                  />
                </div>
                <h4 className="text-xs md:text-sm font-semibold text-gray-600">
                  {t(integration.name)}
                </h4>
                <p className="text-[10px] md:text-xs text-gray-500">
                  {t(integration.category)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Animated Bars */}
        <div className="flex gap-2 mt-8 md:mt-0">
          {[...Array(12)].map((_, i) => {
            const heights = [36, 45, 37, 48, 40, 50, 50, 40, 47, 42, 38, 36];
            const colors = i < 6 ? "bg-green-400" : "bg-orange-400";
            return (
              <div
                key={i}
                className={`w-[12px] rounded-full ${colors}`}
                style={{
                  height: `${heights[i]}px`,
                  animation: `wave 1s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
