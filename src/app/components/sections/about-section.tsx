import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Globe, Shield, Users, TrendingUp } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    {
      icon: Globe,
      value: "120+",
      label: "Global Coverage",
      description: "Countries served worldwide",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Safety Record",
      description: "Certified operators only",
    },
    {
      icon: Users,
      value: "5,000+",
      label: "Elite Clients",
      description: "Trusted partnerships",
    },
    {
      icon: TrendingUp,
      value: "$2B+",
      label: "Transactions",
      description: "Aircraft deals closed",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
              <span className="text-sm tracking-widest text-amber-400 uppercase">
                About Demirağ Aviation
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Elevating Private Aviation to New Heights
            </h2>

            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              For over a decade, Demirağ Aviation has been the trusted partner
              for ultra-high-net-worth individuals and corporations seeking
              unparalleled private aviation solutions.
            </p>

            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Our expertise spans aircraft brokerage, charter operations, and
              comprehensive aviation consulting. We deliver discretion,
              precision, and excellence in every transaction and flight.
            </p>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-400/30 transition-all duration-300 hover:bg-white/[0.07]">
                    <Icon className="size-8 text-amber-400 mb-4" />
                    <div className="text-3xl font-serif text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/80 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-white/50">
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
    </section>
  );
}