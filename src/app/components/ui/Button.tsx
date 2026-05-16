import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "success" | "danger";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg active:scale-95";

  const variants = {
    primary: "bg-[#609DFF] text-white hover:bg-[#5088e6] shadow-md shadow-blue-500/20",
    secondary: "bg-[#013180] text-white hover:bg-[#022860] shadow-md shadow-blue-900/20",
    outline: "border-2 border-[#609DFF] text-[#609DFF] hover:bg-[#609DFF] hover:text-white",
    ghost: "text-[#5F6368] hover:bg-[#F7F9FC] hover:text-[#000000]",
    success: "bg-[#4CAF50] text-white hover:bg-[#45a049] shadow-md shadow-green-500/20",
    danger: "bg-[#E53935] text-white hover:bg-[#d32f2f] shadow-md shadow-red-500/20",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
