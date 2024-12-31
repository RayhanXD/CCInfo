'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.5)']  // Change 0.9 to 0.5 for more translucency
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
    setIsOpen(false) // Close mobile menu if open
    const element = document.getElementById(sectionId)
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
    <motion.header
      style={{ 
        backgroundColor,
        backdropFilter: blur.get() ? `blur(${blur.get()}px)` : undefined
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-colors duration-300 w-full"
    >
      <nav className="w-full px-4 h-20 backdrop-blur-sm bg-white/5"> {/* Updated nav element */}
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="flex items-center gap-2"
            >
              <span className="text-xl font-bold text-gradient">Campus Connect AI</span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <Button 
              onClick={() => scrollToSection('waitlist')}
              className="bg-gradient text-white hover:opacity-90"
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white z-40">
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-6">
            <button
              onClick={() => scrollToSection('features')}
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <Button 
              onClick={() => scrollToSection('waitlist')}
              className="bg-gradient text-white hover:opacity-90 w-full"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </motion.header>
  )
}

