import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">NAVYA</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Weaving elegance, one fabric at a time. Premium textiles and
              fashion house from Surat, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-accent transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="hover:text-accent transition-colors"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  Navya Fashion House
                  <br />
                  Surat, Gujarat 395006
                  <br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-accent transition-colors"
                >
                  +91 76000 06036
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:taraklunagariya@navyafashionn.in"
                  className="hover:text-accent transition-colors break-all text-xs sm:text-sm"
                >
                  taraklunagariya@navyafashionn.in
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://instagram.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-primary transition-all flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-primary transition-all flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>
              Copyright © {currentYear} Navya Fashion. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
