'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';

export default function HealthcareHero() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Healthcare-Recruitment.png"
          alt="Background"
            fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 z-10 bg-black opacity-60"></div>
      
      <div className="container mx-auto max-w-6xl relative z-20">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Healthcare Sectors We Recruit For
          </motion.h2>
          <motion.p 
            className="text-lg text-white font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            From residential care homes to mental health services, we place trusted professionals where they are needed most.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}