import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../../lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "elevated" | "eco";
  children: ReactNode;
}

export function Card({ variant = "default", className, children, ...props }: CardProps) {
  const variants = {
    default: "bg-white dark:bg-card border border-border rounded-2xl p-6 shadow-sm",
    glass: "bg-white/80 dark:bg-card/50 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-lg",
    elevated: "bg-white dark:bg-card rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300",
    eco: "bg-[#F3FAF5] dark:bg-[#1a3d2e] border border-[#4CAF50]/20 rounded-2xl p-6 shadow-sm",
  };

  return (
    <div className={cn(variants[variant], className)} {...props}>
      {children}
    </div>
  );
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function CardTitle({ className, children, ...props }: CardTitleProps) {
  return (
    <h3 className={cn("font-semibold", className)} {...props}>
      {children}
    </h3>
  );
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
}
