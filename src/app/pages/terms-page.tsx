import { useEffect } from "react";
import { motion } from "motion/react";

export function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service - Demirag Aviation Website";
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
                Legal
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Last updated: March 25, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-3xl font-serif text-white mb-4">
                Agreement to Terms
              </h2>
              <p className="text-white/70 leading-relaxed">
                By accessing or using the Demirağ Aviation website and services,
                you agree to be bound by these Terms of Service. If you disagree
                with any part of these terms, you may not access our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-white mb-4">
                Services Description
              </h2>
              <p className="text-white/70 leading-relaxed">
                Demirağ Aviation provides aircraft brokerage and charter
                services. All information provided on this website is for
                general informational purposes. Specific service terms are
                subject to individual agreements.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-white mb-4">
                Aircraft Information
              </h2>
              <p className="text-white/70 leading-relaxed">
                Aircraft specifications, availability, and other details
                displayed on our website are subject to change without notice.
                We make reasonable efforts to ensure accuracy but do not
                guarantee that all information is current or complete.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-white mb-4">
                Brokerage Services
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                <p className="text-white/70 leading-relaxed">
                  Our brokerage services are governed by separate written
                  agreements. The display of aircraft on our website does not
                  constitute an offer to sell and is for informational purposes
                  only.
                </p>
                <p className="text-white/70 leading-relaxed">
                  All transactions are subject to detailed due diligence,
                  inspection, and contractual agreements between parties.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-white mb-4">
                Charter Services
              </h2>
              <p className="text-white/70 leading-relaxed">
                Charter services are subject to aircraft availability,
                scheduling, weather conditions, and regulatory compliance. All
                charter agreements require written confirmation and are subject
                to our standard charter terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-white mb-4">
                Intellectual Property
              </h2>
              <p className="text-white/70 leading-relaxed">
                The content, features, and functionality of our website,
                including but not limited to text, graphics, logos, and images,
                are owned by Demirağ Aviation and are protected by international
                copyright and trademark laws.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-white mb-4">
                Limitation of Liability
              </h2>
              <p className="text-white/70 leading-relaxed">
                Demirağ Aviation shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages
                resulting from your use or inability to use our services or
                website.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-white mb-4">
                Governing Law
              </h2>
              <p className="text-white/70 leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of Turkey, without regard to its conflict of law
                provisions.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-white mb-4">
                Changes to Terms
              </h2>
              <p className="text-white/70 leading-relaxed">
                We reserve the right to modify or replace these Terms at any
                time. It is your responsibility to review these Terms
                periodically for changes.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-white mb-4">
                Contact Information
              </h2>
              <p className="text-white/70 leading-relaxed">
                For questions about these Terms of Service, please contact us
                through our Contact page or at our Ankara office.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
