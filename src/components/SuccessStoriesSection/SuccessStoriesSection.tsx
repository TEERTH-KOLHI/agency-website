"use client";

import React from "react";
import MembersSection from "../MembersSection/MembersSection";
import Button from "../Button/button";
import { useTranslation } from "react-i18next";

interface Review {
  id: string;
  name: string;
  avatar: string;
  review: string;
  rating: number;
}

const SuccessStoriesSection: React.FC = () => {
  const { t } = useTranslation();

  const reviews: Review[] = t("reviews", { returnObjects: true }) as Review[];
  const memberAvatars = reviews.map((r) => r.avatar);

  return (
    <section className="min-h-screen text-white py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-pink-400 text-sm font-medium mb-8 border border-pink-400/40">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            {t("realReviews")}
          </div>

          <h1
            className="text-5xl md:text-8xl font-black mb-8 leading-[1]"
            dangerouslySetInnerHTML={{ __html: t("successStoriesTitle") }}
          />

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t("successStoriesSubtitle")}
          </p>
        </div>

        {/* Infinite Moving Review Cards */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {[...reviews, ...reviews].map((review, idx) => (
              <div
                key={idx}
                className="min-w-[300px] max-w-sm flex-shrink-0 rounded-2xl border border-white/10 bg-gray-900 p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Avatar + Name */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-pink-400"
                  />
                  <div>
                    <h3 className="text-white font-semibold text-sm">
                      {review.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 bg-yellow-400 rounded-sm"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-5">
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA + Members */}
        <div className="text-center mt-20 flex flex-col items-center gap-8">
          <Button href="#" label={t("heroButton")} />
          <MembersSection avatars={memberAvatars} memberCount={80} />
        </div>
      </div>

      {/* Animation Style */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SuccessStoriesSection;
