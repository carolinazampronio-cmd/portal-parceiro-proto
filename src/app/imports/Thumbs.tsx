"use client";

import React, { useState } from "react";

interface ThumbsProps {
  className?: string;
  onVote?: (vote: "up" | "down" | null) => void;
}

const iconLine = "font-['pomodoro-icon-line:Regular',sans-serif]";

export function Thumbs({ className = "", onVote }: ThumbsProps) {
  const [active, setActive] = useState<"up" | "down" | null>(null);

  const handleVote = (vote: "up" | "down") => {
    const next = active === vote ? null : vote;
    setActive(next);
    onVote?.(next);
  };

  return (
    <div className={`flex gap-1 items-center ${className}`}>
      <button
        onClick={() => handleVote("down")}
        className={`relative rounded-full shrink-0 size-[29px] flex items-center justify-center cursor-pointer transition-colors ${active === "down" ? "bg-[#f0f0f0]" : "hover:bg-[#f5f5f5]"}`}
      >
        <span className={`${iconLine} text-[14px] leading-[14px] not-italic transition-colors ${active === "down" ? "text-[#141414]" : "text-[#666]"}`}>
          {"\uE81E"}
        </span>
        <div className={`absolute border-[0.75px] border-solid inset-0 pointer-events-none rounded-full transition-colors ${active === "down" ? "border-[#141414]" : "border-[#ebebeb]"}`} />
      </button>
      <button
        onClick={() => handleVote("up")}
        className={`relative rounded-full shrink-0 size-[29px] flex items-center justify-center cursor-pointer transition-colors ${active === "up" ? "bg-[#f0f0f0]" : "hover:bg-[#f5f5f5]"}`}
      >
        <span className={`${iconLine} text-[14px] leading-[14px] not-italic transition-colors ${active === "up" ? "text-[#141414]" : "text-[#666]"}`}>
          {"\uE83B"}
        </span>
        <div className={`absolute border-[0.75px] border-solid inset-0 pointer-events-none rounded-full transition-colors ${active === "up" ? "border-[#141414]" : "border-[#ebebeb]"}`} />
      </button>
    </div>
  );
}

export default Thumbs;
