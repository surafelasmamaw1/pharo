"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  className = "",
  type = "button",
  ariaLabel,
  target,
  rel,
  download,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-foreground text-background hover:bg-foreground/90 active:bg-foreground/80 hover:shadow-[0_0_24px_rgba(30,58,95,0.25)] dark:hover:bg-scholarly dark:hover:text-white",
    secondary: "bg-scholarly text-white hover:bg-scholarly/90 active:bg-scholarly/80 hover:shadow-[0_0_24px_rgba(30,58,95,0.3)]",
    outline: "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background active:bg-foreground/90 hover:shadow-[0_0_24px_rgba(30,58,95,0.25)] dark:hover:bg-scholarly dark:hover:border-scholarly dark:hover:text-white",
  };

  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4.5 text-lg",
  };

  const Component = href ? "a" : "button";

  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ duration: 0.2, type: "spring", stiffness: 400, damping: 10 }}
    >
      <Component
        href={href}
        onClick={onClick}
        disabled={disabled}
        type={type}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
        download={download}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} rounded-full ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
}
