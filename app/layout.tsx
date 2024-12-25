'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Preloader } from '@/components/preloader'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const handlePreloaderComplete = () => {
      setShowContent(true)
    }

    window.addEventListener('preloaderComplete', handlePreloaderComplete)

    return () => {
      window.removeEventListener('preloaderComplete', handlePreloaderComplete)
    }
  }, [])

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Preloader />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        {showContent && (
          <>
            <Header />
            <main className="relative">{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  )
}

