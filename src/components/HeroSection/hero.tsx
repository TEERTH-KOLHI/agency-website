"use client";

import {
  Check,
  FileText,
  ClipboardList,
  Megaphone,
  Users,
  Rocket,
  Shield,
} from "lucide-react";
import React from "react";
import Button from "../Button/button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface Feature {
  icon: React.ElementType;
  textKey: string; // key for i18n
}

const features: Feature[] = [
  { icon: FileText, textKey: "feature1" },
  { icon: ClipboardList, textKey: "feature2" },
  { icon: Megaphone, textKey: "feature3" },
  { icon: Users, textKey: "feature4" },
  { icon: Rocket, textKey: "feature5" },
  { icon: Shield, textKey: "feature6" },
];

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      className="mt-15 relative flex flex-col items-center justify-center min-h-screen px-4 text-center pt-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        variants={floatingVariants}
        animate="animate"
      >
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-500 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-yellow-500 rounded-full opacity-50"></div>
      </motion.div>

      {/* Heading */}
      <motion.p
        className="text-yellow-400 text-sm mb-2"
        variants={itemVariants}
      >
        {t("students")}
      </motion.p>
      <motion.h1
        className="text-white font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight uppercase text-center max-w-5xl"
        variants={titleVariants}
        style={{
          lineHeight: '1.1',
          wordBreak: 'break-word',
          hyphens: 'auto'
        }}
      >
        {t("heroTitle")}
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-gray-300 mt-6 max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed text-center"
        variants={itemVariants}
        style={{
          lineHeight: '1.6'
        }}
      >
        {t("heroSubtitle")}
      </motion.p>

      {/* Features / Cards */}
      <motion.ul
        className="mx-auto grid max-w-4xl grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-6 mt-8"
        variants={itemVariants}
      >
        {features.map((item, i) => (
          <motion.li
            key={i}
            className="cursor-pointer rounded-lg bg-white p-4 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8 + (i * 0.1),
              duration: 0.6,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
            whileHover={{
              y: -8,
              scale: 1.05,
              transition: { duration: 0.2 },
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Icon: always black */}
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <item.icon className="mx-auto w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-black" />
            </motion.div>

            {/* Text: always black */}
            <p
              className="mt-2 text-xs leading-tight font-medium text-black md:text-sm"
              style={{
                lineHeight: '1.3',
                minHeight: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                wordBreak: 'break-word',
                hyphens: 'auto'
              }}
            >
              {t(item.textKey)}
            </p>
          </motion.li>
        ))}
      </motion.ul>

      {/* Reusable Button */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button href="#" label={t("button")} />
      </motion.div>

      {/* down checks */}
      <motion.div
        className="bg-transparent py-4 px-6"
        variants={itemVariants}
      >
        <div className="flex items-center justify-center space-x-8 max-w-4xl mx-auto">
          {["consistency", "quality", "reliability", "transparency"].map(
            (key, i) => (
              <motion.div
                key={i}
                className="flex items-center space-x-2 text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 1.2 + (i * 0.1),
                  duration: 0.5
                }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360, 0]
                  }}
                  transition={{
                    delay: 1.5 + (i * 0.2),
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                >
                  <Check className="w-5 h-5 text-purple-400" />
                </motion.div>
                <span className="text-lg font-medium">{t(key)}</span>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
