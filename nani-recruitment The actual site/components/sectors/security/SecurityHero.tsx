'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';

export default function SecurityHero() {
  return (
    <section className="bg-gradient-to-r from-[#232d54] to-[#232c54] text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional Security Staffing You Can Trust
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Reliable, trained, and licensed guards for peace of mind in any environment.
          </motion.p>
          <motion.a 
            href="#services" 
            className="bg-[#ad4f68] hover:bg-[#8e3d55] text-white font-bold py-3 px-8 rounded-md text-lg transition inline-flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Staff
            <svg className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Added width and height here to make Image with fill work */}
          <div className="relative w-full max-w-lg h-96">
            <motion.div 
              className="absolute inset-0 bg-[#ad4f68] rounded-full opacity-20 blur-xl transform -translate-x-4 translate-y-4"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Image
              src="/security2.jpg"
              alt="Professional security personnel"
              fill
              priority
              sizes="100vw"
              className="rounded-md shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
