import React from "react";

interface fillProps {
  color: "green" | "yellow" | "red";
}

const ChartIcon: React.FC<fillProps> = ({ color }) => {
  const handleColor = (color: "green" | "yellow" | "red") => {
    if (color === "green") return "#05FF00";
    if (color === "yellow") return "#FFFF99";
    if (color === "red") return "#FF5964";
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <g
        stroke={handleColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.983 7.275v5.578"></path>
        <path d="M8.73 4.605v8.248"></path>
        <path d="M12.416 10.222v2.631"></path>
        <path
          fillRule="evenodd"
          d="M.718 8.755C.718 2.669 2.72.64 8.73.64c6.01 0 8.013 2.028 8.013 8.114 0 6.085-2.004 8.114-8.013 8.114S.718 14.839.718 8.755z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
};

export default ChartIcon;
