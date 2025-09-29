"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-black text-white py-24 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500"
          variants={itemVariants}
        >
          Privacy Policy
        </motion.h1>

        <motion.div className="space-y-8" variants={itemVariants}>
          <div className="prose prose-lg prose-invert max-w-none">
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Pioneer Automation Agency collects information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Fill out contact forms on our website</li>
                <li>Request information about our services</li>
                <li>Subscribe to our newsletter</li>
                <li>Communicate with us via email or phone</li>
              </ul>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide and improve our automation services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">3. Information Sharing</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and the rights of others</li>
                <li>With trusted service providers who assist in our operations</li>
              </ul>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">4. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">5. Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">6. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <span className="text-purple-400">contact@pioneerautomation.com</span>
              </p>
            </motion.section>

            <motion.div variants={itemVariants} className="text-center mt-12">
              <p className="text-gray-500">Last updated: January 2025</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}