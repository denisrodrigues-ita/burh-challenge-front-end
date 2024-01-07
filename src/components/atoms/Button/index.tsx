import React from "react";
import { ButtonProps } from "./interface";
import "./button.css";

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  children,
  style,
  active,
}) => {
  if (active) {
    style += " active";
  }

  return (
    <button className={style} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
