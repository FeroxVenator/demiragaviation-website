import { motion } from "motion/react";
import { useParams, Link } from "react-router";
import { useEffect } from "react";
import {
  Gauge,
  MapPin,
  Plane,
  ArrowLeft,
  ArrowRight,
  Shield,
  Award,
} from "lucide-react";
import { Button } from "../components/ui/button";
import citationXImage from "asset/a69aeabd9c395ff20e5a07888aa47e702e52741a.png";
import gulfstreamG650Image from "asset/47d34e0761766bb1f18b278431cd1f1d9e6e04e5.png";
import global6000Image from "asset/47abde9fae8d116149a0dddc8a8744b8318b3012.png";
import phenom300Image from "asset/75417531ab1e57901efa5b9d7076ca88872154c8.png";

export function AircraftDetailPage() {
  const { id } = useParams();

  useEffect(() => {
    document.title = "Aircraft Details - Demirag Aviation Website";
  }, []);

  // Mock data - in a real app, this would come from an API
  const aircraftData: Record<
    string,
    {
      name: string;
      category: string;
      mainImage: string;
      interiorImage: string;
      passengers: string;
      range: string;
      speed: string;
      cruiseAltitude: string;
      baggage: string;
      cabin: string;
      description: string;
      features: string[];
      specifications: { label: string; value: string }[];
    }
  > = {
    "gulfstream-g650": {
      name: "Gulfstream G650",
      category: "Ultra Long Range",
      mainImage: gulfstreamG650Image,
      interiorImage:
        "https://images.unsplash.com/photo-1768346564210-f382cdf18375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwamV0JTIwaW50ZXJpb3IlMjBsdXh1cnklMjBjYWJpbiUyMHNlYXRzfGVufDF8fHx8MTc3NDM1ODMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      passengers: "19",
      range: "7,000 nm",
      speed: "516 ktas",
      cruiseAltitude: "51,000 ft",
      baggage: "195 cu ft",
      cabin: "53'6\" L × 8'6\" W × 6'5\" H",
      description:
        "The Gulfstream G650 represents the pinnacle of business aviation. With its exceptional range, speed, and luxury appointments, this aircraft redefines intercontinental travel. Capable of connecting virtually any two cities nonstop, the G650 features a meticulously crafted cabin with multiple living areas, advanced entertainment systems, and industry-leading quiet performance.",
      features: [
        "Premium executive interior",
        "Advanced flight deck",
        "High-speed internet connectivity",
        "Multiple living areas",
        "Full galley with premium appliances",
        "Dual lavatory configuration",
        "Enhanced vision systems",
        "Complete maintenance records",
      ],
      specifications: [
        { label: "Engines", value: "Rolls-Royce turbofan" },
        { label: "Avionics", value: "Advanced flight deck" },
        { label: "Interior", value: "Custom executive layout" },
      ],
    },
    "global-6000": {
      name: "Bombardier Global 6000",
      category: "Long Range",
      mainImage: global6000Image,
      interiorImage:
        "https://images.unsplash.com/photo-1768346564233-d71f37bd19b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGpldCUyMGludGVyaW9yJTIwZXhlY3V0aXZlJTIwY2FiaW58ZW58MXx8fHwxNzc0MzU4MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      passengers: "17",
      range: "6,000 nm",
      speed: "488 ktas",
      cruiseAltitude: "51,000 ft",
      baggage: "195 cu ft",
      cabin: "48'4\" L × 8'2\" W × 6'2\" H",
      description:
        "The Bombardier Global 6000 combines spacious cabin comfort with impressive range and performance. This flagship aircraft offers a quiet, refined environment with customizable living spaces and cutting-edge technology.",
      features: [
        "Modern flight deck",
        "High-speed internet connectivity",
        "Multiple cabin zones",
        "Full galley configuration",
        "Entertainment system throughout",
        "Enhanced baggage accessibility",
        "Low cabin altitude",
        "Complete maintenance tracking",
      ],
      specifications: [
        { label: "Engines", value: "Rolls-Royce turbofan" },
        { label: "Avionics", value: "Advanced flight deck" },
        { label: "Interior", value: "Multi-zone executive layout" },
      ],
    },
    "citation-x": {
      name: "Cessna Citation X",
      category: "Super Midsize",
      mainImage: citationXImage,
      interiorImage:
        "https://images.unsplash.com/photo-1772354967311-167285eaa5f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwYWlyY3JhZnQlMjBpbnRlcmlvciUyMHByZW1pdW0lMjBzZWF0c3xlbnwxfHx8fDE3NzQzNTgzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      passengers: "12",
      range: "3,460 nm",
      speed: "527 ktas",
      cruiseAltitude: "51,000 ft",
      baggage: "82 cu ft",
      cabin: "27'8\" L × 5'6\" W × 5'8\" H",
      description:
        "The fastest civilian aircraft in its class, the Citation X delivers unmatched speed with exceptional comfort. Perfect for transcontinental flights where time is of the essence.",
      features: [
        "Advanced avionics suite",
        "High-speed internet connectivity",
        "Double club seating",
        "Refreshment center",
        "Entertainment system",
        "In-flight accessible baggage",
        "Premium interior",
        "Comprehensive maintenance program",
      ],
      specifications: [
        { label: "Engines", value: "Rolls-Royce turbofan" },
        { label: "Avionics", value: "Advanced flight deck" },
        { label: "Interior", value: "Executive club layout" },
      ],
    },
    "phenom-300": {
      name: "Embraer Phenom 300",
      category: "Light Jet",
      mainImage: phenom300Image,
      interiorImage:
        "https://images.unsplash.com/photo-1768346564233-d71f37bd19b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXQlMjBjYWJpbiUyMGludGVyaW9yfGVufDF8fHx8MTc3NDM1ODMxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      passengers: "11",
      range: "2,010 nm",
      speed: "453 ktas",
      cruiseAltitude: "45,000 ft",
      baggage: "84 cu ft",
      cabin: "17'2\" L × 5'1\" W × 4'11\" H",
      description:
        "The best-selling light jet globally, the Phenom 300 offers exceptional value and performance. With its spacious cabin and advanced avionics, it's perfect for regional and short-haul transcontinental flights.",
      features: [
        "Modern flight deck",
        "Spacious oval cabin design",
        "Class-leading baggage capacity",
        "Belted lavatory",
        "Entertainment system",
        "High-speed internet connectivity",
        "Premium condition",
        "Factory support coverage",
      ],
      specifications: [
        { label: "Engines", value: "Pratt & Whitney turbofan" },
        { label: "Avionics", value: "Advanced touch-screen flight deck" },
        { label: "Interior", value: "Executive club layout" },
      ],
    },
  };

  const aircraft = aircraftData[id || ""] || aircraftData["gulfstream-g650"];

  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <Link
          to="/brokerage"
          className="inline-flex items-center gap-2 text-white/60 hover:text-amber-400 transition-colors"
        >
          <ArrowLeft className="size-4" />
          <span className="text-sm">Back to Aircraft</span>
        </Link>
      </div>

      {/* Hero Images */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8"
          >
            <img
              src={aircraft.mainImage}
              alt={aircraft.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Aircraft Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20">
                    <span className="text-xs text-amber-400 tracking-wide uppercase">
                      {aircraft.category}
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
                  {aircraft.name}
                </h1>

                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2 text-white/60">
                    <Shield className="size-4" />
                    <span>Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Award className="size-4" />
                    <span>Premium Condition</span>
                  </div>
                </div>

                <p className="text-lg text-white/70 leading-relaxed">
                  {aircraft.description}
                </p>
              </div>

              {/* Key Specifications */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-serif text-white mb-6">
                  Key Specifications
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-5 text-amber-400 mt-1" />
                    <div>
                      <div className="text-xs text-white/50 uppercase mb-1">
                        Range
                      </div>
                      <div className="text-lg text-white">{aircraft.range}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gauge className="size-5 text-amber-400 mt-1" />
                    <div>
                      <div className="text-xs text-white/50 uppercase mb-1">
                        Speed
                      </div>
                      <div className="text-lg text-white">{aircraft.speed}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Plane className="size-5 text-amber-400 mt-1" />
                    <div>
                      <div className="text-xs text-white/50 uppercase mb-1">
                        Cruise Altitude
                      </div>
                      <div className="text-lg text-white">
                        {aircraft.cruiseAltitude}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-5 text-amber-400 mt-1 flex items-center justify-center">
                      <div className="size-4 border-2 border-amber-400 rounded" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 uppercase mb-1">
                        Baggage
                      </div>
                      <div className="text-lg text-white">
                        {aircraft.baggage}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-5 text-amber-400 mt-1 flex items-center justify-center">
                      <div className="size-4 border-2 border-amber-400" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 uppercase mb-1">
                        Cabin
                      </div>
                      <div className="text-sm text-white">{aircraft.cabin}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-serif text-white mb-6">
                  Features & Equipment
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {aircraft.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <div className="size-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span className="text-white/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Specifications */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-serif text-white mb-6">
                  Detailed Specifications
                </h2>
                <div className="space-y-4">
                  {aircraft.specifications.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between pb-4 border-b border-white/5 last:border-0"
                    >
                      <span className="text-white/60">{spec.label}</span>
                      <span className="text-white">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-amber-400/10 to-amber-600/10 backdrop-blur-sm border-2 border-amber-400/30 rounded-2xl p-8 shadow-2xl shadow-amber-400/20">
                  <div className="mb-8">
                    <h3 className="text-2xl font-serif text-white mb-4">
                      Aircraft Information
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Learn more about this exceptional aircraft and how it can serve your aviation needs.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <Link to="/contact">
                      <Button className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 border-0 h-14 text-base group">
                        Request Information
                        <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button
                        variant="outline"
                        className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 h-12"
                      >
                        Schedule Consultation
                      </Button>
                    </Link>
                  </div>

                  <div className="space-y-4 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Shield className="size-4 text-amber-400" />
                      <span>Detailed aircraft inspection available</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Award className="size-4 text-amber-400" />
                      <span>Complete maintenance records</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Plane className="size-4 text-amber-400" />
                      <span>Expert aviation consulting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
