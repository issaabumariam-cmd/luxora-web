"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonRow {
  feature: string;
  manual: boolean;
  electronic: boolean;
}

/**
 * ComparisonTable
 * Elegant minimal table comparing Manual vs Electronic care.
 */
interface ComparisonTableProps {
  rows: ComparisonRow[];
  className?: string;
}

export function ComparisonTable({ rows, className }: ComparisonTableProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "overflow-hidden rounded-2xl border border-white/10 bg-luxora-navy/80 backdrop-blur-xl",
        className
      )}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Header */}
      <div className="grid grid-cols-[1fr_120px_120px] items-center border-b border-white/10 bg-white/5 px-4 py-4 md:px-6 md:py-5">
        <span className="text-xs font-semibold uppercase tracking-widest text-luxora-silver">
          Feature
        </span>
        <span className="text-center text-xs font-semibold uppercase tracking-widest text-luxora-soft-gold">
          Manual
        </span>
        <span className="text-center text-xs font-semibold uppercase tracking-widest text-luxora-silver/70">
          Electronic
        </span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-white/10">
        {rows.map((row, i) => (
          <motion.div
            key={row.feature}
            className="grid grid-cols-[1fr_120px_120px] items-center px-4 py-3.5 md:px-6 md:py-4"
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <span className="text-sm font-medium text-white">{row.feature}</span>
            <div className="flex justify-center">
              {row.manual ? (
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-luxora-gold/20 text-luxora-soft-gold">
                  <Check size={14} strokeWidth={2.5} />
                </div>
              ) : (
                <span className="h-7 w-7 rounded-full border border-white/10" />
              )}
            </div>
            <div className="flex justify-center">
              {row.electronic ? (
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-luxora-silver">
                  <Check size={14} strokeWidth={2.5} />
                </div>
              ) : (
                <span className="h-7 w-7 rounded-full border border-white/10" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
