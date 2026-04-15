"use client";

import React from "react";

interface SidebarProps {
  children?: React.ReactNode;
  className?: string;
}

export function Sidebar34_7791({ children, className = "" }: SidebarProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {children}
    </div>
  );
}

export default Sidebar34_7791;
