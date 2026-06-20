"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrayProduct {
  name: string;
  description: string;
  icon: LucideIcon;
  visual: React.ReactNode;
}

/**
 * ProductTray
 * Deep navy tray layout for presenting multiple products with gold accent lines.
 */
interface ProductTrayProps {
  products: TrayProduct[];
  className?: string;
}

export function ProductTray({ products, className }: ProductTrayProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-luxora-navy p-6 md:p-10 lg:p-12",
        className
      )}
    >
      {/* Gold accent lines */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-luxora-gold/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-luxora-gold/40 to-transparent" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            className="group relative flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={
              !shouldReduceMotion
                ? { y: -8, backgroundColor: "rgba(255,255,255,0.1)" }
                : {}
            }
          >
            <div className="flex h-28 w-full items-center justify-center">
              <div className="animate-float">{product.visual}</div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold uppercase tracking-wider text-white">
                {product.name}
              </span>
              <span className="text-xs leading-relaxed text-luxora-silver/70">
                {product.description}
              </span>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-luxora-soft-gold">
              <product.icon size={16} strokeWidth={1.5} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
