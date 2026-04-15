"use client";

import React from "react";

interface ConfiguracoesProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
}

export function Configuracoes58_21428({ children, className = "", title }: ConfiguracoesProps) {
  return (
    <div className={`flex flex-col gap-4 w-full ${className}`}>
      {title && (
        <h2 className="font-['iFood_RC_Textos:Bold',sans-serif] font-bold text-[20px] text-[#141414] leading-[24px]">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}

export default Configuracoes58_21428;
