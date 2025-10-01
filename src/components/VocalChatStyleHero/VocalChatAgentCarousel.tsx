"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const agents = [
  {
    id: 1,
    src: "https://framerusercontent.com/images/dytp933FzpOspVNxBsIFtSsI.png",
  },
  {
    id: 2,
    src: "https://framerusercontent.com/images/AlETzUjSDNpRfwLePuNfTBVa4.png",
  },
  {
    id: 3,
    src: "https://framerusercontent.com/images/cDD1n4h3SKDyBW67BEdtrSfys.png",
  },
];

const VocalChatAgentCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const prevSlide = () =>
    setCurrent((p) => (p === 0 ? agents.length - 1 : p - 1));
  const nextSlide = () =>
    setCurrent((p) => (p === agents.length - 1 ? 0 : p + 1));

  const togglePlay = () => setIsPlaying((prev) => !prev);

  const getPosition = (i: number) => {
    if (i === current) return "center";
    if (i === (current - 1 + agents.length) % agents.length) return "left";
    if (i === (current + 1) % agents.length) return "right";
    return "hidden";
  };

  return (
    <section className="relative w-full flex flex-col items-center py-0">
      <div className="relative w-full max-w-3xl flex items-center justify-center overflow-hidden">
        {/* Carousel Images */}
        <div className="relative flex items-center justify-center w-full h-72">
          {agents.map((agent, idx) => {
            const pos = getPosition(idx);
            let transformValue = "";
            if (pos === "center") transformValue = "translateX(0) scale(1.5)";
            else if (pos === "left")
              transformValue = "translateX(-140px) scale(0.85)";
            else if (pos === "right")
              transformValue = "translateX(140px) scale(0.85)";
            else transformValue = "translateX(0) scale(0.7)";

            return (
              <div
                key={agent.id}
                className="absolute transition-all duration-700 ease-in-out"
                style={{
                  transform: transformValue,
                  opacity: pos === "center" ? 1 : pos === "hidden" ? 0 : 0.5,
                  zIndex: pos === "center" ? 10 : 0,
                }}
              >
                <div className="relative w-56 h-56 overflow-hidden rounded-2xl">
                  <div className="w-full h-full relative">
                    <img
                      src={agent.src}
                      alt={`Agent ${agent.id}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Bottom Gradient */}
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2
                                 w-186 h-18 rounded-t-full
                                 bg-gradient-to-t from-white to-transparent
                                 pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slider Buttons with Play/Pause */}
      <div className="flex gap-4 mt-6 items-center">
        <button
          onClick={prevSlide}
          className="p-3 bg-white rounded-full shadow"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={togglePlay}
          className="p-3 bg-white rounded-full shadow flex items-center justify-center"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>

        <button
          onClick={nextSlide}
          className="p-3 bg-white rounded-full shadow"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default VocalChatAgentCarousel;
