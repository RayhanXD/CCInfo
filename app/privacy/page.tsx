"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-[hsl(260,80%,75%)] via-[hsl(250,70%,80%)] to-[hsl(240,70%,85%)]"
        style={{ zIndex: -1 }}
      />

      {/* Animated Particles */}
      <AnimatedBackground />

      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>

            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-border/50">
              <h1 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
                Privacy Policy
              </h1>

              <div className="space-y-6 text-card-foreground/90 leading-relaxed">
                <p className="text-sm text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <section>
                  <h2 className="text-2xl font-semibold mb-3 text-card-foreground">
                    1. Introduction
                  </h2>
                  <p>
                    Welcome to Campus Connect AI ("we," "our," or "us"). We are
                    committed to protecting your privacy and ensuring the
                    security of your personal information. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your
                    information when you use our educational platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3 text-card-foreground">
                    2. Information We Collect
                  </h2>
                  <p className="mb-2">
                    We collect information that you provide directly to us,
                    including:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Name and contact information</li>
                    <li>Email address</li>
                    <li>Educational institution details</li>
                    <li>Usage data and preferences</li>
                    <li>Communication records</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3 text-card-foreground">
                    3. How We Use Your Information
                  </h2>
                  <p className="mb-2">We use the collected information for:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Providing and improving our educational services</li>
                    <li>Personalizing your learning experience</li>
                    <li>Communicating with you about updates and features</li>
                    <li>
                      Analyzing usage patterns to enhance platform functionality
                    </li>
                    <li>Ensuring platform security and preventing fraud</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3 text-card-foreground">
                    4. Data Sharing and Disclosure
                  </h2>
                  <p>
                    We do not sell, trade, or rent your personal information to
                    third parties. We may share your information with trusted
                    service providers who assist us in operating our platform,
                    conducting our business, or servicing you, provided those
                    parties agree to keep this information confidential.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3 text-card-foreground">
                    5. Data Security
                  </h2>
                  <p>
                    We implement industry-standard security measures to protect
                    your personal information from unauthorized access,
                    alteration, disclosure, or destruction. However, no method of
                    transmission over the Internet is 100% secure, and we cannot
                    guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3 text-card-foreground">
                    6. Your Rights
                  </h2>
                  <p className="mb-2">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Data portability</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3 text-card-foreground">
                    7. Cookies and Tracking
                  </h2>
                  <p>
                    We use cookies and similar tracking technologies to track
                    activity on our platform and hold certain information. You
                    can instruct your browser to refuse all cookies or to
                    indicate when a cookie is being sent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3 text-card-foreground">
                    8. Changes to This Privacy Policy
                  </h2>
                  <p>
                    We may update our Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3 text-card-foreground">
                    9. Contact Us
                  </h2>
                  <p>
                    If you have any questions about this Privacy Policy or wish
                    to exercise your rights, please contact us at:
                  </p>
                  <p className="mt-2">
                    <a
                      href="mailto:campusconnectai@gmail.com"
                      className="text-primary hover:text-accent transition-colors underline"
                    >
                      campusconnectai@gmail.com
                    </a>
                  </p>
                </section>

                <section className="mt-8 pt-6 border-t border-border/30">
                  <p className="text-sm text-muted-foreground">
                    For account deletion requests, please visit our{" "}
                    <Link
                      href="/delete-account"
                      className="text-primary hover:text-accent transition-colors underline"
                    >
                      Delete Account
                    </Link>{" "}
                    page.
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
