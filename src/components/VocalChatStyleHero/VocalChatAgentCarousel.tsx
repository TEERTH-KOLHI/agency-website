"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowRight,
} from "lucide-react";

const agents = [
  {
    id: 1,
    src: "images/ai-voice/Selena.png",
    audio: "audio/ai-voice/Selena.mpeg",
    name: "Selena",
    role: "AI Customer Support",
    description: "Selena handles real-time queries with empathy and accuracy.",
  },
  {
    id: 2,
    src: "images/ai-voice/Amira.png",
    audio: "audio/ai-voice/Amira.mpeg",
    name: "Amira",
    role: "Technical Assistant",
    description:
      "Amira resolves technical issues and automates troubleshooting.",
  },
  {
    id: 3,
    src: "images/ai-voice/Thalina.png",
    audio: "audio/ai-voice/Thalina.mpeg",
    name: "Thalina",
    role: "Sales Agent",
    description:
      "Thalina recommends the best products tailored to customer needs.",
  },
  {
    id: 4,
    src: "images/ai-voice/Heleen.png",
    audio: "audio/ai-voice/Heleen.mpeg",
    name: "Heleen",
    role: "Data Analyst",
    description:
      "Heleen provides insights from interactions to improve strategies.",
  },
  {
    id: 5,
    src: "images/ai-voice/Zelda.png",
    audio: "audio/ai-voice/Zelda.mpeg",
    name: "Zelda",
    role: "Engagement Specialist",
    description: "Zelda keeps customers engaged with proactive conversations.",
  },
  {
    id: 6,
    src: "images/ai-voice/Bastian.png",
    audio: "audio/ai-voice/Bastian.mpeg",
    name: "Bastian",
    role: "Onboarding Guide",
    description: "Bastian guides new users through onboarding smoothly.",
  },
  {
    id: 7,
    src: "images/ai-voice/Casper.png",
    audio: "audio/ai-voice/Casper.mpeg",
    name: "Casper",
    role: "AI Trainer",
    description: "Casper helps refine models with continuous learning.",
  },
  {
    id: 8,
    src: "images/ai-voice/Tirza.png",
    audio: "audio/ai-voice/Tirza.mpeg",
    name: "Tirza",
    role: "Operations Assistant",
    description: "Tirza ensures workflows are optimized and efficient.",
  },
  {
    id: 9,
    src: "images/ai-voice/Bella.png",
    audio: "audio/ai-voice/Bella.mpeg",
    name: "Bella",
    role: "Marketing Agent",
    description: "Bella drives brand engagement with personalized outreach.",
  },
  {
    id: 10,
    src: "images/ai-voice/Carla.png",
    audio: "audio/ai-voice/Carla.mpeg",
    name: "Carla",
    role: "Support Agent",
    description: "Carla ensures customers always receive timely assistance.",
  },
];

const VocalChatAgentCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);

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

  // Close details when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (detailRef.current && !detailRef.current.contains(e.target as Node)) {
        setShowDetail(false);
      }
    }
    if (showDetail) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDetail]);

  // Handle audio play/pause
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
                  {/* Image with blur when showing details */}
                  <img
                    src={agent.src}
                    alt={`Agent ${agent.id}`}
                    className={`w-full h-full object-cover transition duration-500 ${
                      pos === "center" && showDetail ? "blur-[5px]" : ""
                    }`}
                  />

                  {/* Learn More Button */}
                  {pos === "center" && !showDetail && (
                    <button
                      onClick={() => setShowDetail(true)}
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 
             px-2.5 py-1 text-[10px] 
             bg-white text-black font-medium 
             rounded-t-md rounded-b-none shadow-md border 
             hover:bg-white/30 hover:shadow-lg 
             transition-all duration-200 cursor-pointer
             flex items-center gap-1"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={12} strokeWidth={2} />
                    </button>
                  )}

                  {/* Details Overlay with Slide Effect */}
                  {pos === "center" && (
                    <div
                      ref={detailRef}
                      className={`absolute inset-0 flex flex-col justify-center items-center text-center text-white px-0 transform transition-all duration-700 ease-in-out ${
                        showDetail
                          ? "translate-y-0 opacity-100"
                          : "translate-y-full opacity-0"
                      }`}
                    >
                      <p className="text-[11px] mt-2 drop-shadow-md max-w-[40%]">
                        {agent.description}
                      </p>
                    </div>
                  )}

                  {/* Bottom gradient */}
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
