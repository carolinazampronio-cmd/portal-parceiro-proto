"use client";

import React from "react";

interface FrameProps {
  children?: React.ReactNode;
  className?: string;
}

export function Frame1597889765({ children, className = "" }: FrameProps) {
  return (
    <div className={`flex flex-col gap-4 w-full ${className}`}>
      {children}
    </div>
  );
}

export default Frame1597889765;
