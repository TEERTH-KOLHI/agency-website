"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Building2,
  Heart,
  ShoppingCart,
  CreditCard,
  Briefcase,
} from "lucide-react";

const industryData = [
  {
    id: 1,
    title: "Real Estate",
    icon: <Building2 className="w-8 h-8" />,
    description: "Transform your property business with intelligent automation",
  },
  {
    id: 2,
    title: "Healthcare",
    icon: <Heart className="w-8 h-8" />,
    description: "Enhance patient care with AI-powered communication",
  },
  {
    id: 3,
    title: "E-commerce",
    icon: <ShoppingCart className="w-8 h-8" />,
    description: "Boost sales with personalized shopping experiences",
  },
  {
    id: 4,
    title: "Financial Services",
    icon: <CreditCard className="w-8 h-8" />,
    description: "Streamline client interactions with secure AI assistance",
  },
  {
    id: 5,
    title: "Professional Services",
    icon: <Briefcase className="w-8 h-8" />,
    description: "Elevate client relationships with intelligent automation",
  },
  {
    id: 6,
    title: "Non-Profit",
    icon: <Heart className="w-8 h-8" />,
    description: "Maximize impact with AI-driven donor engagement",
  },
  {
    id: 7,
    title: "Education",
    icon: <Building2 className="w-8 h-8" />,
    description: "Revolutionize learning with AI-powered communication",
  },
  {
    id: 8,
    title: "Travel & Hospitality",
    icon: <Briefcase className="w-8 h-8" />,
    description: "Enhance guest experiences with intelligent automation",
  },
  {
    id: 9,
    title: "Retail",
    icon: <ShoppingCart className="w-8 h-8" />,
    description: "Drive customer loyalty with personalized AI interactions",
  },
  {
    id: 10,
    title: "Legal Services",
    icon: <CreditCard className="w-8 h-8" />,
    description: "Optimize client communication with secure AI solutions",
  },
];

const IndustrySolutions = () => {
  const { t } = useTranslation();
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);

  // Split data into two rows
  const row1Data = industryData.slice(0, 5);
  const row2Data = industryData.slice(5, 10);

  // Duplicate data for seamless looping
  const extendedRow1 = [...row1Data, ...row1Data, ...row1Data];
  const extendedRow2 = [...row2Data, ...row2Data, ...row2Data];

  const IndustryCard = ({
    industry,
  }: {
    industry: (typeof industryData)[0];
  }) => (
    <div className="flex-shrink-0 w-80 mx-2">
      <div className="border-primary-600/20 border-2 h-full rounded">
        <div className="w-full h-full bg-transparent hover:bg-primary-600/20 border-1 border-white">
          <div className="relative p-6 h-full flex flex-col justify-between z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-primary-500">{industry.icon}</div>
              <h3 className="text-xl font-bold text-black">{industry.title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {industry.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style jsx>{`
        @keyframes slideLeftToRight {
          0% {
            transform: translateX(-${320 * row1Data.length}px);
          }
          100% {
            transform: translateX(0px);
          }
        }

        @keyframes slideRightToLeft {
          0% {
            transform: translateX(0px);
          }
          100% {
            transform: translateX(-${320 * row2Data.length}px);
          }
        }

        .animate-slide-left-to-right {
          animation: slideLeftToRight 30s linear infinite;
        }

        .animate-slide-right-to-left {
          animation: slideRightToLeft 30s linear infinite;
        }

        .animate-paused {
          animation-play-state: paused;
        }
      `}</style>

      <section className="py-20 px-4 relative overflow-hidden bg-primary-950/20">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">
              {t("Industry Solutions")}
            </h1>
            <p className="text-gray-600 text-lg">
              {t("Transform your business with our AI-powered solutions.")}
            </p>
          </div>

          {/* Animated Slider Rows */}
          <div className="space-y-4">
            {/* Row 1 - Moving Left to Right */}
            <div className="relative overflow-hidden">
              <div
                className={`flex animate-slide-left-to-right ${
                  isPausedRow1 ? "animate-paused" : ""
                }`}
                onMouseEnter={() => setIsPausedRow1(true)}
                onMouseLeave={() => setIsPausedRow1(false)}
                style={{
                  width: `${320 * extendedRow1.length}px`,
                }}
              >
                {extendedRow1.map((industry, index) => (
                  <IndustryCard
                    key={`row1-${index}`}
                    industry={{
                      ...industry,
                      title: t(industry.title),
                      description: t(industry.description),
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Row 2 - Moving Right to Left */}
            <div className="relative overflow-hidden">
              <div
                className={`flex animate-slide-right-to-left ${
                  isPausedRow2 ? "animate-paused" : ""
                }`}
                onMouseEnter={() => setIsPausedRow2(true)}
                onMouseLeave={() => setIsPausedRow2(false)}
                style={{
                  width: `${320 * extendedRow2.length}px`,
                }}
              >
                {extendedRow2.map((industry, index) => (
                  <IndustryCard
                    key={`row2-${index}`}
                    industry={{
                      ...industry,
                      title: t(industry.title),
                      description: t(industry.description),
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustrySolutions;
