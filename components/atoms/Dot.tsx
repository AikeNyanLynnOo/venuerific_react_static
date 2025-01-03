import React from "react";

interface DotProps {
  size?: number; // Diameter of the dot
  innerColor?: string; // Color of the inner dot
  outerColor?: string; // Color of the outer ring
  className?: string; // Additional custom classes
}

const Dot: React.FC<DotProps> = ({
  size = 50,
  innerColor = "bg-green-500",
  outerColor = "bg-green-300",
  className = "",
}) => {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer Circle */}
      <div
        className={`absolute rounded-full ${outerColor}`}
        style={{
          width: size,
          height: size,
          opacity: 0.6,
        }}
      ></div>

      {/* Inner Circle */}
      <div
        className={`absolute rounded-full ${innerColor}`}
        style={{
          width: (size * 1.6) / 3,
          height: (size * 1.6) / 3,
        }}
      ></div>
    </div>
  );
};

export default Dot;
