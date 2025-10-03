"use client";

import { useEffect } from "react";
import {
  Phone,
  Smartphone,
  PhoneCall,
  CheckCircle,
  MessageCircle,
  RefreshCw,
  Calendar,
  Clock,
  Repeat,
  Timer,
  PhoneForwarded,
  Bell,
  ShoppingCart,
  FileText,
  Briefcase,
  UserPlus,
  Target,
  Mic,
} from "lucide-react";

export default function FlowChart() {
  useEffect(() => {
    // Initial states
    const problem = document.getElementById("problem");
    const arrow1 = document.getElementById("arrow1");
    const solution = document.getElementById("solution");
    const arrow2 = document.getElementById("arrow2");
    const results = document.getElementById("results");
    const cat1 = document.getElementById("cat1");
    const cat2 = document.getElementById("cat2");
    const cat3 = document.getElementById("cat3");
    const connections = document.getElementById("connections");

    if (problem) problem.style.opacity = "0";
    if (arrow1) arrow1.style.opacity = "0";
    if (solution) solution.style.opacity = "0";
    if (arrow2) arrow2.style.opacity = "0";
    if (results) results.style.opacity = "0";
    if (cat1) cat1.style.opacity = "0";
    if (cat2) cat2.style.opacity = "0";
    if (cat3) cat3.style.opacity = "0";
    if (connections) connections.style.opacity = "0";

    // Animate sequence
    setTimeout(() => {
      if (problem) problem.style.opacity = "1";
    }, 100);
    setTimeout(() => {
      if (arrow1) arrow1.style.opacity = "1";
    }, 700);
    setTimeout(() => {
      if (solution) solution.style.opacity = "1";
    }, 1100);
    setTimeout(() => {
      if (arrow2) arrow2.style.opacity = "1";
    }, 1700);
    setTimeout(() => {
      if (results) results.style.opacity = "1";
    }, 2100);
    setTimeout(() => {
      if (cat1) cat1.style.opacity = "1";
    }, 2400);
    setTimeout(() => {
      if (cat2) cat2.style.opacity = "1";
    }, 2600);
    setTimeout(() => {
      if (cat3) cat3.style.opacity = "1";
    }, 2800);
    setTimeout(() => {
      if (connections) connections.style.opacity = "0.3";
    }, 3000);
  }, []);

  const ServiceCard = ({ icon: Icon, label }: { icon: any; label: string }) => (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.15)",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow =
          "0 8px 12px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)";
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #000000)",
          animation: "animate1 3s linear infinite",
        }}
      />
      <span
        style={{
          position: "absolute",
          top: "-100%",
          right: 0,
          width: "2px",
          height: "100%",
          background: "linear-gradient(180deg, transparent, #000000)",
          animation: "animate2 3s linear infinite",
          animationDelay: "0.75s",
        }}
      />
      <span
        style={{
          position: "absolute",
          bottom: 0,
          right: "-100%",
          width: "100%",
          height: "2px",
          background: "linear-gradient(270deg, transparent, #000000)",
          animation: "animate3 3s linear infinite",
          animationDelay: "1.5s",
        }}
      />
      <span
        style={{
          position: "absolute",
          bottom: "-100%",
          left: 0,
          width: "2px",
          height: "100%",
          background: "linear-gradient(360deg, transparent, #000000)",
          animation: "animate4 3s linear infinite",
          animationDelay: "2.25s",
        }}
      />
      <Icon size={18} color="#000" strokeWidth={2} style={{ zIndex: 1 }} />
      <span style={{ color: "#000", fontWeight: 600, fontSize: 14, zIndex: 1 }}>
        {label}
      </span>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes animate1 {
          0% { left: -100%; }
          50%, 100% { left: 100%; }
        }
        @keyframes animate2 {
          0% { top: -100%; }
          50%, 100% { top: 100%; }
        }
        @keyframes animate3 {
          0% { right: -100%; }
          50%, 100% { right: 100%; }
        }
        @keyframes animate4 {
          0% { bottom: -100%; }
          50%, 100% { bottom: 100%; }
        }
      `}</style>

      <section
        style={{
          background: "#ffffff",
          padding: "40px 20px 100px 20px",
        }}
      >
        <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
          <svg
            id="svg"
            viewBox="0 0 1400 900"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "auto" }}
          >
            {/* Title */}
            <text
              x="700"
              y="40"
              textAnchor="middle"
              fill="#000"
              fontSize="32"
              fontWeight="bold"
            >
              How AI Agent Grows Your Business
            </text>

            {/* Problem Section */}
            <g id="problem" style={{ transition: "opacity 0.6s" }}>
              <rect
                x="50"
                y="80"
                width="300"
                height="120"
                rx="15"
                fill="#ffffff"
                stroke="#000"
                strokeWidth="2"
                filter="url(#shadow)"
              />
              <text
                x="200"
                y="110"
                textAnchor="middle"
                fill="#000"
                fontSize="18"
                fontWeight="bold"
              >
                YOUR CHALLENGES:
              </text>
              <text
                x="200"
                y="140"
                textAnchor="middle"
                fill="#000"
                fontSize="14"
              >
                • Missed calls = Lost revenue
              </text>
              <text
                x="200"
                y="165"
                textAnchor="middle"
                fill="#000"
                fontSize="14"
              >
                • Staff too busy for follow-ups
              </text>
              <text
                x="200"
                y="190"
                textAnchor="middle"
                fill="#000"
                fontSize="14"
              >
                • No 24/7 availability
              </text>
            </g>

            {/* Arrow to Solution */}
            <path
              id="arrow1"
              d="M 350 140 L 450 140"
              stroke="#000"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
              style={{ transition: "opacity 0.4s" }}
            />

            {/* Central Solution */}
            <g id="solution" style={{ transition: "opacity 0.6s" }}>
              <rect
                x="450"
                y="80"
                width="500"
                height="120"
                rx="15"
                fill="#f8f8f8"
                stroke="#000"
                strokeWidth="3"
                filter="url(#shadow-large)"
              />
              <text
                x="700"
                y="125"
                textAnchor="middle"
                fill="#000"
                fontSize="24"
                fontWeight="bold"
              >
                AI AGENT SOLUTION
              </text>
              <text
                x="700"
                y="160"
                textAnchor="middle"
                fill="#000"
                fontSize="16"
              >
                Handles Every Customer Interaction Automatically
              </text>
              <text
                x="700"
                y="185"
                textAnchor="middle"
                fill="#000"
                fontSize="14"
              >
                24/7 • Multi-language • Never Misses a Call
              </text>
            </g>

            {/* Arrow to Results */}
            <path
              id="arrow2"
              d="M 950 140 L 1050 140"
              stroke="#000"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
              style={{ transition: "opacity 0.4s" }}
            />

            {/* Results Section */}
            <g id="results" style={{ transition: "opacity 0.6s" }}>
              <rect
                x="1050"
                y="80"
                width="300"
                height="120"
                rx="15"
                fill="#ffffff"
                stroke="#000"
                strokeWidth="2"
                filter="url(#shadow)"
              />
              <text
                x="1200"
                y="110"
                textAnchor="middle"
                fill="#000"
                fontSize="18"
                fontWeight="bold"
              >
                YOUR RESULTS:
              </text>
              <text
                x="1200"
                y="140"
                textAnchor="middle"
                fill="#000"
                fontSize="14"
              >
                ✓ More leads captured
              </text>
              <text
                x="1200"
                y="165"
                textAnchor="middle"
                fill="#000"
                fontSize="14"
              >
                ✓ Higher conversion rates
              </text>
              <text
                x="1200"
                y="190"
                textAnchor="middle"
                fill="#000"
                fontSize="14"
              >
                ✓ Increased revenue
              </text>
            </g>

            {/* Service Categories Title */}
            <text
              x="700"
              y="260"
              textAnchor="middle"
              fill="#000"
              fontSize="20"
              fontWeight="bold"
            >
              COMPLETE SERVICE CAPABILITIES
            </text>

            {/* Category 1: Lead Generation */}
            <g id="cat1" style={{ transition: "opacity 0.5s" }}>
              <rect
                x="100"
                y="300"
                width="350"
                height="500"
                rx="15"
                fill="#fafafa"
                stroke="#000"
                strokeWidth="2"
                filter="url(#shadow)"
              />
              <rect
                x="100"
                y="300"
                width="350"
                height="50"
                rx="15"
                fill="#e8e8e8"
                stroke="#000"
                strokeWidth="2"
              />
              <text
                x="275"
                y="333"
                textAnchor="middle"
                fill="#000"
                fontSize="18"
                fontWeight="bold"
              >
                LEAD GENERATION
              </text>

              {[
                { icon: Phone, label: "Lead Capture" },
                { icon: Smartphone, label: "Cold Calling" },
                { icon: PhoneCall, label: "Warm Calling" },
                { icon: CheckCircle, label: "Qualification Calls" },
                { icon: MessageCircle, label: "Objection Handling" },
                { icon: RefreshCw, label: "Follow-ups" },
              ].map(({ icon, label }, i) => (
                <foreignObject
                  key={i}
                  x="120"
                  y={370 + i * 65}
                  width="310"
                  height="50"
                >
                  <ServiceCard icon={icon} label={label} />
                </foreignObject>
              ))}
            </g>

            {/* Category 2: Scheduling & Coordination */}
            <g id="cat2" style={{ transition: "opacity 0.5s" }}>
              <rect
                x="525"
                y="300"
                width="350"
                height="500"
                rx="15"
                fill="#fafafa"
                stroke="#000"
                strokeWidth="2"
                filter="url(#shadow)"
              />
              <rect
                x="525"
                y="300"
                width="350"
                height="50"
                rx="15"
                fill="#e8e8e8"
                stroke="#000"
                strokeWidth="2"
              />
              <text
                x="700"
                y="325"
                textAnchor="middle"
                fill="#000"
                fontSize="16"
                fontWeight="bold"
              >
                SCHEDULING &
              </text>
              <text
                x="700"
                y="343"
                textAnchor="middle"
                fill="#000"
                fontSize="16"
                fontWeight="bold"
              >
                COORDINATION
              </text>

              {[
                { icon: Calendar, label: "Calendar Sync" },
                { icon: Clock, label: "Meeting Reminders" },
                { icon: Repeat, label: "Reschedule Calls" },
                { icon: Timer, label: "Callback Trigger" },
                { icon: PhoneForwarded, label: "Call Transfer" },
                { icon: Bell, label: "Reminder" },
              ].map(({ icon, label }, i) => (
                <foreignObject
                  key={i}
                  x="545"
                  y={370 + i * 65}
                  width="310"
                  height="50"
                >
                  <ServiceCard icon={icon} label={label} />
                </foreignObject>
              ))}
            </g>

            {/* Category 3: Sales & Operations */}
            <g id="cat3" style={{ transition: "opacity 0.5s" }}>
              <rect
                x="950"
                y="300"
                width="350"
                height="500"
                rx="15"
                fill="#fafafa"
                stroke="#000"
                strokeWidth="2"
                filter="url(#shadow)"
              />
              <rect
                x="950"
                y="300"
                width="350"
                height="50"
                rx="15"
                fill="#e8e8e8"
                stroke="#000"
                strokeWidth="2"
              />
              <text
                x="1125"
                y="325"
                textAnchor="middle"
                fill="#000"
                fontSize="16"
                fontWeight="bold"
              >
                SALES &
              </text>
              <text
                x="1125"
                y="343"
                textAnchor="middle"
                fill="#000"
                fontSize="16"
                fontWeight="bold"
              >
                OPERATIONS
              </text>

              {[
                { icon: ShoppingCart, label: "Order Taking" },
                { icon: FileText, label: "Contract Confirm" },
                { icon: Briefcase, label: "Deal Update" },
                { icon: UserPlus, label: "Welcome Call" },
                { icon: Target, label: "Onboarding" },
                { icon: Mic, label: "Call Recording" },
              ].map(({ icon, label }, i) => (
                <foreignObject
                  key={i}
                  x="970"
                  y={370 + i * 65}
                  width="310"
                  height="50"
                >
                  <ServiceCard icon={icon} label={label} />
                </foreignObject>
              ))}
            </g>

            {/* Connecting Dotted Lines */}
            <g id="connections" style={{ transition: "opacity 0.8s" }}>
              <path
                d="M 430 395 L 545 395"
                stroke="#000"
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="0.4"
              />
              <path
                d="M 430 460 L 545 460"
                stroke="#000"
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="0.4"
              />
              <path
                d="M 430 525 L 545 525"
                stroke="#000"
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="0.4"
              />
              <path
                d="M 430 590 L 545 590"
                stroke="#000"
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="0.4"
              />
              <path
                d="M 430 655 L 545 655"
                stroke="#000"
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="0.4"
              />
              <path
                d="M 430 720 L 545 720"
                stroke="#000"
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="0.4"
              />

              <path
                d="M 855 395 L 970 395"
                stroke="#000"
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="0.4"
              />
              <path
                d="M 855 460 L 970 460"
                stroke="#000"
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="0.4"
              />
              <path
                d="M 855 525 L 970 525"
                stroke="#000"
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="0.4"
              />
              <path
                d="M 855 590 L 970 590"
                stroke="#000"
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="0.4"
              />
              <path
                d="M 855 655 L 970 655"
                stroke="#000"
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="0.4"
              />
              <path
                d="M 855 720 L 970 720"
                stroke="#000"
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="0.4"
              />
            </g>

            {/* Bottom Banner */}
            <rect
              x="100"
              y="830"
              width="1200"
              height="50"
              rx="15"
              fill="#f0f0f0"
              stroke="#000"
              strokeWidth="2"
              filter="url(#shadow)"
            />
            <text
              x="700"
              y="863"
              textAnchor="middle"
              fill="#000"
              fontSize="18"
              fontWeight="bold"
            >
              24/7 Availability • Multi-Language Support • Never Miss a Lead •
              ROI Guaranteed
            </text>

            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#000" />
              </marker>

              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="0"
                  dy="2"
                  stdDeviation="3"
                  floodOpacity="0.2"
                />
              </filter>

              <filter
                id="shadow-large"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="4"
                  stdDeviation="6"
                  floodOpacity="0.25"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
}
