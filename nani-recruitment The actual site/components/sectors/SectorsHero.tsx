'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';

export default function SectorsHero() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about hero.png"
          alt="Security background"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Sectors We Cover</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">Specialized staffing solutions across key industries</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ backdropFilter: 'blur(2px)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Healthcare */}
          <motion.a 
            href="/sectors/healthcare" 
            className="sector-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-48">
              <Image 
                src="/sector h1.png" 
                alt="Healthcare" 
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#232d54] mb-2">Healthcare</h3>
              <p className="text-gray-600 mb-4">Qualified nurses, carers, and support workers for care homes and private clients.</p>
              <span className="text-[#771f38] font-medium">Explore &rarr;</span>
            </div>
          </motion.a>
          
          {/* Cleaning & Domestic */}
          <motion.a 
            href="/sectors/cleaning" 
            className="sector-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-48">
              <Image 
                src="/cleaner 2.png" 
                alt="Cleaning" 
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#232d54] mb-2">Cleaning & Domestic</h3>
              <p className="text-gray-600 mb-4">Reliable cleaning staff for commercial and residential properties.</p>
              <span className="text-[#771f38] font-medium">Explore &rarr;</span>
            </div>
          </motion.a>
          
          {/* Security */}
          <motion.a 
            href="/sectors/security" 
            className="sector-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-48">
              <Image 
                src="/security1.png" 
                alt="Security guard"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#232d54] mb-2">Security</h3>
              <p className="text-gray-600 mb-4">Trained security personnel for construction sites and commercial premises.</p>
              <span className="text-[#771f38] font-medium">Explore &rarr;</span>
            </div>
          </motion.a>
          
          {/* Logistics */}
          <motion.a 
            href="/sectors/logistic" 
            className="sector-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-48">
              <Image 
                src="/truck-driver-delivery-boxes.jpg" 
                alt="Logistics" 
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#232d54] mb-2">Logistics</h3>
              <p className="text-gray-600 mb-4">Warehouse staff, drivers, and logistics support for your supply chain needs.</p>
              <span className="text-[#ad4f68] font-medium">Explore &rarr;</span>
            </div>
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="/sectors" 
            className="inline-block btn-secondary bg-[#232d54] text-white font-bold py-3 px-8 rounded-full hover:bg-[#1a2342] transition-all duration-300 hover:transform hover:-translate-y-0.5"
          >
            View All Sectors
          </a>
        </motion.div>
      </div>
    </section>
  )
}
