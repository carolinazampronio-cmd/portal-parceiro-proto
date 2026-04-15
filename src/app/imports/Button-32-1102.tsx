"use client";

import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  label?: string;
}

export function Button32_1102({
  children,
  onClick,
  className = "",
  label,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-[12px] bg-transparent text-[#eb0033] font-['iFood_RC_Textos:Medium',sans-serif] font-medium text-[14px] leading-[16px] hover:opacity-70 transition-opacity cursor-pointer ${className}`}
    >
      {label || children}
    </button>
  );
}

export default Button32_1102;
