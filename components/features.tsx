'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Shield, Clock, Trophy, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    title: "Boost Your Academic Success",
    description: "Transform your academic journey with our comprehensive platform designed to enhance learning outcomes and streamline your educational experience.",
    icon: Trophy
  },
  {
    title: "Enterprise-Grade Security",
    description: "Your data's security is paramount. We implement industry-leading encryption and compliance measures to protect your information.",
    icon: Shield
  },
  {
    title: "Efficient Time Management",
    description: "Optimize your study schedule and academic workflow with intelligent time management tools and personalized recommendations.",
    icon: Clock
  }
]

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/50 to-white" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gradient">
            AI-Powered Academic Excellence
          </h2>
          <p className="text-lg text-gray-600">
            Leverage advanced artificial intelligence to receive personalized guidance,
            timely reminders, and targeted support throughout your academic journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="relative bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                <CardContent className="p-6">
                  <div className="mb-6 relative">
                    <div className="absolute -inset-2 bg-gradient rounded-full opacity-10 
                      group-hover:opacity-20 transition-opacity" />
                    <feature.icon className="h-12 w-12 text-primary relative" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gradient">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto hover:text-secondary transition-colors"
                    onClick={() => {
                      const element = document.getElementById('waitlist')
                      if (element) {
                        const offset = 80 // Height of fixed header
                        const elementPosition = element.getBoundingClientRect().top
                        const offsetPosition = elementPosition + window.pageYOffset - offset
                        
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        })
                      }
                    }}
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-20 mt-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[300px] flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2024-12-24_at_1.00.11_PM-removebg-preview-zgm6ekm0IUYBXoEl7Si7BThqCxfgVm.png"
                alt="Continuous Learning Journey"
                width={200}
                height={200}
                className="w-2/3 h-2/3 object-contain floating"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent" />
            </div>
            
            <div className="text-center max-w-sm mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">
                Continuous Learning Journey
              </h3>
              <p className="text-gray-600">
                Our platform adapts and grows with you, ensuring a seamless educational
                experience that evolves with your needs and goals.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[300px] flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2024-12-24_at_12.54.46_PM-removebg-preview-8vVCYk08akPZxtrD7rnL99sfAqUoSp.png"
                alt="Seamless Integration"
                width={200}
                height={200}
                className="w-2/3 h-2/3 object-contain floating"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent" />
            </div>
            
            <div className="text-center max-w-sm mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">
                Seamless Integration
              </h3>
              <p className="text-gray-600">
                Connect all aspects of your academic life in one unified platform,
                creating a harmonious learning environment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

