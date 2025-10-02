"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const agents = [
  {
    id: 1,
    src: "images/ai-voice/Selena.png",
    audio: "audio/ai-voice/Selena.mpeg",
  },
  {
    id: 2,
    src: "images/ai-voice/Amira.png",
    audio: "audio/ai-voice/Amira.mpeg",
  },
  {
    id: 3,
    src: "images/ai-voice/Thalina.png",
    audio: "audio/ai-voice/Thalina.mpeg",
  },
  {
    id: 4,
    src: "images/ai-voice/Heleen.png",
    audio: "audio/ai-voice/Heleen.mpeg",
  },
  {
    id: 5,
    src: "images/ai-voice/Zelda.png",
    audio: "audio/ai-voice/Zelda.mpeg",
  },
  {
    id: 6,
    src: "images/ai-voice/Bastian.png",
    audio: "audio/ai-voice/Bastian.mpeg",
  },
  {
    id: 7,
    src: "images/ai-voice/Casper.png",
    audio: "audio/ai-voice/Casper.mpeg",
  },
  {
    id: 8,
    src: "images/ai-voice/Tirza.png",
    audio: "audio/ai-voice/Tirza.mpeg",
  },
  {
    id: 9,
    src: "images/ai-voice/Bella.png",
    audio: "audio/ai-voice/Bella.mpeg",
  },
  {
    id: 10,
    src: "images/ai-voice/Carla.png",
    audio: "audio/ai-voice/Carla.mpeg",
  },
];

const VocalChatAgentCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.src = agents[current].audio;
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [current, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center py-0">
      <div className="relative w-full max-w-3xl flex items-center justify-center overflow-hidden">
        {/* Carousel Images */}
        <div className="relative flex items-center justify-center w-full h-[420px] sm:h-[370px] xs:h-[280px]">
          {agents.map((agent, idx) => {
            const pos = getPosition(idx);
            let transformValue = "";

            if (pos === "center") transformValue = "translateX(0) scale(1.5)";
            else if (pos === "left")
              transformValue = "translateX(-160px) scale(0.9)";
            else if (pos === "right")
              transformValue = "translateX(160px) scale(0.9)";
            else transformValue = "translateX(0) scale(0.7)";

            // Responsive scaling
            const responsiveTransform = `
              ${pos === "center" ? "scale(1.2) sm:scale(1.5)" : ""}
              ${
                pos === "left" || pos === "right"
                  ? "scale(0.7) sm:scale(0.9)"
                  : ""
              }
            `;

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
                <div className="relative w-52 sm:w-64 xs:w-44 h-52 sm:h-64 xs:h-44 overflow-hidden rounded-2xl">
                  <img
                    src={agent.src}
                    alt={`Agent ${agent.id}`}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2
                               w-full h-16 sm:h-20 xs:h-14
                               bg-gradient-to-t from-white to-transparent pointer-events-none"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slider Buttons with Play/Pause */}
      <div className="flex gap-4 mt-4 sm:mt-6 flex-wrap justify-center">
        <button
          onClick={prevSlide}
          className="p-3 bg-white rounded-full shadow cursor-pointer transform transition-transform duration-200 hover:scale-90 hover:shadow-md active:bg-gray-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={togglePlay}
          className="p-3 bg-white rounded-full shadow flex items-center justify-center cursor-pointer transform transition-transform duration-200 hover:scale-90 hover:shadow-md active:bg-blue-200"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>

        <button
          onClick={nextSlide}
          className="p-3 bg-white rounded-full shadow cursor-pointer transform transition-transform duration-200 hover:scale-90 hover:shadow-md active:bg-gray-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <audio ref={audioRef} />
    </section>
  );
};

export default VocalChatAgentCarousel;
