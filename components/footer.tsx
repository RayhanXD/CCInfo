import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <span className="text-xl font-bold text-white">Campus Connect AI</span>
          </div>
          <div className="text-sm text-center">
            <p className="text-gray-400">
              Transform your academic journey with AI-powered insights
            </p>
          </div>
          <div className="flex justify-end space-x-4 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

