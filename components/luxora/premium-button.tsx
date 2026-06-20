"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * PremiumButton
 * Magnetic-style CTA with luxury hover sweep and glass/chrome variants.
 */
interface PremiumButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export function PremiumButton({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  ariaLabel,
}: PremiumButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const sizes = {
    sm: "h-10 px-5 text-xs",
    md: "h-12 px-7 text-sm",
    lg: "h-14 px-9 text-base",
  };

  const variants = {
    primary:
      "bg-luxora-navy text-white hover:shadow-luxury-hover border border-luxora-navy/10",
    secondary:
      "bg-luxora-ice text-luxora-navy hover:bg-white hover:shadow-luxury border border-luxora-mist",
    outline:
      "bg-transparent text-luxora-navy border border-luxora-navy/20 hover:border-luxora-blue/40 hover:bg-luxora-ice/30",
    ghost:
      "bg-white/60 text-luxora-navy backdrop-blur-md border border-white/70 hover:bg-white",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium tracking-wide transition-colors duration-300",
        sizes[size],
        variants[variant],
        className
      )}
      whileHover={!shouldReduceMotion ? { scale: 1.03 } : {}}
      whileTap={!shouldReduceMotion ? { scale: 0.98 } : {}}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        aria-hidden="true"
      />
    </Component>
  );
}
