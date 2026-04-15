"use client";

import React from "react";

interface DrawerInternProps {
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export function DrawerIntern({
  open = false,
  onClose,
  children,
  className = "",
}: DrawerInternProps) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[280px] bg-[#f5f5f5] z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } ${className}`}
      >
        {children}
      </div>
    </>
  );
}

export default DrawerIntern;
