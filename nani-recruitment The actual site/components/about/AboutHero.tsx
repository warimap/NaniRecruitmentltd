'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image with a dark overlay */}
      <div 
        className="absolute inset-0"
        style={{
          // Use a relative path to the image in your public folder
          backgroundImage: `url('/health.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom ',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-navy/70"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About NANI Recruitment
          </motion.h1>
          <motion.p 
            className="text-xl text-white leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are more than a healthcare recruitment agency — we are a dedicated team committed to connecting compassionate professionals with organizations that share our values of excellence, integrity, and person-centered care.
          </motion.p>
        </div>
      </div>
      
      {/* Decorative bottom element */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}
      ></div>
    </section>
  )
}