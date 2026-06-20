"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useIsTouch } from "@/hooks/use-is-touch";
import { cn } from "@/lib/utils";

/**
 * ProductCard
 * Premium frosted product card with mockup area, benefit icons, and hover shine.
 * Hover shine is hidden on touch to reduce paint work.
 */
interface ProductCardProps {
  title: string;
  subtitle?: string;
  description: string;
  benefits: { icon: LucideIcon; label: string }[];
  visual: React.ReactNode;
  className?: string;
  featured?: boolean;
}

export function ProductCard({
  title,
  subtitle,
  description,
  benefits,
  visual,
  className,
  featured = false,
}: ProductCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isTouch = useIsTouch();

  return (
    <motion.div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border bg-white/70 p-6 shadow-luxury backdrop-blur-xl md:p-8",
        featured && "ring-1 ring-luxora-gold/30",
        className
      )}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={
        !shouldReduceMotion && !isTouch
          ? { y: -10, boxShadow: "0 40px 96px rgba(6,26,53,0.12)" }
          : {}
      }
    >
      {/* Hover light sweep — hidden on touch */}
      {!isTouch && (
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100" />
      )}

      {/* Product visual area */}
      <div className="relative mb-6 flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-luxora-ice/50 to-luxora-mist/30">
        <div className={cn(isTouch ? "" : "animate-float-slow")}>{visual}</div>
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-3">
        {subtitle && (
          <span className="label-luxury text-luxora-blue">{subtitle}</span>
        )}
        <h3 className="font-serif text-2xl font-medium text-luxora-navy">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-luxora-navy/70">
          {description}
        </p>

        {/* Benefit icons */}
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-luxora-ice text-luxora-navy">
                <b.icon size={14} strokeWidth={1.8} />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-luxora-navy/80">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
