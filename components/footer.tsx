import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-400 rounded"></div>
              <span className="text-xl font-bold text-white">Campus Connect AI</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/integrations">Integrations</Link></li>
              <li><Link href="/updates">Updates</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/press">Press</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/security">Security</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

