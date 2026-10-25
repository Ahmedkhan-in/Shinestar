"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/packages", label: "International Tours" },
  { href: "/umrah", label: "Umrah & Hajj" },
  { href: "/honeymoon", label: "Honeymoon" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-card" : "bg-transparent"
      )}
    >
      <nav className="max-w-content mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
        >
          <span
            className={cn(
              "font-serif text-xl font-light tracking-tight transition-colors",
              isScrolled ? "text-brand-ink" : "text-white"
            )}
          >
            Shine Star
          </span>
          <span
            className={cn(
              "font-sans text-label font-semibold transition-colors",
              isScrolled ? "text-brand-blue" : "text-white/80"
            )}
          >
            Travel
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-label transition-colors hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded",
                isScrolled ? "text-brand-ink" : "text-white/90"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-1.5 text-label transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded",
              isScrolled ? "text-brand-muted" : "text-white/80"
            )}
          >
            <Phone size={14} />
            WhatsApp
          </a>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue text-white text-label font-semibold px-4 py-2 rounded-btn hover:bg-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
          >
            Plan My Trip
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className={cn(
            "md:hidden p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-colors",
            isScrolled ? "text-brand-ink" : "text-white"
          )}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-surface-grey">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-body-lg text-brand-ink py-3 border-b border-surface-grey last:border-0 hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 bg-brand-blue text-white text-label font-semibold px-4 py-3 rounded-btn text-center hover:bg-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              Plan My Trip on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
