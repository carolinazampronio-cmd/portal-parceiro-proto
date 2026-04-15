"use client";

import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`w-full max-w-[1200px] mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
