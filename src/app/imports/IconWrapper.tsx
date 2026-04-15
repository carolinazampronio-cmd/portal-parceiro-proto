"use client";

import React from "react";

interface IconWrapperProps {
  children?: React.ReactNode;
  size?: number;
  className?: string;
}

export function IconWrapper({
  children,
  size = 20,
  className = "",
}: IconWrapperProps) {
  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {children}
    </div>
  );
}

export default IconWrapper;
