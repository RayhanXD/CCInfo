import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Testimonials } from '@/components/testimonials'
import { Waitlist } from '@/components/waitlist'
import { DemoSection } from "@/components/demo-section"

export default function Home() {
  return (
    <>
      <Hero />
      <DemoSection />
      <Features />
      <Testimonials />
      <Waitlist />
    </>
  )
}

