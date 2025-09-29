"use client";
import React from "react";
import { FaChalkboard, FaBookOpen, FaUsers } from "react-icons/fa";
import MembersSection from "../MembersSection/MembersSection";
import Button from "../Button/button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const HowToPlay = () => {
  const { t } = useTranslation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const memberAvatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/56.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const rightItemVariants = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      className="relative py-10 px-6 text-white bg-transparent"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl">
        {/* LEFT SIDE */}
        <motion.div
          className="p-4 max-w-md mx-auto md:mx-0"
          variants={itemVariants}
        >
          {/* Title */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight text-center max-w-md"
            variants={itemVariants}
            style={{
              lineHeight: '1.1',
              wordBreak: 'break-word',
              hyphens: 'auto'
            }}
          >
            {t("howToPlayTitle")}
          </motion.h1>

          {/* Reusable components (members) */}
          <motion.div
            className="mt-6 flex flex-col items-center md:items-start gap-8"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button href="#" label={t("button")} />
            </motion.div>
            <MembersSection avatars={memberAvatars} memberCount={80} />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex flex-col gap-12 p-6 max-w-3xl mx-auto md:mx-0 relative md:right-[50px]"
          variants={rightItemVariants}
        >
          {/* Classroom */}
          <motion.div
            className="flex items-start gap-4"
            variants={rightItemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-[#1f0a30] p-4 rounded-xl text-pink-400"
              whileHover={{
                rotate: [0, -5, 5, 0],
                scale: 1.1,
                boxShadow: "0 0 25px rgba(236, 72, 153, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <FaChalkboard size={45} />
            </motion.div>
            <div className="flex flex-col gap-4 flex-1">
              <motion.h3
                className="text-xl md:text-2xl lg:text-3xl font-bold uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{
                  lineHeight: '1.2',
                  wordBreak: 'break-word'
                }}
              >
                {t("classroomTitle")}
              </motion.h3>
              <motion.p
                className="text-gray-400 text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                style={{
                  lineHeight: '1.5'
                }}
              >
                {t("classroomText")}
              </motion.p>
            </div>
          </motion.div>

          {/* Coaching */}
          <motion.div
            className="flex items-start gap-4"
            variants={rightItemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-[#1f0a30] p-4 rounded-xl text-cyan-400"
              whileHover={{
                rotate: [0, -5, 5, 0],
                scale: 1.1,
                boxShadow: "0 0 25px rgba(34, 211, 238, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <FaBookOpen size={45} />
            </motion.div>
            <div className="flex flex-col gap-4 flex-1">
              <motion.h3
                className="text-xl md:text-2xl lg:text-3xl font-bold uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{
                  lineHeight: '1.2',
                  wordBreak: 'break-word'
                }}
              >
                {t("coachingTitle")}
              </motion.h3>
              <motion.p
                className="text-gray-400 text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                style={{
                  lineHeight: '1.5'
                }}
              >
                {t("coachingText")}
              </motion.p>
            </div>
          </motion.div>

          {/* Community */}
          <motion.div
            className="flex items-start gap-4"
            variants={rightItemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-[#1f0a30] p-4 rounded-xl text-purple-400"
              whileHover={{
                rotate: [0, -5, 5, 0],
                scale: 1.1,
                boxShadow: "0 0 25px rgba(168, 85, 247, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <FaUsers size={45} />
            </motion.div>
            <div className="flex flex-col gap-4 flex-1">
              <motion.h3
                className="text-xl md:text-2xl lg:text-3xl font-bold uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                style={{
                  lineHeight: '1.2',
                  wordBreak: 'break-word'
                }}
              >
                {t("communityTitle")}
              </motion.h3>
              <motion.p
                className="text-gray-400 text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                style={{
                  lineHeight: '1.5'
                }}
              >
                {t("communityText")}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowToPlay;
