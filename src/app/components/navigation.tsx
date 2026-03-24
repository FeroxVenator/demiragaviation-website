import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Plane } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import logo from "figma:asset/0f87b810b45a60861e3a006f233ddfeaa8a03440.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/brokerage", label: "Aircraft Brokerage" },
    { path: "/charter", label: "Charter Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src={logo}
                alt="Demirağ Aviation"
                className="h-16 w-auto transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide transition-colors hover:text-amber-400 ${
                    location.pathname === link.path
                      ? "text-amber-400"
                      : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 border-0"
                >
                  Request a Flight
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-black/95 backdrop-blur-lg"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl tracking-wide transition-colors hover:text-amber-400 ${
                    location.pathname === link.path
                      ? "text-amber-400"
                      : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 border-0 mt-4">
                  Request a Flight
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-6 right-6 z-40 lg:hidden">
        <Link to="/contact" className="block">
          <Button className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 border-0 h-14 text-lg shadow-2xl shadow-amber-400/50">
            Request Flight
          </Button>
        </Link>
      </div>
    </>
  );
}