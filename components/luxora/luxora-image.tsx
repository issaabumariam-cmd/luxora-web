"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * LuxoraImage
 * Premium image wrapper with lazy loading, fade-in animation,
 * and responsive sizing. Uses Next.js Image with unoptimized static export.
 */
interface LuxoraImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  animate?: boolean;
  float?: boolean;
}

export function LuxoraImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  animate = true,
  float = false,
}: LuxoraImageProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("relative", className)}
      initial={shouldReduceMotion || !animate ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      animate={
        float && !shouldReduceMotion
          ? { y: [0, -12, 0] }
          : {}
      }
      style={float ? { animationDuration: "6s" } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className="h-auto w-full object-contain"
        unoptimized
      />
    </motion.div>
  );
}

/**
 * StaticImage
 * Simple Next.js Image without animation wrapper.
 */
interface StaticImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export function StaticImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: StaticImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      className={cn("h-auto w-full object-contain", className)}
      unoptimized
    />
  );
}
