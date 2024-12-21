'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Academic Director",
    text: "Campus Connect AI has transformed how we approach student support and academic planning. The platform's intelligent features have significantly improved student engagement and success rates.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Casey Jordan",
    role: "Department Head",
    text: "The implementation of Campus Connect AI has streamlined our administrative processes and enhanced our ability to provide personalized support to each student.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Morgan Lee",
    role: "Student Success Coordinator",
    text: "This platform has revolutionized how we track and support student progress. The AI-driven insights have been invaluable for early intervention and student success.",
    avatar: "/placeholder.svg"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 gradient-text">
            Trusted by Education Leaders
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full gradient-bg mb-4" />
          <p className="text-lg text-gray-600">
            Discover how Campus Connect AI is transforming academic institutions
            and empowering student success.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="h-full bg-white/50 backdrop-blur-sm card-hover border-0 shadow-lg">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-gray-600 mb-6 text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="gradient-bg text-white">
                        {testimonial.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold gradient-text">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

