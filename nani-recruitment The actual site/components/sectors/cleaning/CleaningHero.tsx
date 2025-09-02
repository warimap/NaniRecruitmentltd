'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';

export default function CleaningHero() {
  return (
    <section className="bg-gray-50 py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100" height="100" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#ad4f68" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#232d54] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Reliable Cleaning & Domestic Support You Can Trust
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our cleaners and domestic workers play a vital role in creating safe, welcoming environments across healthcare, supported living, residential homes, and private settings. We only place professionals who are dependable, fully vetted, and ready to make a difference.
            </motion.p>
            <motion.a 
              href="#contact" 
              className="inline-block px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#624d69] to-[#ad4f68] shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find Staff Today
            </motion.a>
          </motion.div>
          
         <motion.div 
  className="md:w-1/2 md:pl-12"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
    <Image 
      src="/cleaning bg.jpg" 
      alt="Cleaning Staff" 
      fill
      priority
      className="object-cover"
    />
  </div>
</motion.div>

        </div>
      </div>
    </section>
  )
}
