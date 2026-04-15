"use client";

import React from "react";

interface StoreSelectorProps {
  completedCount?: number;
  total?: number;
  className?: string;
}

export function StoreSelector({
  completedCount = 0,
  total = 6,
  className = "",
}: StoreSelectorProps) {
  const pct = (completedCount / total) * 100;
  const statusColor = completedCount > 0 ? "#EB0033" : "#ccc";
  const statusLabel =
    completedCount === 0
      ? `Vamos começar? (${completedCount} de ${total})`
      : completedCount < total
        ? `Em configuração (${completedCount} de ${total})`
        : `Configuração concluída! (${completedCount} de ${total})`;

  return (
    <div className={`bg-white rounded-[12px] p-3 w-full ${className}`}>
      <p className="font-['iFood_RC_Textos:Medium',sans-serif] font-medium text-[14px] text-[#141414] leading-[16px]">
        Loja fechada
      </p>
      <p className="font-['iFood_RC_Textos:Regular',sans-serif] font-normal text-[12px] text-[#666] leading-[16px] mt-0.5">
        {statusLabel}
      </p>
      <div className="mt-1 bg-[#ccc] rounded-full h-1 w-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%`, backgroundColor: statusColor }}
        />
      </div>
    </div>
  );
}

export default StoreSelector;
