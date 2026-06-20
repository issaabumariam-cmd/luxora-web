"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * LogoImage
 * Real chrome tooth + ribbon logo extracted from reference image.
 */
interface LogoImageProps {
  className?: string;
  animate?: boolean;
  priority?: boolean;
}

export function LogoImage({ className, animate = true, priority = false }: LogoImageProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("relative", className)}
      initial={shouldReduceMotion || !animate ? {} : { opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Image
        src="/assets/luxora/extracted/logo-chrome-ribbon.png"
        alt="Luxora chrome metallic tooth emblem with flowing blue ribbon"
        width={790}
        height={480}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className="h-auto w-full object-contain"
        unoptimized
      />
    </motion.div>
  );
}
