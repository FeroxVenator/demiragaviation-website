import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Shield, Lock, Globe, Award } from "lucide-react";

export function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Shield,
      title: "Uncompromising Safety",
      description:
        "All aircraft and operators meet the highest safety standards. Rigorous vetting and continuous monitoring ensure your complete peace of mind.",
    },
    {
      icon: Lock,
      title: "Absolute Discretion",
      description:
        "Your privacy is paramount. Confidential transactions and secure communications guaranteed.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Access to 500+ aircraft across 120 countries. Fly anywhere, anytime with seamless coordination.",
    },
    {
      icon: Award,
      title: "Cost Optimization",
      description:
        "Expert negotiation and market insights ensure competitive pricing without compromising quality.",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
            <span className="text-sm tracking-widest text-amber-400 uppercase">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            The Demirağ Difference
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Experience the pinnacle of private aviation with our commitment to
            excellence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-amber-600/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-amber-400/30 transition-all duration-300 h-full">
                    <div className="flex items-start gap-6">
                      <div className="shrink-0">
                        <div className="size-16 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/20 flex items-center justify-center">
                          <Icon className="size-8 text-amber-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-serif text-white mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-white/60 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}