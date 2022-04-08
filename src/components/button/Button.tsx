/* eslint-disable no-unused-vars */
import React, { MouseEvent, CSSProperties, DetailedHTMLProps } from "react";

export interface ButtonType
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  style?: CSSProperties;
  className?: any;
  onClick?: (e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void;
}

export default function Button({
  value,
  style,
  onClick,
  disabled,
  className,
}: ButtonType) {
  return (
    <input
      disabled={disabled}
      onClick={onClick}
      className={className}
      type="button"
      value={value}
      style={{ ...permanentStyle, ...style }}
    />
  );
}

const permanentStyle = {
  padding: "15px",
  width: "auto",
  borderRadius: "4px",
  marginBottom: 0,
  border: "none",
  cursor: "pointer",
};

Button.defaultProps = {
  style: {},
  onClick: () => "",
};
