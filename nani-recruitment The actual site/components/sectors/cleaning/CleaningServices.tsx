'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';

export default function CleaningServices() {
  const services = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Residential Cleaning',
      description: 'Comprehensive cleaning services for care homes, retirement communities, and assisted living facilities.',
      delay: 0.1
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Healthcare Facility Cleaning',
      description: 'Specialized cleaning for hospitals, clinics, and medical facilities with strict hygiene protocols.',
      delay: 0.2
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Supported Living & Communal Areas',
      description: 'Regular cleaning of shared spaces and individual units in supported living environments.',
      delay: 0.3
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Housekeeping',
      description: 'Comprehensive housekeeping services including laundry, bed making, and general tidying.',
      delay: 0.4
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Kitchen & Catering Assistance',
      description: 'Kitchen cleaning, food preparation assistance, and dining area maintenance.',
      delay: 0.5
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Deep Cleaning & Infection Control',
      description: 'Specialized deep cleaning services with focus on sanitization and infection prevention.',
      delay: 0.6
    }
  ]

  return (
    <section className="py-16 bg-[#ECE4E8]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#232d54] mb-4">Services We Provide</h2>
          <p className="text-lg text-gray-600">
            Our cleaning and domestic staff are trained to deliver exceptional service across a range of environments.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white shadow-md p-6 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-lg group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: service.delay }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              <motion.div 
                className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 mx-auto text-[#ad4f68] group-hover:bg-gradient-to-r group-hover:from-[#624d69] group-hover:to-[#ad4f68] group-hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-[#232d54] text-center mb-3">{service.title}</h3>
              <p className="text-gray-600 text-center mb-6">{service.description}</p>
              <div className="text-center">
                <motion.a 
                  href="#contact" 
                  className="inline-block px-4 py-2 rounded-lg font-medium border border-[#ad4f68] text-[#ad4f68] group-hover:bg-gradient-to-r group-hover:from-[#624d69] group-hover:to-[#ad4f68] group-hover:text-white group-hover:border-transparent transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Staff
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
