import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/button";
import heroImage from "figma:asset/d45ce8bb33909d430f4ebb82e7e2f71e8a143c8a.png";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Private jet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
          >
            <span className="block text-white font-serif">Own Time.</span>
            <span className="block text-white font-serif">Own Sky.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Private Jet Brokerage & Air Taxi Solutions
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 border-0 h-14 px-8 text-base group"
              >
                Request a Flight
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/brokerage">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 h-14 px-8 text-base"
              >
                Explore Aircraft
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto mt-20 pt-12 border-t border-white/10"
          >
            <div>
              <div className="text-3xl md:text-5xl font-serif text-amber-400 mb-2">
                120+
              </div>
              <div className="text-sm text-white/60 tracking-wide uppercase">
                Countries
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-serif text-amber-400 mb-2">
                50k+
              </div>
              <div className="text-sm text-white/60 tracking-wide uppercase">
                Flight Hours
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-serif text-amber-400 mb-2">
                500+
              </div>
              <div className="text-sm text-white/60 tracking-wide uppercase">
                Aircraft Access
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0"
          />
        </div>
      </motion.div>
    </section>
  );
}