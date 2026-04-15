"use client";

import React from "react";

interface ConfiguracoesProps {
  children?: React.ReactNode;
  className?: string;
}

export function Configuracoes({ children, className = "" }: ConfiguracoesProps) {
  return (
    <div className={`flex flex-col gap-4 w-full ${className}`}>
      {children}
    </div>
  );
}

export default Configuracoes;
