import React from "react";
import { Check, X, Phone } from "lucide-react";

export default function ComparisonSection() {
  const vocalchatFeatures = [
    "24/7, never off duty",
    "Instant replies, no hold time",
    "Low cost, no salaries or training",
    "Handles unlimited calls",
    "100% accurate, no mood swings",
  ];

  const traditionalLimitations = [
    "Limited to business hours",
    "Customers wait on hold",
    "High cost, salaries + overhead",
    "Limited by team size",
    "Varies by employee",
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-6xl font-bold leading-tight">
              <span className="text-gray-900">Vocalchat AI </span>
              <span className="text-purple-500">vs.</span>
              <br />
              <span className="text-gray-900">Traditional Hiring</span>
            </h1>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 border-2 border-black rounded-lg text-black font-medium hover:bg-gray-50 transition-all">
            Book a Call
            <Phone className="w-4 h-4" />
          </button>
        </div>

        {/* Comparison Container - Centered */}
        <div className="flex justify-center items-start gap-8">
          {/* Left Side - VocalChat AI with Purple Glow */}
          <div className="w-full max-w-md relative">
            {/* Purple glow background */}
            <div className="absolute -inset-6 bg-gradient-to-br from-purple-300 via-purple-200 to-blue-200 rounded-[3rem] blur-2xl opacity-40"></div>

            {/* Dark Card */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 shadow-2xl">
              {/* Icon Section */}
              <div className="bg-gray-800/50 backdrop-blur rounded-2xl p-5 mb-8 flex items-center justify-center">
                <div className="relative">
                  <svg
                    className="w-12 h-12 text-purple-500"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M24 8L24 40M8 24L40 24"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="18"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-5">
                {vocalchatFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-0.5">
                      <Check
                        className="w-6 h-6 text-green-400"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span className="text-white text-lg font-normal leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Traditional */}
          <div className="w-full max-w-md pt-2">
            {/* Traditional Badge - Centered */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center justify-center px-8 py-2.5 bg-white border-2 border-gray-200 rounded-full shadow-sm">
                <span className="text-gray-800 font-medium text-base">
                  Traditional
                </span>
              </div>
            </div>

            {/* Limitations */}
            <div className="space-y-5">
              {traditionalLimitations.map((limitation, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-0.5">
                    <X className="w-6 h-6 text-red-500" strokeWidth={2.5} />
                  </div>
                  <span className="text-gray-600 text-lg font-normal leading-relaxed">
                    {limitation}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
