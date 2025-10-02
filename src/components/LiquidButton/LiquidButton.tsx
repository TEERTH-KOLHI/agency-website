"use client";

import React from "react";

const LiquidButton: React.FC = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#161718]">
      <a
        href="#"
        className="
          relative overflow-hidden rounded-md px-12 py-5
          text-white font-bold text-2xl uppercase
          transition duration-200 transform scale-150
          hover:shadow-[0_0_5px_#0080ff,inset_0_0_5px_#0080ff]
        "
      >
        <span className="relative z-10">Button</span>

        {/* Liquid layer */}
        <div className="liquid"></div>
      </a>

      {/* styled-jsx for keyframes & pseudo-elements */}
      <style jsx>{`
        .liquid {
          position: absolute;
          top: -60px;
          left: 0;
          width: 100%;
          height: 200px;
          background: #0080ff;
          box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.7);
          z-index: -1;
          transition: 0.6s;
        }
        a:hover .liquid {
          top: -120px;
        }
        .liquid::after,
        .liquid::before {
          position: absolute;
          content: "";
          width: 200%;
          height: 200%;
          top: 0;
          left: 0;
          transform: translate(-25%, -75%);
        }
        .liquid::after {
          border-radius: 45%;
          background: rgba(20, 20, 20, 1);
          box-shadow: 0 0 10px 5px #0080ff, inset 0 0 5px #0080ff;
          animation: animate 5s linear infinite;
          opacity: 0.8;
        }
        .liquid::before {
          border-radius: 40%;
          background: rgba(26, 26, 26, 0.5);
          box-shadow: 0 0 10px rgba(26, 26, 26, 0.5),
            inset 0 0 5px rgba(26, 26, 26, 0.5);
          animation: animate 7s linear infinite;
        }
        @keyframes animate {
          0% {
            transform: translate(-25%, -75%) rotate(0deg);
          }
          100% {
            transform: translate(-25%, -75%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LiquidButton;
