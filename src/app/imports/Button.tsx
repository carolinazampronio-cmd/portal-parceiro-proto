"use client";

import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  onClick,
  className = "",
  disabled = false,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-[12px] font-['iFood_RC_Textos:Medium',sans-serif] font-medium text-[14px] leading-[16px] transition-colors cursor-pointer";
  const variants = {
    primary: "bg-[#eb0033] text-white hover:bg-[#d8002f] active:bg-[#c5002b]",
    secondary:
      "bg-white text-[#141414] border border-[#ebebeb] hover:bg-[#f5f5f5]",
    ghost: "bg-transparent text-[#141414] hover:bg-[rgba(0,0,0,0.06)]",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
