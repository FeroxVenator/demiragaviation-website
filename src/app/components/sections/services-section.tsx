import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import { Briefcase, Plane, LineChart, ArrowRight } from "lucide-react";

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Briefcase,
      title: "Aircraft Brokerage",
      description:
        "Buy or sell business jets with confidence. Our expert team handles every detail from valuation to closing, ensuring optimal outcomes.",
      features: [
        "Market analysis & valuation",
        "Buyer/seller representation",
        "Pre-purchase inspections",
        "Transaction management",
      ],
      link: "/brokerage",
      gradient: "from-amber-400/10 to-amber-600/10",
    },
    {
      icon: Plane,
      title: "Private Jet Charter",
      description:
        "Fly on-demand with access to 500+ aircraft worldwide. Book by the hour with guaranteed availability and premium service.",
      features: [
        "On-demand flights",
        "Global aircraft network",
        "Flexible hourly rates",
        "Personalized service",
      ],
      link: "/charter",
      gradient: "from-blue-400/10 to-blue-600/10",
    },
    {
      icon: LineChart,
      title: "Aviation Consulting",
      description:
        "Strategic guidance for aircraft ownership, operations, and revenue optimization. Maximize your aviation investment.",
      features: [
        "Ownership structuring",
        "Cost optimization",
        "Charter management",
        "Revenue generation",
      ],
      link: "/brokerage",
      gradient: "from-emerald-400/10 to-emerald-600/10",
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
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Comprehensive Aviation Solutions
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            From aircraft acquisition to charter operations, we deliver
            world-class service tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="group relative h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 blur-xl`}
                  />
                  <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-amber-400/30 transition-all duration-300">
                    <div className="mb-6">
                      <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/20">
                        <Icon className="size-8 text-amber-400" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-serif text-white mb-4">
                      {service.title}
                    </h3>

                    <p className="text-white/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-white/60"
                        >
                          <div className="size-1.5 rounded-full bg-amber-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 text-amber-400 hover:gap-3 transition-all group/link"
                    >
                      <span className="text-sm tracking-wide uppercase">
                        Learn More
                      </span>
                      <ArrowRight className="size-4" />
                    </Link>
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
