"use client";

import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export function Container102_3544({ children, className = "" }: ContainerProps) {
  return (
    <div className={`w-full rounded-[16px] bg-white p-4 sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

export default Container102_3544;
