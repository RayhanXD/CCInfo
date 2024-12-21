import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between max-w-7xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-400 rounded"></div>
          <span className="text-xl font-bold">Campus Connect AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-sm hover:text-blue-600">About</Link>
          <Link href="/features" className="text-sm hover:text-blue-600">Features</Link>
          <Link href="/purpose" className="text-sm hover:text-blue-600">Purpose</Link>
          <Link href="/updates" className="text-sm hover:text-blue-600">Updates</Link>
          <Link href="/contact" className="text-sm hover:text-blue-600">Contact</Link>
        </nav>
        <Button>Get for free</Button>
      </div>
    </header>
  )
}

