'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Lightbulb, Target, ChartBar } from 'lucide-react'

const features = [
  {
    title: "Smart Course Recommendations",
    description: "Our smart AI can analyze your academic history and interests to provide personalized course recommendations.",
    icon: Lightbulb
  },
  {
    title: "Academic Planning",
    description: "Create a plan to help you achieve your academic goals and stay on track.",
    icon: Target
  },
  {
    title: "Performance Insights", 
    description: "Get insights into your academic performance and recommendations for improvement.",
    icon: ChartBar
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-2/3 aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2024-12-24_at_12.39.22_PM-removebg-preview-P9jpw10lCyKYAlLRNGFvpzmUW2R9Au.png"
                alt="Geometric Excellence"
                width={600}
                height={600}
                className="w-full h-full object-contain floating"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl rounded-full" />
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gradient">
                Elevate Your Academic Journey
              </h2>
              <div className="w-24 h-1 rounded-full bg-gradient mb-4" />
              <p className="text-lg text-gray-600">
                Our AI-powered platform helps you optimize your academic path, track your progress, and achieve your goals through personalized recommendations.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="h-full bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient opacity-10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300" />
                  <div className="mb-4 relative">
                    <div className="w-12 h-12 rounded-lg bg-gradient flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gradient relative">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg relative">
                    {feature.description}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
