import React from "react";
import { Phone, PhoneOff } from "lucide-react";

export default function CallNotification() {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Top: Incoming Call Card */}

      <div className="bg-black rounded-full px-3 py-2 flex items-center gap-2 shadow-lg">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center overflow-hidden">
          <div className="w-5 h-5 rounded-full bg-gray-800"></div>
        </div>

        <div className="flex flex-col">
          <p className="text-gray-400 text-[10px]">Incoming Call</p>
          <p className="text-white font-semibold text-sm">Sales Client</p>
        </div>

        <div className="flex items-center gap-1.5 ml-3">
          <button className="w-7 h-7 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
            <PhoneOff className="w-3.5 h-3.5 text-white" />
          </button>
          <button className="w-7 h-7 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all hover:scale-110 animate-pulse">
            <Phone className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>

      {/* Vertical Connector */}
      <div className="w-0.5 h-12 bg-gradient-to-b from-purple-300 via-purple-200 to-transparent"></div>

      {/* Middle: Answered By Card with horizontal line */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-md md:ml-60">
        {/* AI Card */}
        <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-2 shadow-md flex-none">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
              alt="AI Julia"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <span className="text-gray-400 text-xs">Answered by</span>
              <span className="text-orange-500 font-semibold text-sm">
                AI Julia
              </span>
            </div>

            {/* Audio Waveform */}
            <div className="flex items-center gap-0.5">
              {[...Array(12)].map((_, i) => {
                const heights = [5, 10, 7, 12, 10, 14, 12, 10, 7, 12, 8, 6];
                const colors = i < 6 ? "bg-green-400" : "bg-orange-400";
                return (
                  <div
                    key={i}
                    className={`w-0.5 rounded-full ${colors} transition-all duration-300`}
                    style={{
                      height: `${heights[i]}px`,
                      animation: `wave 1s ease-in-out infinite`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Line - Vertical on mobile, Horizontal on desktop */}
        <div className="w-0.5 h-12 md:h-0.5 md:w-auto md:flex-1 bg-gradient-to-b md:bg-gradient-to-r from-purple-300 via-purple-200 to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(1.5);
          }
        }
      `}</style>
    </div>
  );
}
