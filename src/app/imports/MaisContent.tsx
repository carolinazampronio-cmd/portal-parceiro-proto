"use client";

import React from "react";

interface MaisContentProps {
  className?: string;
}

export function MaisContent({ className = "" }: MaisContentProps) {
  return (
    <div className={`flex flex-col gap-4 p-4 ${className}`}>
      <h2 className="font-['iFood_RC_Textos:Medium',sans-serif] font-medium text-[20px] text-[#141414] leading-[24px]">
        Mais
      </h2>
      <div className="bg-white rounded-[12px] p-4">
        <p className="font-['iFood_RC_Textos:Regular',sans-serif] font-normal text-[14px] text-[#666] leading-[20px]">
          Conteúdo adicional
        </p>
      </div>
    </div>
  );
}

export default MaisContent;
