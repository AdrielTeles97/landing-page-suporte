"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShiningTextProps {
  children: React.ReactNode;
  className?: string;
}

export const ShiningText = ({ children, className }: ShiningTextProps) => {
  return (
    <div className={cn("relative group", className)}>
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative">{children}</div>
    </div>
  );
};