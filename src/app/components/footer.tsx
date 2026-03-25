import { Link } from "react-router";
import { Plane, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import logo from "figma:asset/0f87b810b45a60861e3a006f233ddfeaa8a03440.png";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src={logo} 
                alt="Demirağ Aviation" 
                className="h-14 w-auto" 
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Premium aircraft brokerage and private jet charter solutions for
              discerning clients worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm tracking-widest text-amber-400 uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/brokerage"
                  className="text-sm text-white/70 hover:text-amber-400 transition-colors"
                >
                  Aircraft Brokerage
                </Link>
              </li>
              <li>
                <Link
                  to="/charter"
                  className="text-sm text-white/70 hover:text-amber-400 transition-colors"
                >
                  Private Jet Charter
                </Link>
              </li>
              <li>
                <Link
                  to="/brokerage"
                  className="text-sm text-white/70 hover:text-amber-400 transition-colors"
                >
                  Aviation Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/brokerage"
                  className="text-sm text-white/70 hover:text-amber-400 transition-colors"
                >
                  Aircraft Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm tracking-widest text-amber-400 uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-white/70 hover:text-amber-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-white/70 hover:text-amber-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-white/70 hover:text-amber-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-white/70 hover:text-amber-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm tracking-widest text-amber-400 uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="size-4" />
                <span>+90 532 416 40 96</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Mail className="size-4" />
                <a 
                  href="mailto:sales@demiragaviation.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  sales@demiragaviation.com
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="text-white/60 hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-amber-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-amber-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8">
          <p className="text-center text-sm text-white/40">
            © 2026 Demirağ Aviation. All rights reserved. Crafted for excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}