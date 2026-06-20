"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { LuxoraLogo } from "./luxora-logo";
import { PremiumButton } from "./premium-button";

/**
 * Navigation
 * Fixed glass navigation bar with mobile menu.
 */
export function Navigation() {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const links = [
    { label: "Products", href: "#products" },
    { label: "The Duo", href: "#duo" },
    { label: "Complete Care", href: "#complete-care" },
    { label: "Manual Kit", href: "#manual-kit" },
    { label: "Ritual", href: "#ritual" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between rounded-full border border-white/70 bg-white/90 px-5 py-3 shadow-luxury backdrop-blur-xl">
          <LuxoraLogo showTagline={false} size="md" />

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-luxora-navy transition-colors hover:text-luxora-blue"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <PremiumButton variant="primary" size="sm" href="#cta">
              Shop Luxora
            </PremiumButton>
          </div>

          {/* Mobile menu button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-luxora-ice text-luxora-navy md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="mt-2 overflow-hidden rounded-3xl border border-white/50 bg-white/90 p-5 shadow-luxury backdrop-blur-xl md:hidden"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={shouldReduceMotion ? {} : { opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-base font-medium text-luxora-navy"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <PremiumButton
                  variant="primary"
                  size="md"
                  href="#cta"
                  className="mt-2 w-full"
                  onClick={() => setOpen(false)}
                >
                  Shop Luxora
                </PremiumButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
