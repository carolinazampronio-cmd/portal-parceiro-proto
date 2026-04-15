"use client";

import React from "react";

interface HeaderOsProps {
  children?: React.ReactNode;
  className?: string;
}

export function HeaderOs({ children, className = "" }: HeaderOsProps) {
  return (
    <div className={`bg-[#f5f5f5] flex items-center justify-between h-12 px-4 sticky top-0 z-30 ${className}`}>
      {children}
    </div>
  );
}

export default HeaderOs;
