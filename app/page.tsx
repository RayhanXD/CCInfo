import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Testimonials } from '@/components/testimonials'
import { Waitlist } from '@/components/waitlist'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Waitlist />
    </>
  )
}

