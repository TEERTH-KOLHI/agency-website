"use client";
import React from "react";
import MembersSection from "../MembersSection/MembersSection";
import Button from "../Button/button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface CourseCardProps {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  index?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  icon,
  titleKey,
  descriptionKey,
  index = 0,
}) => {
  const { t } = useTranslation();
  const cardRef = React.useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className="group relative min-h-[280px] flex flex-col"
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: -15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      whileHover={{
        y: -8,
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <style jsx>{`
        .group:hover .border-layer {
          clip-path: polygon(
            0% 0%,
            100% 0%,
            100% 100%,
            100% 100%,
            0% 100%
          ) !important;
        }
        .group:hover .content-layer {
          clip-path: polygon(
            0% 0%,
            100% 0%,
            100% 100%,
            100% 100%,
            0% 100%
          ) !important;
        }
      `}</style>

      <div
        className="border-layer absolute inset-0 bg-white/10 group-hover:bg-white/30 transition-all duration-500 rounded-2xl"
        style={{
          clipPath:
            "polygon(0% 0%, calc(100% - 30px) 0%, 100% 30px, 100% 100%, 0% 100%)",
          transition:
            "background-color 0.5s ease-in-out, clip-path 0.5s ease-in-out",
        }}
      />

      <div
        className="content-layer relative w-full h-full bg-transparent m-[1px] p-6 flex flex-col rounded-2xl"
        style={{
          clipPath:
            "polygon(0% 0%, calc(100% - 30px) 0%, 100% 30px, 100% 100%, 0% 100%)",
          transition: "clip-path 0.5s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-2xl" />
        <div className="relative z-10 flex flex-col h-full">
          <h1 className="text-3xl font-black mb-4 text-white uppercase tracking-wide leading-tight flex-shrink-0">
            {t(titleKey)}
          </h1>
          <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow">
            {t(descriptionKey)}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <div className="text-xl opacity-70">{icon}</div>
            <span className="text-sm ml-38">{t("exploreMore")}</span>
            <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
              →
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MarketingSkillsPage: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const courses = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      titleKey: "course1Title",
      descriptionKey: "course1Desc",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      titleKey: "course2Title",
      descriptionKey: "course2Desc",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      titleKey: "course3Title",
      descriptionKey: "course3Desc",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      ),
      titleKey: "course4Title",
      descriptionKey: "course4Desc",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
      titleKey: "course5Title",
      descriptionKey: "course5Desc",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      titleKey: "course6Title",
      descriptionKey: "course6Desc",
    },
  ];

  const memberAvatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/56.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
  ];

  return (
    <motion.div
      ref={sectionRef}
      className="min-h-screen bg-transparent text-white overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-5 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-black uppercase tracking-widest mb-2 text-white leading-[1.03]"
            dangerouslySetInnerHTML={{ __html: t("marketingSkillsTitle") }}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(255,255,255,0.5)"
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Course Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              icon={course.icon}
              titleKey={course.titleKey}
              descriptionKey={course.descriptionKey}
              index={index}
            />
          ))}
        </motion.div>

        {/* Reusable Button */}
        <motion.div
          className="text-center mt-20 flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button href="#" label={t("button")} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <MembersSection avatars={memberAvatars} memberCount={80} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MarketingSkillsPage;
