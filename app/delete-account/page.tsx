"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import Link from "next/link";
import { ArrowLeft, Mail, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const DeleteAccount = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent(
      "Account Deletion Request - Campus Connect AI"
    );
    const body = encodeURIComponent(
      "Hello Campus Connect AI Team,\n\n" +
        "I would like to request the deletion of my account.\n\n" +
        "Account Email: [Please provide your account email]\n" +
        "Reason (optional): [Please share why you're leaving]\n\n" +
        "Thank you."
    );

    window.location.href = `mailto:campus.connectai.org@gmail.com?subject=${subject}&body=${body}`;
  };

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
        <div className="container mx-auto px-4 py-12 max-w-3xl">
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
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-destructive" />
                <h1 className="text-4xl md:text-5xl font-bold text-card-foreground">
                  Delete Your Account
                </h1>
              </div>

              <div className="space-y-6 text-card-foreground/90 leading-relaxed">
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                  <p className="font-semibold text-destructive mb-2">
                    ⚠️ Important Information
                  </p>
                  <p className="text-sm">
                    Deleting your account is permanent and cannot be undone. All
                    your data, including learning progress, saved content, and
                    personal information will be permanently removed from our
                    systems.
                  </p>
                </div>

                <section>
                  <h2 className="text-2xl font-semibold mb-3 text-card-foreground">
                    What happens when you delete your account?
                  </h2>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Your profile and personal information will be deleted</li>
                    <li>All learning progress and achievements will be lost</li>
                    <li>You will lose access to all campus resources</li>
                    <li>Your account cannot be recovered after deletion</li>
                    <li>Any active subscriptions will be cancelled</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3 text-card-foreground">
                    Before you go...
                  </h2>
                  <p className="mb-4">
                    We're sorry to see you leave. If you're experiencing issues
                    with our platform, please reach out to our support team
                    first. We’d love to help resolve any concerns before you
                    decide to delete your account.
                  </p>
                </section>

                <section className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-card-foreground flex items-center gap-2">
                    <Mail className="w-6 h-6 text-primary" />
                    Request Account Deletion
                  </h2>
                  <p className="mb-4">
                    To delete your account, please send us an email. We will
                    process your request within 48 hours and send confirmation
                    once complete.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-card/50 rounded-lg p-4">
                      <p className="text-sm font-medium mb-1">
                        Send your request to:
                      </p>
                      <a
                        href="mailto:campus.connectai.org@gmail.com"
                        className="text-lg text-primary hover:text-accent transition-colors underline font-semibold"
                      >
                        campus.connectai.org@gmail.com
                      </a>
                    </div>

                    <Button
                      onClick={handleEmailClick}
                      className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
                      size="lg"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Deletion Request Email
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      This will open your email app with a pre-filled message.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3 text-card-foreground">
                    Need Help?
                  </h2>
                  <p>
                    If you have questions about data deletion or privacy,
                    please review our{" "}
                    <Link
                      href="/privacy"
                      className="text-primary hover:text-accent transition-colors underline"
                    >
                      Privacy Policy
                    </Link>{" "}
                    or contact us at{" "}
                    <a
                      href="mailto:campus.connectai.org@gmail.com"
                      className="text-primary hover:text-accent transition-colors underline"
                    >
                      campus.connectai.org@gmail.com
                    </a>
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

export default DeleteAccount;
