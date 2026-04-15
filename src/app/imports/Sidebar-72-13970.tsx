"use client";

import React from "react";

interface SidebarProps {
  children?: React.ReactNode;
  className?: string;
}

export function Sidebar72_13970({ children, className = "" }: SidebarProps) {
  return (
    <div className={`flex flex-col gap-2 px-1 pb-6 ${className}`}>
      {children}
    </div>
  );
}

export default Sidebar72_13970;
