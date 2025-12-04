'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function Waitlist() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setError('')
  
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email
        })
      })
  
      const data = await response.json()
  
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form')
      }
  
      setIsSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'Failed to submit form. Please try again later.')
      console.error('Error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="waitlist" className="py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
      </div>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block w-72 h-72 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            delay: i * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`,
          }}
        />
      ))}
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass text-primary font-medium text-sm mb-6">
            <Sparkles className="h-4 w-4" />
            Limited spots available
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Join the Future of Education
          </h2>
          <p className="text-xl text-gray-600">
            Be among the first to experience our revolutionary AI-powered learning platform. 
            Sign up now for exclusive early access and special benefits.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="max-w-lg mx-auto bg-white/40 backdrop-blur-md border-0 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl">Reserve Your Spot</CardTitle>
              <CardDescription className="text-base">
                Join over 1,000+ educators and students already on the waitlist
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="John"
                        disabled={isLoading}
                        className="bg-white/50 border-0 focus:ring-2 ring-primary/20"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Doe"
                        disabled={isLoading}
                        className="bg-white/50 border-0 focus:ring-2 ring-primary/20"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      disabled={isLoading}
                      className="bg-white/50 border-0 focus:ring-2 ring-primary/20"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-gradient hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] text-lg h-12"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Please wait
                      </>
                    ) : (
                      'Join Waitlist'
                    )}
                  </Button>
                  <p className="text-center text-sm text-gray-500">
                    By joining, you agree to our{' '}
                    <a href="#" className="text-primary hover:underline">Terms</a>
                    {' '}and{' '}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="relative w-20 h-20 mx-auto">
                      <div className="absolute inset-0 bg-gradient rounded-full animate-ping opacity-20" />
                      <div className="relative w-full h-full rounded-full bg-gradient flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gradient">
                        Welcome Aboard!
                      </h3>
                      <p className="text-gray-600 text-lg">
                        You&apos;re now on the exclusive waitlist. We&apos;ll notify you when we launch!
                      </p>
                    </div>
                    <div className="pt-4">
                      <Button 
                        variant="outline" 
                        className="bg-white/50 hover:bg-white/70"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Add another email
                      </Button>
                    </div>
                  </motion.div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex justify-center items-center"
        >
          {[
            { label: 'Launch Date', value: 'Q1 2025' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

