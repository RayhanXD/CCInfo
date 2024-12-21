'use client'

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
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-muted to-white">
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 gradient-text">
            AI-Powered Academic Excellence
          </h2>
          <p className="text-lg text-gray-600">
            Leverage advanced artificial intelligence to receive personalized guidance,
            timely reminders, and targeted support throughout your academic journey.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((Feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="h-full card-hover border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-6 relative">
                    <div className="absolute -inset-2 gradient-bg rounded-full opacity-10"></div>
                    <Feature.icon className="h-12 w-12 text-primary relative" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 gradient-text">
                    {Feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {Feature.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto hover:text-secondary transition-colors"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

