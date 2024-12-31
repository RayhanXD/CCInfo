'use client'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

const preloaderEvent = new Event('preloaderComplete')

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const controls = useAnimation()

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setIsLoading(false)
            window.dispatchEvent(preloaderEvent)
          }, 1000)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    controls.start({
      pathLength: progress / 100,
      transition: { duration: 0.5, ease: "easeInOut" }
    })
  }, [progress, controls])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"
        >
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Particle background */}
            <div className="absolute inset-0">
              {dimensions.width > 0 && [...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/20 rounded-full"
                  initial={{
                    x: Math.random() * dimensions.width,
                    y: Math.random() * dimensions.height,
                  }}
                  animate={{
                    x: Math.random() * dimensions.width,
                    y: Math.random() * dimensions.height,
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </div>

            {/* Rest of the component remains the same */}
            <div className="relative">
              <motion.div
                className="w-48 h-48 rounded-full bg-gradient-to-br from-primary via-secondary to-accent"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <motion.div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                  <motion.svg
                    className="w-40 h-40"
                    viewBox="0 0 100 100"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 270 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear",
                    }}
                  >
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={controls}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1a237e" />
                        <stop offset="50%" stopColor="#7c4dff" />
                        <stop offset="100%" stopColor="#40c4ff" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                  <div className="absolute text-2xl font-bold text-gradient">
                    {progress}%
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Brand text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 left-0 right-0 text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight mb-2">
                Campus Connect <span className="text-gradient">AI</span>
              </h1>
              <p className="text-sm text-gray-600">
                Transforming Education Through Intelligence
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

