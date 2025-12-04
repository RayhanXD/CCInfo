"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { GraduationCap, ArrowRight, Sparkles, CheckCircle } from "lucide-react"
import Image from "next/image"

export function DemoSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/60" />
      </div>

      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Glowing orbs */}
          <div className="absolute -left-32 -top-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

          {/* Content wrapper with glass effect */}
          <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 backdrop-blur-sm border border-primary/10 text-primary font-medium text-sm mb-6">
                    <GraduationCap className="h-4 w-4" />
                    UTD Students Only
                    <Sparkles className="h-4 w-4 text-secondary" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Try the <span className="text-gradient">Beta Version</span> Today
                  </h2>
                  <div className="space-y-4 mb-8">
                    {[
                      "Early access to AI features",
                      "Priority support and updates",
                      "Shape the future of the platform",
                    ].map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="w-5 h-5 rounded-full bg-gradient flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Button
                      size="lg"
                      className="bg-gradient text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 h-14 px-8 text-lg group"
                      onClick={() => window.location.href = 'https://platform.campusconnectai.org/home'}
                    >
                      Get Started Now
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gradient ring-2 ring-white flex items-center justify-center text-white text-xs font-medium"
                          >
                            {String.fromCharCode(65 + i)}
                          </div>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        <span className="font-semibold">20+</span> students enrolled
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="relative lg:h-[500px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Main image with floating effect */}
                <div className="relative h-full flex items-center justify-center">
                  <motion.div
                    className="relative w-full max-w-md"
                    animate={{
                      y: [0, -10, 0],
                      rotateZ: [0, 1, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/ccd2.png"
                      alt="UTD Demo Platform Preview"
                      width={500}
                      height={500}
                      className="w-full h-full object-contain"
                      priority
                    />
                    {/* Glow effect behind image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 blur-3xl -z-10" />
                  </motion.div>
                </div>

                {/* Floating feature cards */}
                <motion.div
                  className="absolute top-10 -left-4 bg-white rounded-2xl p-4 shadow-lg flex items-center gap-3"
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Smart AI</div>
                    <div className="text-sm text-gray-500">Personalized Learning</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-10 -right-4 bg-white rounded-2xl p-4 shadow-lg flex items-center gap-3"
                  animate={{
                    y: [0, 15, 0],
                    x: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    delay: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Beta Access</div>
                    <div className="text-sm text-gray-500">Limited Spots</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

