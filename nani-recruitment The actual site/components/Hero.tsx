'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero2.jpg"
          alt="Professional Office Environment"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        {/* Background Overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-10 z-5">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-[#682134] rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#624d69] rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            y: [-20, 20, -20]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional <span className="text-crimson -300">Staffing</span> Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Expert recruitment for Healthcare, Cleaning, Security, and Logistics sectors across the UK.
              Your trusted partner for quality temporary and permanent staff.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/hire" passHref>
                <motion.button
                  className="bg-[#771f38] hover:bg-[#232d54] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Staff Today
                </motion.button>
              </Link>
              <Link href="/work" passHref>
                <motion.button
                  className="bg-[#232d54] border-2 border-transparent text-white hover:bg-[#771f38] hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Find Work Now
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Professional Stats/Features Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl max-w-md w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose NANI?</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-16 h-16 bg-[#771f38] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xA font-bold text-white">24/7</span>
                    </div>
                    <p className="text-white/90 text-sm font-medium">Support Available</p>
                  </motion.div>
                  
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-16 h-16 bg-[#624d69] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xA font-bold text-white">100%</span>
                    </div>
                    <p className="text-white/90 text-sm font-medium">Vetted Staff</p>
                  </motion.div>
                  
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-16 h-16 bg-[#232d54] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-white">4+</span>
                    </div>
                    <p className="text-white/90 text-sm font-medium">Years Experience</p>
                  </motion.div>
                  
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-16 h-16 bg-[#5F4B68] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-white">1K+</span>
                    </div>
                    <p className="text-white/90 text-sm font-medium">Placements Made</p>
                  </motion.div>
                </div>
                
                <motion.div
                  className="mt-6 pt-6 border-t border-white/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <p className="text-white/80 text-sm leading-relaxed">
                    Trusted by healthcare providers and professionals across the UK for reliable, quality staffing solutions.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-gray-50">
          <path d="M0,0 C240,120 480,120 720,60 C960,0 1200,0 1440,60 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}