"use client";

import { AtSign, Camera, MessageCircle, Play } from "lucide-react";
import { LuxoraLogo } from "./luxora-logo";
import { PremiumButton } from "./premium-button";

/**
 * Footer
 * Premium footer using the real Luxora logo image.
 */
export function Footer() {
  const productLinks = [
    "Whitening Strips",
    "Strengthening Strips",
    "Complete Care Combo",
    "Complete Care Kit",
    "Manual Care Kit",
  ];

  const careLinks = [
    "Why Luxora",
    "Daily Ritual",
    "Enamel Conscious",
    "Sensitivity Conscious",
    "Dentist Formulated",
  ];

  const supportLinks = [
    "Contact Us",
    "FAQs",
    "Shipping",
    "Returns",
    "Privacy Policy",
  ];

  const socials = [
    { icon: Camera, label: "Instagram" },
    { icon: AtSign, label: "Facebook" },
    { icon: MessageCircle, label: "Twitter" },
    { icon: Play, label: "YouTube" },
  ];

  return (
    <footer className="bg-luxora-midnight py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <LuxoraLogo light showTagline size="lg" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-luxora-silver/80">
              Premium oral-care rituals designed to whiten, strengthen, and
              protect your smile with elegance and confidence.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-luxora-silver transition-colors hover:border-luxora-gold/50 hover:text-luxora-soft-gold"
                >
                  <s.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <div className="flex flex-col gap-4">
              <span className="label-luxury text-luxora-soft-gold">Products</span>
              <nav className="flex flex-col gap-3">
                {productLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm text-luxora-silver/80 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <span className="label-luxury text-luxora-soft-gold">Care</span>
              <nav className="flex flex-col gap-3">
                {careLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm text-luxora-silver/80 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <span className="label-luxury text-luxora-soft-gold">Support</span>
              <nav className="flex flex-col gap-3">
                {supportLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm text-luxora-silver/80 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <span className="label-luxury text-luxora-soft-gold">Stay in the Loop</span>
            <p className="mt-3 text-sm text-luxora-silver/80">
              Get tips, launch updates, and exclusive offers from Luxora.
            </p>
            <form
              className="mt-4 flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                placeholder="Your email"
                required
                className="h-12 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white placeholder:text-luxora-silver/50 focus:border-luxora-gold/50 focus:outline-none"
              />
              <PremiumButton variant="secondary" size="sm" className="w-full">
                Subscribe
              </PremiumButton>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Disclaimer */}
        <p className="text-center text-xs leading-relaxed text-luxora-silver/60">
          Luxora products are cosmetic and oral-care products. Results may vary.
          Always follow product instructions and consult a dental professional for
          specific dental concerns.
        </p>

        <p className="mt-4 text-center text-xs text-luxora-silver/40">
          © {new Date().getFullYear()} Luxora. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
