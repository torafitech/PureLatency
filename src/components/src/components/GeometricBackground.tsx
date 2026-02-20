import React from "react";

const GeometricBackground: React.FC = () => (
  <svg
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1,
      pointerEvents: "none",
    }}
    viewBox="0 0 1920 1080"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Animated circle */}
    <circle
      cx="400"
      cy="300"
      r="200"
      fill="url(#blueGradient)"
    >
      <animate
        attributeName="cx"
        values="400;600;400"
        dur="8s"
        repeatCount="indefinite"
      />
    </circle>
    {/* Polygon */}
    <polygon
      points="1600,200 1700,400 1500,400"
      fill="#38bdf8"
      opacity="0.08"
    />
    {/* Dots */}
    <circle cx="1200" cy="800" r="8" fill="#f59e42" opacity="0.7">
      <animate
        attributeName="cy"
        values="800;820;800"
        dur="6s"
        repeatCount="indefinite"
      />
    </circle>
    <defs>
      <radialGradient id="blueGradient" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

export default GeometricBackground;