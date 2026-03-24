import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { UserCircle, Building2, DollarSign, TrendingDown, ArrowRight } from "lucide-react";

export function OwnershipAdvantageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-zinc-950 to-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1768346564233-d71f37bd19b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwamV0JTIwaW50ZXJpb3IlMjBsdXh1cnklMjBjYWJpbnxlbnwxfHx8fDE3NzM3OTQyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Private jet interior"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
            <span className="text-sm tracking-widest text-amber-400 uppercase">
              Aircraft Ownership Advantage
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Turn Your Aircraft Into a Revenue Asset
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Offset ownership costs by generating charter income when you're not
            flying. We manage everything while you enjoy the benefits.
          </p>
        </motion.div>

        {/* Visual Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-between gap-8 mb-16">
            {/* Step 1: Owner */}
            <div className="flex-1">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-amber-400/30 transition-all">
                <div className="flex items-center justify-center mb-6">
                  <div className="size-20 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/30 flex items-center justify-center">
                    <UserCircle className="size-10 text-amber-400" />
                  </div>
                </div>
                <h3 className="text-xl font-serif text-white text-center mb-2">
                  Aircraft Owner
                </h3>
                <p className="text-sm text-white/60 text-center">
                  You own the aircraft
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center">
              <ArrowRight className="size-8 text-amber-400" />
            </div>

            {/* Step 2: Managed by Demirağ */}
            <div className="flex-1">
              <div className="bg-gradient-to-br from-amber-400/10 to-amber-600/10 backdrop-blur-sm border-2 border-amber-400/30 rounded-2xl p-8 shadow-2xl shadow-amber-400/20">
                <div className="flex items-center justify-center mb-6">
                  <div className="size-20 rounded-full bg-gradient-to-br from-amber-400/30 to-amber-600/30 border-2 border-amber-400 flex items-center justify-center">
                    <Building2 className="size-10 text-amber-400" />
                  </div>
                </div>
                <h3 className="text-xl font-serif text-white text-center mb-2">
                  Managed by Demirağ
                </h3>
                <ul className="text-sm text-white/70 space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-amber-400" />
                    Charter operations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-amber-400" />
                    Maintenance coordination
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-amber-400" />
                    Client acquisition
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-amber-400" />
                    Flight scheduling
                  </li>
                </ul>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center">
              <ArrowRight className="size-8 text-amber-400" />
            </div>

            {/* Step 3: Charter Income */}
            <div className="flex-1">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-amber-400/30 transition-all">
                <div className="flex items-center justify-center mb-6">
                  <div className="size-20 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 border border-emerald-400/30 flex items-center justify-center">
                    <DollarSign className="size-10 text-emerald-400" />
                  </div>
                </div>
                <h3 className="text-xl font-serif text-white text-center mb-2">
                  Charter Income
                </h3>
                <p className="text-sm text-white/60 text-center">
                  Revenue generated
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center">
              <ArrowRight className="size-8 text-amber-400" />
            </div>

            {/* Step 4: Cost Optimization */}
            <div className="flex-1">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-amber-400/30 transition-all">
                <div className="flex items-center justify-center mb-6">
                  <div className="size-20 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 border border-blue-400/30 flex items-center justify-center">
                    <TrendingDown className="size-10 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-serif text-white text-center mb-2">
                  Cost Optimization
                </h3>
                <p className="text-sm text-white/60 text-center">
                  Reduced ownership costs
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-6 mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="size-16 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/30 flex items-center justify-center shrink-0">
                  <UserCircle className="size-8 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-white">
                    Aircraft Owner
                  </h3>
                  <p className="text-sm text-white/60">You own the aircraft</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="size-6 text-amber-400 rotate-90" />
            </div>

            <div className="bg-gradient-to-br from-amber-400/10 to-amber-600/10 backdrop-blur-sm border-2 border-amber-400/30 rounded-2xl p-6 shadow-xl shadow-amber-400/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="size-16 rounded-full bg-gradient-to-br from-amber-400/30 to-amber-600/30 border-2 border-amber-400 flex items-center justify-center shrink-0">
                  <Building2 className="size-8 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-white mb-2">
                    Managed by Demirağ
                  </h3>
                  <ul className="text-sm text-white/70 space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="size-1.5 rounded-full bg-amber-400" />
                      Charter operations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="size-1.5 rounded-full bg-amber-400" />
                      Maintenance coordination
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="size-1.5 rounded-full bg-amber-400" />
                      Client acquisition
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="size-6 text-amber-400 rotate-90" />
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="size-16 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
                  <DollarSign className="size-8 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-white">
                    Charter Income
                  </h3>
                  <p className="text-sm text-white/60">Revenue generated</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="size-6 text-amber-400 rotate-90" />
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="size-16 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                  <TrendingDown className="size-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-white">
                    Cost Optimization
                  </h3>
                  <p className="text-sm text-white/60">
                    Reduced ownership costs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-serif text-amber-400 mb-2">
              30-50%
            </div>
            <div className="text-sm text-white/80 mb-1">Cost Reduction</div>
            <div className="text-xs text-white/50">
              Average annual operating cost offset
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-serif text-amber-400 mb-2">
              24/7
            </div>
            <div className="text-sm text-white/80 mb-1">Full Management</div>
            <div className="text-xs text-white/50">
              We handle all operational details
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-serif text-amber-400 mb-2">100%</div>
            <div className="text-sm text-white/80 mb-1">Priority Access</div>
            <div className="text-xs text-white/50">
              Your aircraft when you need it
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
