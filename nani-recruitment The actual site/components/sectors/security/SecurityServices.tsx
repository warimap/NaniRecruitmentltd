'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';

export default function SecurityServices() {
  const services = [
    {
      icon: 'fas fa-home',
      title: 'Residential Security',
      description: 'Protecting homes and gated communities 24/7 with trained security professionals.',
      delay: 0.1
    },
    {
      icon: 'fas fa-building',
      title: 'Commercial Security',
      description: 'Safeguarding businesses, offices, and retail spaces with professional security personnel.',
      delay: 0.2
    },
    {
      icon: 'fas fa-hospital',
      title: 'Hospital & Healthcare Security',
      description: 'Specialized security services for healthcare facilities ensuring safety for patients and staff.',
      delay: 0.3
    },
    {
      icon: 'fas fa-calendar-alt',
      title: 'Event Security',
      description: 'Crowd management and security for events of all sizes, from corporate functions to large festivals.',
      delay: 0.4
    },
    {
      icon: 'fas fa-video',
      title: 'CCTV Monitoring Support',
      description: 'Professional monitoring services to ensure your property is under constant surveillance.',
      delay: 0.5
    },
    {
      icon: 'fas fa-moon',
      title: 'Night Watch & Patrol Services',
      description: 'Regular patrol services ensuring your premises remain secure throughout the night.',
      delay: 0.6
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#232d54] mb-4">Our Security Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive security solutions tailored to your specific needs across various sectors.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: service.delay }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="p-6">
                <motion.div 
                  className="w-16 h-16 bg-[#ad4f68]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ad4f68] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <i className={`${service.icon} text-2xl text-[#ad4f68] group-hover:text-white transition-colors duration-300`}></i>
                </motion.div>
                <h3 className="text-xl font-bold text-[#232d54] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
