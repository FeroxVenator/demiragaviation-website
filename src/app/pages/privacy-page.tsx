import { useEffect } from "react";
import { motion } from "motion/react";

export function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy - Demirag Aviation Website";
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
              Privacy Policy
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
                Introduction
              </h2>
              <p className="text-white/70 leading-relaxed">
                Demirağ Aviation ("we," "our," or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-white mb-4">
                Information We Collect
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We may collect information about you in a variety of ways,
                including:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                <div>
                  <h3 className="text-xl text-white mb-2">Personal Data</h3>
                  <p className="text-white/60 leading-relaxed">
                    Contact information such as name, email address, telephone
                    number, and mailing address that you voluntarily provide
                    when contacting us or requesting services.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">
                    Usage Information
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    Information about your interactions with our website,
                    including pages visited, time spent, and other analytical
                    data.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-white mb-4">
                Use of Your Information
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Provide and maintain our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you information about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-white mb-4">
                Disclosure of Your Information
              </h2>
              <p className="text-white/70 leading-relaxed">
                We maintain strict confidentiality standards and do not sell,
                trade, or otherwise transfer your personal information to third
                parties without your consent, except as required by law or as
                necessary to provide our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-white mb-4">
                Data Security
              </h2>
              <p className="text-white/70 leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-white mb-4">
                Your Rights
              </h2>
              <p className="text-white/70 leading-relaxed">
                You have the right to access, correct, or delete your personal
                information. To exercise these rights, please contact us using
                the information provided on our Contact page.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-white mb-4">
                Contact Us
              </h2>
              <p className="text-white/70 leading-relaxed">
                If you have questions or comments about this Privacy Policy,
                please contact us at our Ankara office or through the contact
                form on our website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
