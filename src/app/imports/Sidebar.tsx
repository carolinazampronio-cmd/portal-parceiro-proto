"use client";

import React from "react";

interface SidebarProps {
  children?: React.ReactNode;
  className?: string;
}

export function Sidebar({ children, className = "" }: SidebarProps) {
  return (
    <div className={`flex flex-col h-full bg-[#f5f5f5] ${className}`}>
      {children}
    </div>
  );
}

export default Sidebar;
