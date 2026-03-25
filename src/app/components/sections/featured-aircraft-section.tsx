import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import { Gauge, MapPin, ArrowRight } from "lucide-react";
import citationXImage from "figma:asset/a69aeabd9c395ff20e5a07888aa47e702e52741a.png";
import gulfstreamG650Image from "figma:asset/47d34e0761766bb1f18b278431cd1f1d9e6e04e5.png";
import global6000Image from "figma:asset/47abde9fae8d116149a0dddc8a8744b8318b3012.png";
import phenom300Image from "figma:asset/75417531ab1e57901efa5b9d7076ca88872154c8.png";

export function FeaturedAircraftSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const aircraft = [
    {
      id: "gulfstream-g650",
      name: "Gulfstream G650",
      category: "Ultra Long Range",
      image: gulfstreamG650Image,
      passengers: "19",
      range: "7,000 nm",
      speed: "516 ktas",
    },
    {
      id: "global-6000",
      name: "Bombardier Global 6000",
      category: "Long Range",
      image: global6000Image,
      passengers: "17",
      range: "6,000 nm",
      speed: "488 ktas",
    },
    {
      id: "citation-x",
      name: "Cessna Citation X",
      category: "Super Midsize",
      image: citationXImage,
      passengers: "12",
      range: "3,460 nm",
      speed: "527 ktas",
    },
    {
      id: "phenom-300",
      name: "Embraer Phenom 300",
      category: "Light Jet",
      image: phenom300Image,
      passengers: "11",
      range: "2,010 nm",
      speed: "453 ktas",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-zinc-950">
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
              Featured Aircraft
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Access to World-Class Fleet
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            From light jets to ultra-long-range aircraft, discover the perfect
            solution for your journey.
          </p>
        </motion.div>

        {/* Aircraft Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aircraft.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Link to={`/aircraft/${item.id}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/30 transition-all duration-500">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
                        <span className="text-xs text-white tracking-wide uppercase">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="size-4 text-amber-400" />
                        <div>
                          <div className="text-xs text-white/50 uppercase">
                            Range
                          </div>
                          <div className="text-sm text-white">{item.range}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gauge className="size-4 text-amber-400" />
                        <div>
                          <div className="text-xs text-white/50 uppercase">
                            Speed
                          </div>
                          <div className="text-sm text-white">{item.speed}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-amber-400 text-sm tracking-wide uppercase group-hover:gap-3 transition-all flex items-center gap-2">
                        View Details
                        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/brokerage"
            className="inline-flex items-center gap-2 text-amber-400 hover:gap-3 transition-all text-lg group"
          >
            <span className="tracking-wide uppercase">View All Aircraft</span>
            <ArrowRight className="size-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}