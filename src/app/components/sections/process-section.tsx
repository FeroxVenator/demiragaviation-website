import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MessageSquare, Search, CheckCircle } from "lucide-react";

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Request",
      description:
        "Share your requirements, destination, and preferred travel dates with our team.",
    },
    {
      icon: Search,
      number: "02",
      title: "Match Aircraft",
      description:
        "We analyze availability, optimize routing, and present the best aircraft options.",
    },
    {
      icon: CheckCircle,
      number: "03",
      title: "Confirm & Fly",
      description:
        "Review your quote, finalize details, and prepare for a seamless journey.",
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
              How It Works
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Seamless from Start to Finish
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Three simple steps to your private aviation experience.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-px">
            <div className="max-w-4xl mx-auto relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl" />
                    <div className="relative size-24 rounded-full bg-gradient-to-br from-amber-400/10 to-amber-600/10 border border-amber-400/30 flex items-center justify-center">
                      <Icon className="size-10 text-amber-400" />
                    </div>
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 size-10 rounded-full bg-black border-2 border-amber-400 flex items-center justify-center">
                      <span className="text-sm font-serif text-amber-400">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
