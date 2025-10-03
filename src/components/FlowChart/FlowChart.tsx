"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Skip animations on mobile

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
  }, [isMobile]);

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

  if (isMobile) {
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
            padding: "20px",
          }}
        >
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            {/* Title */}
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "30px",
                color: "#000",
              }}
            >
              {t("flowchart.title")}
            </h1>

            {/* Problem Section */}
            <div
              style={{
                background: "#ffffff",
                border: "2px solid #000",
                borderRadius: "15px",
                padding: "20px",
                marginBottom: "20px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                  color: "#000",
                }}
              >
                {t("flowchart.challenges.title")}
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "8px", color: "#000" }}>
                  • {t("flowchart.challenges.missedCalls")}
                </li>
                <li style={{ marginBottom: "8px", color: "#000" }}>
                  • {t("flowchart.challenges.staffBusy")}
                </li>
                <li style={{ color: "#000" }}>
                  • {t("flowchart.challenges.noAvailability")}
                </li>
              </ul>
            </div>

            {/* Arrow Down */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "15px 0",
              }}
            >
              <div
                style={{
                  width: "2px",
                  height: "30px",
                  background: "#000",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "-8px",
                    left: "-4px",
                    width: 0,
                    height: 0,
                    borderLeft: "5px solid transparent",
                    borderRight: "5px solid transparent",
                    borderTop: "10px solid #000",
                  }}
                />
              </div>
            </div>

            {/* Solution Section */}
            <div
              style={{
                background: "#f8f8f8",
                border: "3px solid #000",
                borderRadius: "15px",
                padding: "25px",
                marginBottom: "20px",
                boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  color: "#000",
                }}
              >
                {t("flowchart.solution.title")}
              </h2>
              <p
                style={{ marginBottom: "8px", color: "#000", fontSize: "14px" }}
              >
                {t("flowchart.solution.subtitle")}
              </p>
              <p style={{ color: "#000", fontSize: "12px" }}>
                {t("flowchart.solution.features")}
              </p>
            </div>

            {/* Arrow Down */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "15px 0",
              }}
            >
              <div
                style={{
                  width: "2px",
                  height: "30px",
                  background: "#000",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "-8px",
                    left: "-4px",
                    width: 0,
                    height: 0,
                    borderLeft: "5px solid transparent",
                    borderRight: "5px solid transparent",
                    borderTop: "10px solid #000",
                  }}
                />
              </div>
            </div>

            {/* Results Section */}
            <div
              style={{
                background: "#ffffff",
                border: "2px solid #000",
                borderRadius: "15px",
                padding: "20px",
                marginBottom: "30px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                  color: "#000",
                }}
              >
                {t("flowchart.results.title")}
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "8px", color: "#000" }}>
                  ✓ {t("flowchart.results.moreLeads")}
                </li>
                <li style={{ marginBottom: "8px", color: "#000" }}>
                  ✓ {t("flowchart.results.higherConversion")}
                </li>
                <li style={{ color: "#000" }}>
                  ✓ {t("flowchart.results.increasedRevenue")}
                </li>
              </ul>
            </div>

            {/* Service Categories Title */}
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "25px",
                color: "#000",
              }}
            >
              {t("flowchart.capabilities")}
            </h2>

            {/* Category 1: Lead Generation */}
            <div
              style={{
                background: "#fafafa",
                border: "2px solid #000",
                borderRadius: "15px",
                padding: "20px",
                marginBottom: "20px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                  color: "#000",
                  textAlign: "center",
                  background: "#e8e8e8",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                {t("flowchart.categories.leadGeneration")}
              </h3>
              <div style={{ display: "grid", gap: "12px" }}>
                {[
                  { icon: Phone, key: "leadCapture" },
                  { icon: Smartphone, key: "coldCalling" },
                  { icon: PhoneCall, key: "warmCalling" },
                  { icon: CheckCircle, key: "qualificationCalls" },
                  { icon: MessageCircle, key: "objectionHandling" },
                  { icon: RefreshCw, key: "followUps" },
                ].map(({ icon, key }) => (
                  <div key={key} style={{ height: "50px" }}>
                    <ServiceCard
                      icon={icon}
                      label={t(`flowchart.services.${key}`)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2: Scheduling & Coordination */}
            <div
              style={{
                background: "#fafafa",
                border: "2px solid #000",
                borderRadius: "15px",
                padding: "20px",
                marginBottom: "20px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                  color: "#000",
                  textAlign: "center",
                  background: "#e8e8e8",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                {t("flowchart.categories.scheduling1")}{" "}
                {t("flowchart.categories.scheduling2")}
              </h3>
              <div style={{ display: "grid", gap: "12px" }}>
                {[
                  { icon: Calendar, key: "calendarSync" },
                  { icon: Clock, key: "meetingReminders" },
                  { icon: Repeat, key: "rescheduleCalls" },
                  { icon: Timer, key: "callbackTrigger" },
                  { icon: PhoneForwarded, key: "callTransfer" },
                  { icon: Bell, key: "reminder" },
                ].map(({ icon, key }) => (
                  <div key={key} style={{ height: "50px" }}>
                    <ServiceCard
                      icon={icon}
                      label={t(`flowchart.services.${key}`)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Category 3: Sales & Operations */}
            <div
              style={{
                background: "#fafafa",
                border: "2px solid #000",
                borderRadius: "15px",
                padding: "20px",
                marginBottom: "20px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                  color: "#000",
                  textAlign: "center",
                  background: "#e8e8e8",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                {t("flowchart.categories.sales1")}{" "}
                {t("flowchart.categories.sales2")}
              </h3>
              <div style={{ display: "grid", gap: "12px" }}>
                {[
                  { icon: ShoppingCart, key: "orderTaking" },
                  { icon: FileText, key: "contractConfirm" },
                  { icon: Briefcase, key: "dealUpdate" },
                  { icon: UserPlus, key: "welcomeCall" },
                  { icon: Target, key: "onboarding" },
                  { icon: Mic, key: "callRecording" },
                ].map(({ icon, key }) => (
                  <div key={key} style={{ height: "50px" }}>
                    <ServiceCard
                      icon={icon}
                      label={t(`flowchart.services.${key}`)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Banner */}
            <div
              style={{
                background: "#f0f0f0",
                border: "2px solid #000",
                borderRadius: "15px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#000",
                  margin: 0,
                }}
              >
                {t("flowchart.banner")}
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

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
              {t("flowchart.title")}
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
                {t("flowchart.challenges.title")}
              </text>
              <text
                x="200"
                y="140"
                textAnchor="middle"
                fill="#000"
                fontSize="14"
              >
                • {t("flowchart.challenges.missedCalls")}
              </text>
              <text
                x="200"
                y="165"
                textAnchor="middle"
                fill="#000"
                fontSize="14"
              >
                • {t("flowchart.challenges.staffBusy")}
              </text>
              <text
                x="200"
                y="190"
                textAnchor="middle"
                fill="#000"
                fontSize="14"
              >
                • {t("flowchart.challenges.noAvailability")}
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
                {t("flowchart.solution.title")}
              </text>
              <text
                x="700"
                y="160"
                textAnchor="middle"
                fill="#000"
                fontSize="16"
              >
                {t("flowchart.solution.subtitle")}
              </text>
              <text
                x="700"
                y="185"
                textAnchor="middle"
                fill="#000"
                fontSize="14"
              >
                {t("flowchart.solution.features")}
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
                {t("flowchart.results.title")}
              </text>
              <text
                x="1200"
                y="140"
                textAnchor="middle"
                fill="#000"
                fontSize="14"
              >
                ✓ {t("flowchart.results.moreLeads")}
              </text>
              <text
                x="1200"
                y="165"
                textAnchor="middle"
                fill="#000"
                fontSize="14"
              >
                ✓ {t("flowchart.results.higherConversion")}
              </text>
              <text
                x="1200"
                y="190"
                textAnchor="middle"
                fill="#000"
                fontSize="14"
              >
                ✓ {t("flowchart.results.increasedRevenue")}
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
              {t("flowchart.capabilities")}
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
                {t("flowchart.categories.leadGeneration")}
              </text>

              {[
                { icon: Phone, key: "leadCapture" },
                { icon: Smartphone, key: "coldCalling" },
                { icon: PhoneCall, key: "warmCalling" },
                { icon: CheckCircle, key: "qualificationCalls" },
                { icon: MessageCircle, key: "objectionHandling" },
                { icon: RefreshCw, key: "followUps" },
              ].map(({ icon, key }, i) => (
                <foreignObject
                  key={i}
                  x="120"
                  y={370 + i * 65}
                  width="310"
                  height="50"
                >
                  <ServiceCard
                    icon={icon}
                    label={t(`flowchart.services.${key}`)}
                  />
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
                {t("flowchart.categories.scheduling1")}
              </text>
              <text
                x="700"
                y="343"
                textAnchor="middle"
                fill="#000"
                fontSize="16"
                fontWeight="bold"
              >
                {t("flowchart.categories.scheduling2")}
              </text>

              {[
                { icon: Calendar, key: "calendarSync" },
                { icon: Clock, key: "meetingReminders" },
                { icon: Repeat, key: "rescheduleCalls" },
                { icon: Timer, key: "callbackTrigger" },
                { icon: PhoneForwarded, key: "callTransfer" },
                { icon: Bell, key: "reminder" },
              ].map(({ icon, key }, i) => (
                <foreignObject
                  key={i}
                  x="545"
                  y={370 + i * 65}
                  width="310"
                  height="50"
                >
                  <ServiceCard
                    icon={icon}
                    label={t(`flowchart.services.${key}`)}
                  />
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
                {t("flowchart.categories.sales1")}
              </text>
              <text
                x="1125"
                y="343"
                textAnchor="middle"
                fill="#000"
                fontSize="16"
                fontWeight="bold"
              >
                {t("flowchart.categories.sales2")}
              </text>

              {[
                { icon: ShoppingCart, key: "orderTaking" },
                { icon: FileText, key: "contractConfirm" },
                { icon: Briefcase, key: "dealUpdate" },
                { icon: UserPlus, key: "welcomeCall" },
                { icon: Target, key: "onboarding" },
                { icon: Mic, key: "callRecording" },
              ].map(({ icon, key }, i) => (
                <foreignObject
                  key={i}
                  x="970"
                  y={370 + i * 65}
                  width="310"
                  height="50"
                >
                  <ServiceCard
                    icon={icon}
                    label={t(`flowchart.services.${key}`)}
                  />
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
              {t("flowchart.banner")}
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
