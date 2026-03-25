import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={ref} className="relative py-32 bg-zinc-950 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1723020495814-dc3f52a67ad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBqZXQlMjBuaWdodCUyMHNreXxlbnwxfHx8fDE3NzM4MjA1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Corporate jet"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
              <span className="text-sm tracking-widest text-amber-400 uppercase">
                Get Started
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              Fly Private Today
            </h2>

            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Share your travel requirements and our team will craft the perfect
              solution. From charter flights to aircraft acquisition, we're here
              to elevate your journey.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-amber-400" />
                <span className="text-white/60">
                  Response within 2 hours
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-amber-400" />
                <span className="text-white/60">
                  Personalized aircraft recommendations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-amber-400" />
                <span className="text-white/60">
                  Transparent pricing, no hidden fees
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-white/70 mb-2"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-amber-400/50"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-white/70 mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-amber-400/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="destination"
                      className="block text-sm text-white/70 mb-2"
                    >
                      Destination
                    </label>
                    <Input
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-amber-400/50"
                      placeholder="New York to London"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm text-white/70 mb-2"
                    >
                      Preferred Date
                    </label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-amber-400/50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-white/70 mb-2"
                  >
                    Additional Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-amber-400/50 resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 border-0 h-14 text-base group"
                >
                  Submit Request
                  <Send className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-white/40 text-center">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
