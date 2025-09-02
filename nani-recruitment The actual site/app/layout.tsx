import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import WhatsAppButton from '@/components/WhatsAppButton'
import Navbar from '@/components/Navbar' // Import your Navbar component

import './globals.css'

export const metadata: Metadata = {
  title: 'Nani Recruitment Ltd | UK Staffing Specialists',
  description: '24/7 staffing solutions for healthcare, cleaning, security, and logistics sectors across the UK. Reliable staff ready when you need them.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-geist-sans bg-gray-50">
        <Navbar /> {/* Render the Navbar component here */}
        {children}
        <WhatsAppButton />

      </body>
    </html>
  )
}
