"use client";

import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  label?: string;
}

export function Button32_1098({
  children,
  onClick,
  className = "",
  label,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[12px] bg-[#eb0033] text-white font-['iFood_RC_Textos:Medium',sans-serif] font-medium text-[14px] leading-[16px] hover:bg-[#d8002f] transition-colors cursor-pointer ${className}`}
    >
      {label || children}
    </button>
  );
}

export default Button32_1098;
