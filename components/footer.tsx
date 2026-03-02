import { Hammer, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-warm-border bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Hammer className="h-6 w-6 text-sand" />
              <span className="text-lg font-bold">Rust Nail Contracting</span>
            </div>
            <p className="mt-3 text-sm text-white/60">
              Quality craftsmanship for Carrollton &amp; the Greater Dallas
              area. Built on integrity, finished with pride.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-sand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="h-4 w-4 text-sand" />
                <a href="tel:4693465900" className="hover:text-sand">
                  (469) 346-5900
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="h-4 w-4 text-sand" />
                <a
                  href="mailto:rustynailcontractors@gmail.com"
                  className="hover:text-sand"
                >
                  rustynailcontractors@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-sand" />
                Carrollton &amp; Greater Dallas, TX
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} Rust Nail Contracting. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
