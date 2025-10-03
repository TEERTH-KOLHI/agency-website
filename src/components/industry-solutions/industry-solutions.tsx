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
    titleKey: "Real Estate",
    icon: <Building2 className="w-8 h-8" />,
    descriptionKey:
      "Transform your property business with intelligent automation",
  },
  {
    id: 2,
    titleKey: "Healthcare",
    icon: <Heart className="w-8 h-8" />,
    descriptionKey: "Enhance patient care with AI-powered communication",
  },
  {
    id: 3,
    titleKey: "E-commerce",
    icon: <ShoppingCart className="w-8 h-8" />,
    descriptionKey: "Boost sales with personalized shopping experiences",
  },
  {
    id: 4,
    titleKey: "Financial Services",
    icon: <CreditCard className="w-8 h-8" />,
    descriptionKey: "Streamline client interactions with secure AI assistance",
  },
  {
    id: 5,
    titleKey: "Professional Services",
    icon: <Briefcase className="w-8 h-8" />,
    descriptionKey: "Elevate client relationships with intelligent automation",
  },
  {
    id: 6,
    titleKey: "Non-Profit",
    icon: <Heart className="w-8 h-8" />,
    descriptionKey: "Maximize impact with AI-driven donor engagement",
  },
  {
    id: 7,
    titleKey: "Education",
    icon: <Building2 className="w-8 h-8" />,
    descriptionKey: "Revolutionize learning with AI-powered communication",
  },
  {
    id: 8,
    titleKey: "Travel & Hospitality",
    icon: <Briefcase className="w-8 h-8" />,
    descriptionKey: "Enhance guest experiences with intelligent automation",
  },
  {
    id: 9,
    titleKey: "Retail",
    icon: <ShoppingCart className="w-8 h-8" />,
    descriptionKey: "Drive customer loyalty with personalized AI interactions",
  },
  {
    id: 10,
    titleKey: "Legal Services",
    icon: <CreditCard className="w-8 h-8" />,
    descriptionKey: "Optimize client communication with secure AI solutions",
  },
];

const IndustrySolutions = () => {
  const { t } = useTranslation();
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);

  // Split into two rows
  const row1Data = industryData.slice(0, 5);
  const row2Data = industryData.slice(5, 10);

  // Duplicate for looping
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
              <h3 className="text-xl font-bold text-black">
                {t(industry.titleKey)}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t(industry.descriptionKey)}
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
            {/* Row 1 */}
            <div className="relative overflow-hidden">
              <div
                className={`flex animate-slide-left-to-right ${
                  isPausedRow1 ? "animate-paused" : ""
                }`}
                onMouseEnter={() => setIsPausedRow1(true)}
                onMouseLeave={() => setIsPausedRow1(false)}
                style={{ width: `${320 * extendedRow1.length}px` }}
              >
                {extendedRow1.map((industry, index) => (
                  <IndustryCard key={`row1-${index}`} industry={industry} />
                ))}
              </div>
            </div>

            {/* Row 2 */}
            <div className="relative overflow-hidden">
              <div
                className={`flex animate-slide-right-to-left ${
                  isPausedRow2 ? "animate-paused" : ""
                }`}
                onMouseEnter={() => setIsPausedRow2(true)}
                onMouseLeave={() => setIsPausedRow2(false)}
                style={{ width: `${320 * extendedRow2.length}px` }}
              >
                {extendedRow2.map((industry, index) => (
                  <IndustryCard key={`row2-${index}`} industry={industry} />
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
