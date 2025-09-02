'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';

export default function HealthcareSectors() {
  const sectors = [
    {
      icon: (
        <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Nursing Homes',
      description: 'We place Registered Nurses (RNs), Registered General Nurses (RGNs), and Registered Mental Nurses (RMNs), and Healthcare Assistants (HCAs) in quality nursing homes across the UK.',
      delay: 0.1
    },
    {
      icon: (
        <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Supported Living',
      description: 'Our dedicated support workers and team leaders help individuals live independently in supported living environments, providing personalized care and assistance.',
      delay: 0.2
    },
    {
      icon: (
        <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Mental Health Facilities',
      description: 'We supply Registered Mental Nurses (RMNs) and specialized mental health Healthcare Assistants to support patients in various mental health settings.',
      delay: 0.3
    },
    {
      icon: (
        <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Learning Disabilities Services',
      description: 'Our 1:1 support staff provide specialized care for individuals with learning disabilities, helping them achieve greater independence and quality of life.',
      delay: 0.4
    },
    {
      icon: (
        <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Domiciliary Care',
      description: 'Our community care assistants deliver essential support services to clients in their own homes, enabling them to maintain independence and dignity.',
      delay: 0.5
    },
    {
      icon: (
        <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Hospitals & Clinics',
      description: 'We provide locum nurses and staff for agency shifts in hospitals and clinics, helping healthcare facilities maintain optimal staffing levels during busy periods.',
      delay: 0.6
    },
    {
      icon: (
        <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Children's Services",
      description: 'Our pediatric Healthcare Assistants and youth workers are specially trained to support children and young people in various healthcare and social care settings.',
      delay: 0.7,
      featured: true
    }
  ]

  return (
    <section className="py-0 relative">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Healthcare.png" // Replace with your image path
          alt="Healthcare professionals"
            fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Subtle dark overlay */}
      </div>

      <div className="container mx-auto max-w-6xl px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              className={`relative bg-white/80 backdrop-blur-sm shadow-lg rounded-xl overflow-visible transition-all duration-500 hover:shadow-2xl group cursor-pointer ${
                sector.featured ? 'lg:col-start-2 transform scale-102' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sector.delay }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Floating Icon */}
              <motion.div 
                className="absolute h-20 w-20 rounded-full bg-gradient-to-br from-[#624d69] to-[#ad4f68] flex items-center justify-center mx-auto left-1/2 transform -translate-x-1/2 -top-10 shadow-lg z-10"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: "0 12px 24px rgba(173, 79, 104, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                {sector.icon}
              </motion.div>

              {/* Card Header */}
              <motion.div 
                className="bg-gray-50/80 backdrop-blur-sm pt-12 pb-6 px-6 rounded-t-xl group-hover:bg-gradient-to-br group-hover:from-[#624d69] group-hover:to-[#ad4f68] transition-all duration-300"
              >
                <motion.h3 
                  className="text-xl font-bold text-[#232d54] text-center group-hover:text-white transition-colors duration-300"
                >
                  {sector.title}
                </motion.h3>
              </motion.div>

              {/* Card Content */}
              <div className="p-6 pt-4">
                <p className="text-gray-600 text-center mb-6">
                  {sector.description}
                </p>
                <div className="flex justify-center space-x-2">
                  <motion.a 
                    href="/hire" 
                    className="text-sm bg-[#ad4f68] text-white font-medium py-2 px-4 rounded-full hover:bg-[#8e3d55] transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Hire
                  </motion.a>
                  <motion.a 
                    href="/work" 
                    className="text-sm border border-[#ad4f68] text-[#ad4f68] font-medium py-2 px-4 rounded-full hover:bg-[#ad4f68] hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore All CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a 
            href="/sectors" 
            className="inline-block px-8 py-4 rounded-lg font-semibold text-white text-lg shadow-lg bg-gradient-to-br from-[#232c54] to-[#232d54] hover:from-[#624d69] hover:to-[#ad4f68] transition-all duration-500 relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              y: -2,
              boxShadow: "0 8px 20px rgba(173, 79, 104, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Roles
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
