"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const FooterNew: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          {/* Company Name */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-black text-xl font-bold tracking-wider">PIONEER AGENCY</h3>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              Privacy Policy
            </Link>

            <motion.button
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
            </motion.button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-200 mb-6"></div>

        {/* Bottom Copyright */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Pioneer Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;