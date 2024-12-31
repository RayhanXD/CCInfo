'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 200])

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist')
    if (element) {
      const offset = 80 // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-20" ref={containerRef}>
      {/* Background grid */}
      <div className="hero-grid">
        {Array.from({ length: 32 }).map((_, i) => (
          <div
            key={i}
            className="hero-grid-item"
            style={{ '--delay': i } as any}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="min-h-[calc(100vh-5rem)] grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left max-w-3xl pt-12 lg:pt-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass text-primary font-medium text-sm">
                <Sparkles className="h-4 w-4" />
                The power of AI, unlocked
              </span>
            </motion.div>
            <motion.h1
              className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Campus Connect{' '}
              <span className="text-gradient">AI</span>
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform your academic journey with AI-powered insights, seamless collaboration,
              and personalized learning paths designed for your success.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button 
                size="lg" 
                className="h-14 px-8 text-lg bg-gradient hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                onClick={scrollToWaitlist}
              >
                Get started
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-14 px-8 text-lg bg-glass border-0 hover:bg-white/20 transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById('features')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Learn more <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              className="mt-12 flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient flex items-center justify-center text-white text-sm font-medium ring-2 ring-white"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-lg text-gray-600">
                <span className="font-semibold">1000+</span> students already enrolled
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative w-full h-full min-h-[500px] lg:min-h-[800px]"
            style={{ y }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 w-3/4 h-3/4 mx-auto my-auto floating flex items-center justify-center h-screen">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ccd1%20(1)-min-Fwq5Hqc9Ycp9QsizGcmsbOUWEZQFEu.png"
                alt="Campus Connect AI Platform"
                width={600}
                height={600}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

