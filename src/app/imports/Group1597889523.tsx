"use client";

import React from "react";

interface GroupProps {
  children?: React.ReactNode;
  className?: string;
}

export function Group1597889523({ children, className = "" }: GroupProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {children}
    </div>
  );
}

export default Group1597889523;
