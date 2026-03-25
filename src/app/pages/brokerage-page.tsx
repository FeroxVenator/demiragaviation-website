import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect } from "react";
import { Link } from "react-router";
import {
  TrendingUp,
  Search,
  FileCheck,
  Handshake,
  ArrowRight,
  Gauge,
  MapPin,
} from "lucide-react";
import { Button } from "../components/ui/button";

// Aircraft images from Unsplash
const brokerageHeroImage = "https://images.unsplash.com/photo-1540962351504-03099e0a754b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920";
const citationXImage = "https://images.unsplash.com/photo-1525077484157-632d43ba17f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const gulfstreamG650Image = "https://images.unsplash.com/photo-1768346564210-f382cdf18375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const global6000Image = "https://images.unsplash.com/photo-1732973599973-aa40c754a5d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const phenom300Image = "https://images.unsplash.com/photo-1660968601173-25e63b02bd71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function BrokeragePage() {
  useEffect(() => {
    document.title = "Brokerage - Demirag Aviation Website";
  }, []);

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const processRef = useRef(null);
  const isProcessInView = useInView(processRef, { once: true });

  const processSteps = [
    {
      icon: Search,
      title: "Market Analysis",
      description:
        "Comprehensive market research and aircraft valuation using proprietary data.",
    },
    {
      icon: Handshake,
      title: "Representation",
      description:
        "Expert negotiation on your behalf, protecting your interests throughout.",
    },
    {
      icon: FileCheck,
      title: "Due Diligence",
      description:
        "Thorough pre-purchase inspections, records review, and compliance verification.",
    },
    {
      icon: TrendingUp,
      title: "Closing",
      description:
        "Seamless transaction management from contract to delivery and beyond.",
    },
  ];

  const aircraft = [
    {
      id: "gulfstream-g650",
      name: "Gulfstream G650",
      category: "Ultra Long Range",
      year: "2019",
      price: "$55M",
      image: gulfstreamG650Image,
      passengers: "19",
      range: "7,000 nm",
      speed: "516 ktas",
    },
    {
      id: "global-6000",
      name: "Bombardier Global 6000",
      category: "Long Range",
      year: "2020",
      price: "$48M",
      image: global6000Image,
      passengers: "17",
      range: "6,000 nm",
      speed: "488 ktas",
    },
    {
      id: "citation-x",
      name: "Cessna Citation X",
      category: "Super Midsize",
      year: "2018",
      price: "$18M",
      image: citationXImage,
      passengers: "12",
      range: "3,460 nm",
      speed: "527 ktas",
    },
    {
      id: "phenom-300",
      name: "Embraer Phenom 300",
      category: "Light Jet",
      year: "2021",
      price: "$9.5M",
      image: phenom300Image,
      passengers: "11",
      range: "2,010 nm",
      speed: "453 ktas",
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
            src={brokerageHeroImage}
            alt="Aircraft brokerage"
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
                Aircraft Brokerage
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
              Buy or Sell with Confidence
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Expert representation for aircraft transactions. From market
              analysis to closing, we ensure optimal outcomes for buyers and
              sellers.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 border-0 h-14 px-8 text-base group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A proven methodology refined over hundreds of transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-amber-400/30 transition-all h-full">
                    <div className="mb-6">
                      <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/20">
                        <Icon className="size-8 text-amber-400" />
                      </div>
                    </div>
                    <div className="text-xs text-amber-400 mb-2 tracking-widest uppercase">
                      Step {index + 1}
                    </div>
                    <h3 className="text-xl font-serif text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Available Aircraft Section */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Available Aircraft
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Carefully curated selection of business jets ready for
              acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aircraft.map((item) => (
              <Link
                key={item.id}
                to={`/aircraft/${item.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/30 transition-all duration-500">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <div className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
                        <span className="text-xs text-white tracking-wide uppercase">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-end justify-between">
                        <div>
                          <h3 className="text-2xl font-serif text-white mb-1">
                            {item.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4">
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
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
