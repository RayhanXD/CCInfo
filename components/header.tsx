'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.5)']
  )
  const blur = useTransform(scrollY, [0, 100], [0, 10])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const menuItems = [
    { name: 'Features', section: 'features' },
    { name: 'Testimonials', section: 'testimonials' },
  ]

  return (
    <motion.header
      style={{ 
        backgroundColor,
        backdropFilter: blur.get() ? `blur(${blur.get()}px)` : undefined
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
    >
      <nav className="w-full px-4 md:px-0 h-20 backdrop-blur-sm bg-white/5">
        <div className="flex items-center justify-between h-full w-full px-4">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="flex items-center gap-2"
            >
              <span className="text-xl font-bold text-gradient">Campus Connect AI</span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button 
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('waitlist')}
              className="bg-gradient text-white hover:opacity-90"
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden relative z-50 p-2 text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-20 bg-white/30 backdrop-blur-xl z-40"
          >
            <nav className="container mx-auto px-4 py-8">
              <div className="space-y-6">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.section}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.section)}
                      className="w-full text-left text-lg font-medium text-gray-800 hover:text-primary transition-colors py-2"
                    >
                      {item.name}
                    </button>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Button 
                    onClick={() => scrollToSection('waitlist')}
                    className="w-full bg-gradient text-white hover:opacity-90 h-12 text-lg"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-gradient opacity-20 blur-sm" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

