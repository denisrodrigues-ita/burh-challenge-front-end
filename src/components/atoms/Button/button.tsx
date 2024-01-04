import React from "react";
import { ButtonProps } from "./interface";
import "./button.css";

const Button: React.FC<ButtonProps> = ({ onClick, type, children }) => {
  return (
    <button className="btn" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
