import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect } from "react";
import { Link } from "react-router";
import {
  Clock,
  Globe,
  Shield,
  Star,
  ArrowRight,
  Users,
  Gauge,
  MapPin,
  DollarSign,
} from "lucide-react";
import { Button } from "../components/ui/button";

export function CharterPage() {
  useEffect(() => {
    document.title = "Charter - Demirag Aviation Website";
  }, []);

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const benefits = [
    {
      icon: Clock,
      title: "On-Demand Access",
      description:
        "Book flights with as little as 4 hours notice. Fly when you need to, not when scheduled.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description:
        "Access to 500+ aircraft across 120 countries. Seamless connections worldwide.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "All operators meet ARG/US Platinum and Wyvern safety standards. Your security is paramount.",
    },
    {
      icon: Star,
      title: "Premium Service",
      description:
        "Personalized catering, ground transportation, and concierge services included.",
    },
  ];

  const categories = [
    {
      name: "Light Jets",
      description: "Perfect for short to mid-range flights, 6-8 passengers",
      hourlyRate: "$3,500 - $5,500",
      range: "1,500-2,500 nm",
      image:
        "https://images.unsplash.com/photo-1660968601173-25e63b02bd71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWJyYWVyJTIwcGhlbm9tJTIwcHJpdmF0ZSUyMGFpcmNyYWZ0fGVufDF8fHx8MTc3MzgyMDUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      examples: "Citation CJ3, Phenom 300, Learjet 75",
    },
    {
      name: "Midsize Jets",
      description: "Comfortable transcontinental flights, 8-10 passengers",
      hourlyRate: "$5,500 - $8,500",
      range: "2,500-3,500 nm",
      image:
        "https://images.unsplash.com/photo-1525077484157-632d43ba17f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXNzbmElMjBjaXRhdGlvbiUyMGJ1c2luZXNzJTIwamV0fGVufDF8fHx8MTc3MzgyMDUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      examples: "Citation X, Hawker 900XP, Learjet 60",
    },
    {
      name: "Heavy Jets",
      description: "Long-range international travel, 12-16 passengers",
      hourlyRate: "$9,000 - $15,000",
      range: "5,000-7,500 nm",
      image:
        "https://images.unsplash.com/photo-1732973599973-aa40c754a5d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib21iYXJkaWVyJTIwZ2xvYmFsJTIwcHJpdmF0ZSUyMGpldHxlbnwxfHx8fDE3NzM4MjA1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      examples: "Gulfstream G650, Global 6000, Falcon 7X",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1764547168268-1c8b531bce9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwYXZpYXRpb24lMjBjb2NrcGl0JTIwcGlsb3R8ZW58MXx8fHwxNzczODIwNTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Private jet charter"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
              <span className="text-sm tracking-widest text-amber-400 uppercase">
                Private Jet Charter
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
              Fly On Your Terms
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Book private jets by the hour with guaranteed availability.
              Experience the ultimate in travel flexibility and luxury.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 border-0 h-14 px-8 text-base group"
              >
                Request a Quote
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Why Charter with Demirağ
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Unmatched service, safety, and global reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="relative">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-amber-400/30 transition-all h-full">
                    <div className="mb-6">
                      <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/20">
                        <Icon className="size-8 text-amber-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-serif text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Aircraft Categories */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Choose Your Aircraft
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              From light jets to ultra-long-range aircraft, find the perfect
              match for your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/30 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-serif text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-white/70 mb-4">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="size-4 text-amber-400" />
                      <span className="text-xs text-white/50 uppercase">
                        Hourly Rate
                      </span>
                    </div>
                    <span className="text-sm text-white">
                      {category.hourlyRate}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4 text-amber-400" />
                      <span className="text-xs text-white/50 uppercase">
                        Range
                      </span>
                    </div>
                    <span className="text-sm text-white">{category.range}</span>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-white/40 uppercase mb-2">
                      Popular Models
                    </p>
                    <p className="text-sm text-white/70">{category.examples}</p>
                  </div>

                  <Link to="/contact">
                    <Button
                      variant="outline"
                      className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 group/btn"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 size-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Simple Booking Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex size-20 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 border-2 border-amber-400 items-center justify-center mb-6">
                <span className="text-2xl font-serif text-amber-400">1</span>
              </div>
              <h3 className="text-xl font-serif text-white mb-3">
                Request Quote
              </h3>
              <p className="text-white/60">
                Share your route, dates, and passenger count
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex size-20 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 border-2 border-amber-400 items-center justify-center mb-6">
                <span className="text-2xl font-serif text-amber-400">2</span>
              </div>
              <h3 className="text-xl font-serif text-white mb-3">
                Review Options
              </h3>
              <p className="text-white/60">
                Receive aircraft options with transparent pricing
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex size-20 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 border-2 border-amber-400 items-center justify-center mb-6">
                <span className="text-2xl font-serif text-amber-400">3</span>
              </div>
              <h3 className="text-xl font-serif text-white mb-3">
                Confirm & Fly
              </h3>
              <p className="text-white/60">
                Finalize details and prepare for departure
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}