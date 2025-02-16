"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Sparkles = ({
    children,
    className,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
    [key: string]: any;
}) => {
    const [sparkles, setSparkles] = useState<Array<{ id: number; color: string; size: number; style: { top: string; left: string; } }>>([]);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const generateSparkle = () => {
            const color = "rgb(59,130,246)";
            const size = Math.random() * 3 + 1;
            const style = {
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
            };
            return {
                id: Math.random(),
                color,
                size,
                style,
            };
        };

        const interval = setInterval(() => {
            setSparkles((currentSparkles) => {
                const newSparkle = generateSparkle();
                const updatedSparkles = [...currentSparkles, newSparkle];
                if (updatedSparkles.length > 5) {
                    updatedSparkles.shift();
                }
                return updatedSparkles;
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <span ref={ref} className={cn("relative inline-block", className)} {...props}>
            {sparkles.map((sparkle) => (
                <motion.span
                    key={sparkle.id}
                    className="absolute inline-block"
                    style={sparkle.style}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                >
                    <svg
                        width={sparkle.size}
                        height={sparkle.size}
                        viewBox="0 0 160 160"
                        fill="none"
                        className="block"
                    >
                        <path
                            d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
                            fill={sparkle.color}
                        />
                    </svg>
                </motion.span>
            ))}
            <span className="relative z-10">{children}</span>
        </span>
    );
};