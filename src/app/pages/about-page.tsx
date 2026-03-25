import { useEffect } from "react";
import { motion } from "motion/react";

export function AboutPage() {
  useEffect(() => {
    document.title = "About Us - Demirag Aviation Website";
  }, []);

  return (
    <div className="pt-20 bg-black">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
              <span className="text-sm tracking-widest text-amber-400 uppercase">
                About Us
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
              Excellence in Aviation
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Demirağ Aviation has been serving discerning clients with
              unparalleled expertise in aircraft acquisition and private charter
              services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-serif text-white mb-6">Our Story</h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              Founded with a commitment to excellence, Demirağ Aviation has
              established itself as a trusted partner in the private aviation
              industry. Our team combines decades of experience with an
              unwavering dedication to client satisfaction.
            </p>

            <h2 className="text-3xl font-serif text-white mb-6 mt-12">
              Our Mission
            </h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              We strive to provide exceptional aviation services that exceed
              expectations. Whether facilitating aircraft transactions or
              delivering seamless charter experiences, we approach every
              engagement with professionalism and discretion.
            </p>

            <h2 className="text-3xl font-serif text-white mb-6 mt-12">
              Why Choose Us
            </h2>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-serif text-white mb-2">
                  Industry Expertise
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Our team brings extensive knowledge of aircraft markets,
                  regulations, and operational excellence.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-serif text-white mb-2">
                  Global Network
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Access to a worldwide network of aircraft owners, operators,
                  and industry professionals.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-serif text-white mb-2">
                  Personalized Service
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Every client receives tailored solutions designed to meet
                  their unique aviation needs.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-serif text-white mb-2">
                  Confidentiality
                </h3>
                <p className="text-white/60 leading-relaxed">
                  We maintain the highest standards of discretion in all client
                  interactions and transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
