"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  rating: number;
  review: string;
  initials: string;
  bgColor?: string;
  image?: string;
}

const Review = () => {
  const { t, i18n } = useTranslation();

  // Get testimonials from i18n JSON
  const testimonials = t("testimonials.list", {
    returnObjects: true,
  }) as Testimonial[];

  // Date formatting options
  const dateOptions = t("testimonials.dateOptions", {
    returnObjects: true,
  }) as Intl.DateTimeFormatOptions;

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const currentTestimonialData = testimonials[currentTestimonial];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3); // first 3 only
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gray-100">
      <div className="container mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-4xl font-bold text-black mb-4">
            {t("testimonials.header")}
          </h1>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Left - User Cards */}
          <div className="w-full lg:w-1/3 space-y-3 lg:space-y-4 order-2 lg:order-1">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`flex items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded cursor-pointer transition-all duration-300 ${
                  currentTestimonial === index
                    ? "bg-primary-500/20 border border-primary-400/50"
                    : "bg-primary-900/30 border border-primary-900/30 hover:bg-primary-900/40"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                {/* Profile Image */}
                <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-gray-600">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgColor} flex items-center justify-center`}
                  >
                    <span className="text-gray-600 text-xs lg:text-sm font-bold">
                      {testimonial.initials}
                    </span>
                  </div>

                  {testimonial.image ? (
                    <Image
                      width={48}
                      height={48}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : null}
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <h4 className="text-black font-semibold text-sm mb-1">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(testimonial.rating)
                            ? "text-primary-400 fill-current"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">
                    {new Date().toLocaleDateString(i18n.language, dateOptions)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Active Testimonial */}
          <div className="flex-1 order-1 lg:order-2">
            <div
              key={currentTestimonial}
              className="relative bg-gray-100 text-gray-600 rounded p-6 lg:p-8 shadow-2xl"
            >
              <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-12 h-12 lg:w-16 lg:h-16 bg-primary-500 rounded-full opacity-80" />

              <div className="relative z-10">
                <div className="text-4xl lg:text-6xl text-gray-600 leading-none mb-4 lg:mb-6 font-serif">
                  &ldquo;
                </div>

                <p className="text-black text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 font-medium">
                  {currentTestimonialData.review.split(".")[0]}.{" "}
                  {currentTestimonialData.review.split(".")[1]?.trim() &&
                    `${currentTestimonialData.review
                      .split(".")[1]
                      .trim()
                      .split(" ")
                      .slice(0, 8)
                      .join(" ")}...`}
                </p>

                {/* User Footer */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${currentTestimonialData.bgColor} flex items-center justify-center`}
                      >
                        <span className="text-gray-600 text-sm font-bold">
                          {currentTestimonialData.initials}
                        </span>
                      </div>

                      {currentTestimonialData.image ? (
                        <Image
                          width={48}
                          height={48}
                          src={currentTestimonialData.image}
                          alt={currentTestimonialData.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : null}
                    </div>

                    <div>
                      <h4 className="text-black font-bold text-base">
                        {currentTestimonialData.name}
                      </h4>
                      <p className="text-gray text-sm">
                        {currentTestimonialData.position}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 lg:w-5 lg:h-5 ${
                          i < Math.floor(currentTestimonialData.rating)
                            ? "text-black fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {testimonials.slice(0, 3).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-primary-400 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
