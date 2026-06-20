"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * ChromeToothLogo
 * A metallic chrome tooth emblem with a flowing blue ribbon swoosh.
 * Rendered as inline SVG so it stays crisp and animatable.
 */
interface ChromeToothLogoProps {
  className?: string;
  showRibbon?: boolean;
  animate?: boolean;
}

export function ChromeToothLogo({
  className,
  showRibbon = true,
  animate = true,
}: ChromeToothLogoProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-auto", className)}
      initial={shouldReduceMotion || !animate ? {} : { opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      aria-label="Luxora chrome tooth emblem"
    >
      <defs>
        {/* Chrome metallic gradient for the tooth */}
        <linearGradient id="chromeGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#061A35" />
          <stop offset="25%" stopColor="#4A607A" />
          <stop offset="45%" stopColor="#C8D3E2" />
          <stop offset="55%" stopColor="#EDF4FF" />
          <stop offset="75%" stopColor="#4A607A" />
          <stop offset="100%" stopColor="#061A35" />
        </linearGradient>

        {/* Inner highlight for glassy tooth feel */}
        <linearGradient id="chromeHighlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>

        {/* Blue ribbon gradient */}
        <linearGradient id="ribbonGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(125,187,255,0.2)" />
          <stop offset="40%" stopColor="#7DBBFF" />
          <stop offset="60%" stopColor="#3A8DFF" />
          <stop offset="100%" stopColor="rgba(125,187,255,0.2)" />
        </linearGradient>

        {/* Soft glow filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Chrome tooth shape */}
      <g transform="translate(0, 6)">
        <motion.path
          d="M100 12
             C78 12, 64 24, 58 42
             C52 60, 54 84, 56 106
             C58 130, 62 158, 70 180
             C74 192, 82 202, 92 202
             C96 202, 98 194, 100 180
             C102 194, 104 202, 108 202
             C118 202, 126 192, 130 180
             C138 158, 142 130, 144 106
             C146 84, 148 60, 142 42
             C136 24, 122 12, 100 12Z"
          fill="url(#chromeGradient)"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.2"
          initial={shouldReduceMotion || !animate ? {} : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        {/* Inner glass highlight */}
        <path
          d="M86 40 C82 52, 80 76, 82 96 C84 118, 88 142, 94 162 L90 164 C82 144, 76 120, 74 96 C72 74, 74 50, 80 36 Z"
          fill="url(#chromeHighlight)"
          opacity="0.7"
        />
      </g>

      {/* Flowing blue ribbon */}
      {showRibbon && (
        <motion.path
          d="M28 110
             C42 82, 72 88, 96 104
             C120 120, 150 86, 176 100
             C188 106, 184 126, 168 130
             C150 134, 124 122, 100 120
             C76 118, 58 138, 34 132
             C22 128, 20 118, 28 110Z"
          fill="url(#ribbonGradient)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="0.8"
          filter="url(#glow)"
          className={animate && !shouldReduceMotion ? "animate-ribbon" : ""}
          style={{ transformOrigin: "center" }}
        />
      )}
    </motion.svg>
  );
}
