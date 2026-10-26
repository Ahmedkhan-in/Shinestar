import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const footerLinks = {
  tours: [
    { href: "/packages", label: "International Tours" },
    { href: "/packages/thailand-7-days", label: "Thailand" },
    { href: "/packages/malaysia-8-days", label: "Malaysia" },
    { href: "/packages/dubai-5-days", label: "Dubai" },
    { href: "/packages/singapore-5-days", label: "Singapore" },
    { href: "/packages/sri-lanka-6-days", label: "Sri Lanka" },
  ],
  umrah: [
    { href: "/umrah", label: "Umrah Packages" },
    { href: "/umrah/umrah-7-days", label: "Umrah 7 Days" },
    { href: "/umrah/umrah-10-days", label: "Umrah 10 Days" },
    { href: "/umrah/umrah-14-days", label: "Umrah 14 Days" },
  ],
  honeymoon: [
    { href: "/honeymoon", label: "Honeymoon Packages" },
    { href: "/honeymoon/maldives-7-days", label: "Maldives" },
    { href: "/honeymoon/bali-honeymoon-6-days", label: "Bali" },
    { href: "/honeymoon/turkey-honeymoon-8-days", label: "Turkey" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-footer text-white">
      {/* Ground photograph */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80&fit=crop"
          alt="Aircraft in flight above clouds at sunset"
          fill
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-footer/60" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <p className="font-serif text-display-md text-white/90 font-light">
              Every journey begins with a question.
            </p>
            <p className="mt-2 text-body-md text-white/60">Ask us yours on WhatsApp.</p>
            <a
              href="https://wa.me/923462646201"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-brand-gold text-brand-ink text-label font-semibold px-6 py-3 rounded-btn hover:bg-brand-champagne transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-footer"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="max-w-content mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-xl font-light text-white">
              Shine Star <span className="font-sans font-semibold text-brand-light">Travel</span>
            </p>
            <p className="mt-3 text-body-sm text-white/60 leading-relaxed">
              Licensed travel agency based in Karachi. Specialists in Umrah, international tours, and honeymoon packages since 2018.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Tours */}
          <div>
            <p className="text-label text-white/40 mb-4">International</p>
            <ul className="space-y-2">
              {footerLinks.tours.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Umrah */}
          <div>
            <p className="text-label text-white/40 mb-4">Umrah & Hajj</p>
            <ul className="space-y-2">
              {footerLinks.umrah.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-label text-white/40 mb-4 mt-6">Honeymoon</p>
            <ul className="space-y-2">
              {footerLinks.honeymoon.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-label text-white/40 mb-4">Contact</p>
            <ul className="space-y-4">
              <li className="flex gap-2 text-body-sm text-white/70">
                <MapPin size={14} className="mt-0.5 shrink-0 text-brand-light" />
                <span>
                  {/* TODO: Replace with real office address */}
                  Shop 12, Travel Plaza, Shahrah-e-Faisal, Karachi, Pakistan
                </span>
              </li>
              <li>
                <a
                  href="https://wa.me/923462646201"
                  className="flex gap-2 text-body-sm text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                >
                  <Phone size={14} className="mt-0.5 shrink-0 text-brand-light" />
                  {/* TODO: Replace with real WhatsApp number */}
                  +92 346 2646201
                </a>
              </li>
              <li className="flex gap-2 text-body-sm text-white/70">
                <Clock size={14} className="mt-0.5 shrink-0 text-brand-light" />
                <span>Mon–Sat 9am–8pm · Sun 11am–5pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-white/40">
            © {new Date().getFullYear()} Shine Star Travel & Tours. All rights reserved.
          </p>
          <p className="text-body-sm text-white/40">
            Licensed travel agency · Karachi, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
