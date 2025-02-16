"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div className={cn("absolute inset-0 overflow-hidden", className)}>
            <div className="h-full w-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
                <div className="absolute inset-0 z-0 bg-transparent [background:radial-gradient(circle_500px_at_50%_50%,#3b82f6,transparent_100%)]  opacity-50 blur-[100px]" />
            </div>
        </div>
    );
};