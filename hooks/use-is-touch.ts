"use client";

import { useEffect, useState } from "react";

/**
 * useIsTouch
 * Returns true when the primary pointer is coarse (phones/tablets).
 * Use this to disable expensive effects like backdrop-filter, particles,
 * and continuous floating animations on mobile GPUs.
 */
export function useIsTouch(): boolean {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(pointer: coarse)");
    setIsTouch(mq.matches);

    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsTouch(e.matches);

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isTouch;
}

export function useIsReducedOrTouch(): {
  reduced: boolean;
  touch: boolean;
  simple: boolean;
} {
  const [reduced, setReduced] = useState(false);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const touchMq = window.matchMedia("(pointer: coarse)");

    setReduced(reducedMq.matches);
    setTouch(touchMq.matches);

    const reducedHandler = (e: MediaQueryListEvent | MediaQueryList) =>
      setReduced(e.matches);
    const touchHandler = (e: MediaQueryListEvent | MediaQueryList) =>
      setTouch(e.matches);

    reducedMq.addEventListener("change", reducedHandler);
    touchMq.addEventListener("change", touchHandler);

    return () => {
      reducedMq.removeEventListener("change", reducedHandler);
      touchMq.removeEventListener("change", touchHandler);
    };
  }, []);

  return { reduced, touch, simple: reduced || touch };
}
