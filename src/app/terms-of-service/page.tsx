"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function TermsOfService() {
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
          Terms of Service
        </motion.h1>

        <motion.div className="space-y-8" variants={itemVariants}>
          <div className="prose prose-lg prose-invert max-w-none">
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using Pioneer Automation Agency's services, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all users of our automation services, including Voice AI agents, CRM integrations, and custom automation solutions.
              </p>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">2. Services Description</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Pioneer Automation Agency provides:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Voice AI agent development and implementation</li>
                <li>CRM automation and integration services</li>
                <li>Social media automation solutions</li>
                <li>Custom business process automation</li>
                <li>GoHighLevel expert snapshots and implementations</li>
                <li>Ongoing support and optimization services</li>
              </ul>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">3. User Obligations</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not interfere with the proper functioning of our systems</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Pay all fees associated with your service plan</li>
              </ul>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">4. Payment Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Payment terms include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>All fees are due according to the agreed payment schedule</li>
                <li>Late payments may result in service suspension</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Prices are subject to change with 30 days notice</li>
              </ul>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                All content, software, and materials provided by Pioneer Automation Agency remain our intellectual property. You are granted a limited license to use our services for your business purposes only. Custom automation solutions developed specifically for your business will be owned by you upon full payment.
              </p>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                Pioneer Automation Agency shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability is limited to the amount paid for services in the preceding 12 months.
              </p>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">7. Service Availability</h2>
              <p className="text-gray-300 leading-relaxed">
                While we strive for 99.9% uptime, we do not guarantee uninterrupted service availability. Scheduled maintenance will be communicated in advance. We are not responsible for downtime caused by third-party services or force majeure events.
              </p>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">8. Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                Either party may terminate the service agreement with 30 days written notice. We reserve the right to terminate services immediately for violation of these terms or non-payment. Upon termination, you will retain access to custom solutions developed for your business.
              </p>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update these terms from time to time. We will notify users of material changes via email or website notice. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">10. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                For questions about these terms, contact us at:
                <br />
                <span className="text-purple-400">legal@pioneerautomation.com</span>
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