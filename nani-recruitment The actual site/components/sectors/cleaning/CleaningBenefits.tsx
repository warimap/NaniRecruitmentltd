'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';

export default function CleaningBenefits() {
  const benefits = [
    {
      icon: (
        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Fully DBS-checked and compliant workers',
      description: 'All our cleaning and domestic staff undergo thorough background checks and are fully compliant with industry regulations.'
    },
    {
      icon: (
        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Flexible day/night shifts',
      description: 'We provide staff for any shift pattern, ensuring your facility has cleaning support whenever you need it.'
    },
    {
      icon: (
        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Trained in infection prevention & control',
      description: 'Our staff are specially trained in the latest infection control protocols, essential for healthcare environments.'
    },
    {
      icon: (
        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Rapid deployment for urgent cover',
      description: 'Need staff quickly? We can provide qualified cleaning personnel with minimal notice for emergency situations.'
    }
  ]

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cleaner.jpg"
          alt="Abstract cleaning background"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="mb-6">
                <svg className="h-12 w-12 text-[#ad4f68] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <motion.p 
                className="text-lg text-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                The cleaning staff from NANI Recruitment have been exceptional. They are reliable, thorough, and have made a real difference to our care home environment. Our residents feel comfortable with them, and the infection control measures have been outstanding.
              </motion.p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#232d54]">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Care Home Manager, Oakwood Residence</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Why Choose Our Domestic Staff</h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={benefit.title}
                  className="flex items-start group cursor-pointer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="h-10 w-10 rounded-full bg-gradient-to-r from-[#624d69] to-[#ad4f68] flex-shrink-0 flex items-center justify-center mr-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-200">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}