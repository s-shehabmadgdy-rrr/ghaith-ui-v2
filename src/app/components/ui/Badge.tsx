import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../../lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "success" | "warning" | "danger" | "info" | "eco";
  children: ReactNode;
}

export function Badge({ variant = "primary", className, children, ...props }: BadgeProps) {
  const variants = {
    primary: "bg-[#609DFF]/10 text-[#013180] dark:bg-[#609DFF]/20 dark:text-[#7eb3ff]",
    success: "bg-[#4CAF50]/10 text-[#1B5E20] dark:bg-[#4CAF50]/20 dark:text-[#5dd480]",
    warning: "bg-[#FFA726]/10 text-[#E65100] dark:bg-[#FFA726]/20 dark:text-[#ffc875]",
    danger: "bg-[#E53935]/10 text-[#B71C1C] dark:bg-[#E53935]/20 dark:text-[#ff6b6b]",
    info: "bg-[#F7F9FC] text-[#5F6368] dark:bg-[#1e3a5f] dark:text-[#94a3b8]",
    eco: "bg-[#4CAF50]/15 text-[#2D7A4A] dark:bg-[#4CAF50]/25 dark:text-[#5dd480]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
