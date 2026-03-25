import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

export function ContactPage() {
  useEffect(() => {
    document.title = "Contact - Demirag Aviation Website";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1723020495814-dc3f52a67ad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBqZXQlMjBuaWdodCUyMHNreXxlbnwxfHx8fDE3NzM4MjA1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
              <span className="text-sm tracking-widest text-amber-400 uppercase">
                Contact Us
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Let's Start Your Journey
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Our team is ready to assist with your private aviation needs.
              Reach out today for personalized service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-serif text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Whether you're looking to charter a flight, buy or sell an
                  aircraft, or explore ownership opportunities, we're here to
                  help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/20">
                    <Phone className="size-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 uppercase mb-1">
                      Phone
                    </div>
                    <div className="text-white">+90 532 416 40 96</div>
                    <div className="text-white/60 text-sm mt-1">
                      24/7 Operations Center
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/20">
                    <Mail className="size-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 uppercase mb-1">
                      Email
                    </div>
                    <div className="text-white">sales@demiragaviation.com</div>
                    <div className="text-white/60 text-sm mt-1">
                      Response within 2 hours
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/20">
                    <MapPin className="size-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 uppercase mb-1">
                      Headquarters
                    </div>
                    <div className="text-white">Ankara, Turkey</div>
                    <div className="text-white/60 text-sm mt-1">
                      Global operations
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/20">
                    <Clock className="size-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 uppercase mb-1">
                      Hours
                    </div>
                    <div className="text-white">24/7 Availability</div>
                    <div className="text-white/60 text-sm mt-1">
                      Always ready to serve
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-lg font-serif text-white mb-4">
                  Why Choose Demirağ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-white/60">
                    <div className="size-1.5 rounded-full bg-amber-400" />
                    <span>Immediate response guarantee</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/60">
                    <div className="size-1.5 rounded-full bg-amber-400" />
                    <span>Personalized service</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/60">
                    <div className="size-1.5 rounded-full bg-amber-400" />
                    <span>Transparent pricing</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/60">
                    <div className="size-1.5 rounded-full bg-amber-400" />
                    <span>Global expertise</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-serif text-white mb-6">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="name"
                        className="block text-sm text-white/70 mb-2"
                      >
                        Full Name *
                      </Label>
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
                      <Label
                        htmlFor="email"
                        className="block text-sm text-white/70 mb-2"
                      >
                        Email Address *
                      </Label>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="phone"
                        className="block text-sm text-white/70 mb-2"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-amber-400/50"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="company"
                        className="block text-sm text-white/70 mb-2"
                      >
                        Company (Optional)
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-amber-400/50"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="service"
                      className="block text-sm text-white/70 mb-2"
                    >
                      Service Interest *
                    </Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white focus:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
                    >
                      <option value="" className="bg-black">
                        Select a service
                      </option>
                      <option value="charter" className="bg-black">
                        Private Jet Charter
                      </option>
                      <option value="buy" className="bg-black">
                        Buy an Aircraft
                      </option>
                      <option value="sell" className="bg-black">
                        Sell an Aircraft
                      </option>
                      <option value="consulting" className="bg-black">
                        Aviation Consulting
                      </option>
                      <option value="management" className="bg-black">
                        Aircraft Management
                      </option>
                      <option value="other" className="bg-black">
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="block text-sm text-white/70 mb-2"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-amber-400/50 resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 border-0 h-14 text-base group"
                  >
                    Send Message
                    <Send className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-white/40 text-center">
                    By submitting this form, you agree to our privacy policy.
                    Your information is confidential and will never be shared.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}