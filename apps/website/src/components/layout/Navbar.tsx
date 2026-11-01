"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/packages", label: "International Tours" },
  { href: "/umrah", label: "Umrah & Hajj" },
  { href: "/honeymoon", label: "Honeymoon" },
  { href: "/visa", label: "Visa" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About Us" },
];

// Pages whose hero sits on a light (cream / white) surface — nav starts with dark text
const lightHeroRoutes = ["/reviews", "/about"];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname() ?? "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close the drawer on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  const dark = isScrolled || menuOpen || lightHeroRoutes.includes(pathname);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || menuOpen ? "bg-white shadow-card" : "bg-transparent"
      )}
    >
      <nav
        aria-label="Main"
        className="max-w-content mx-auto px-4 md:px-8 h-16 flex items-center justify-between"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Shine Star Tours and Travel — home"
          className="flex items-center py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
        >
          <Logo tone={dark ? "dark" : "light"} />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-2 whitespace-nowrap text-label transition-colors hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded",
                    dark ? "text-brand-ink" : "text-white/90",
                    active && (dark ? "text-brand-blue" : "text-white")
                  )}
                >
                  {link.label}
                  {/* Gold active marker */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-brand-gold origin-left transition-transform duration-300 ease-premium",
                      active ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/923462646201"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden xl:flex items-center gap-1.5 text-label transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded",
              dark ? "text-brand-muted hover:text-brand-ink" : "text-white/80 hover:text-white"
            )}
          >
            <Phone size={14} aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href="https://wa.me/923462646201"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap bg-brand-blue text-white text-label font-semibold px-4 py-2 rounded-btn hover:bg-brand-sky active:scale-[0.98] transition-[background-color,transform] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
          >
            Plan My Trip
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className={cn(
            "lg:hidden w-11 h-11 -mr-2 flex items-center justify-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-colors",
            dark ? "text-brand-ink" : "text-white"
          )}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div id="mobile-nav" className="lg:hidden bg-white border-t border-surface-grey max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <ul className="px-4 py-3 flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between min-h-[52px] text-body-lg border-b border-surface-grey transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded",
                      active ? "text-brand-blue font-semibold" : "text-brand-ink hover:text-brand-blue"
                    )}
                  >
                    {link.label}
                    {active && <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-brand-gold" />}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="px-4 pb-5">
            <a
              href="https://wa.me/923462646201"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center min-h-[52px] bg-brand-blue text-white text-label font-semibold px-4 rounded-btn hover:bg-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            >
              Plan My Trip on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
