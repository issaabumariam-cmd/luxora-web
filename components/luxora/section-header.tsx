"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * SectionHeader
 * Reusable luxury section header: label, headline, subheadline.
 */
interface SectionHeaderProps {
  label?: string;
  headline: string;
  subheadline?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function SectionHeader({
  label,
  headline,
  subheadline,
  align = "center",
  light = false,
  className,
  children,
}: SectionHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      className={cn(
        "flex flex-col gap-3 md:gap-4",
        alignClasses[align],
        className
      )}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {label && (
        <span
          className={cn(
            "label-luxury w-fit",
            light ? "text-luxora-soft-gold" : "text-luxora-blue"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] max-w-4xl",
          light ? "text-white" : "text-luxora-navy"
        )}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={cn(
            "max-w-2xl text-base md:text-lg leading-relaxed",
            light ? "text-luxora-silver" : "text-luxora-navy/70"
          )}
        >
          {subheadline}
        </p>
      )}
      {children}
    </motion.div>
  );
}
