'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact background.jpg" // Replace with your image path
          alt="Contact us background"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
      </div>

      {/* Content Container */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We are Here to Help You
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-200 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Whether you are looking for work, booking a shift, or want to give feedback—our team is ready to support you. Choose your enquiry type below or reach out directly.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
