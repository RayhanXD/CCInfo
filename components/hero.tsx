'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      dx: number
      dy: number
      size: number
      color: string
    }> = []

    const colors = [
      'rgba(26, 35, 126, 0.1)',
      'rgba(74, 20, 140, 0.1)',
      'rgba(103, 58, 183, 0.1)'
    ]

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.dx
        particle.y += particle.dy

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1

        ctx.beginPath()
        ctx.fillStyle = particle.color
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white via-indigo-50/50 to-white" ref={containerRef}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full"
      />
      <div className="absolute inset-0 w-full">
        <div className="mx-auto h-full max-w-[2000px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8 items-center h-full pt-32 pb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start text-left max-w-3xl lg:max-w-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm border border-indigo-100">
                  <Sparkles className="h-4 w-4" />
                  Version 2.0 is here
                </span>
              </motion.div>
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Campus Connect{' '}
                <span className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 bg-clip-text text-transparent">
                  AI
                </span>
              </motion.h1>
              <motion.p
                className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-xl lg:max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Revolutionize your academic journey with AI-powered insights, seamless collaboration tools, 
                and personalized learning paths designed for student success.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-lg bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Get started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-14 px-8 text-lg border-2 hover:bg-gradient-to-r hover:from-indigo-900 hover:via-purple-800 hover:to-indigo-900 hover:text-white transition-all duration-300"
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
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 flex items-center justify-center text-white text-sm font-medium ring-2 ring-white"
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
              <div className="relative z-10 w-full h-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g9aIwH9ZzPH2I2ZGoWEg8SfnERADRs.png"
                  alt="Campus Connect AI Platform"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 blur-3xl rounded-full transform -rotate-6" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  )
}

