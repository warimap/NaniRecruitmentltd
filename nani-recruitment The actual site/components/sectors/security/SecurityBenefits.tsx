'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';

export default function SecurityBenefits() {
  const benefits = [
    {
      icon: 'fas fa-certificate',
      title: 'Fully licensed SIA professionals',
      description: 'All our security personnel are SIA licensed and undergo regular training to maintain the highest standards.',
      delay: 0.1
    },
    {
      icon: 'fas fa-bolt',
      title: 'Rapid response & emergency cover',
      description: 'Quick deployment of security staff for emergency situations and last-minute requirements.',
      delay: 0.2
    },
    {
      icon: 'fas fa-calendar-week',
      title: 'Flexible shifts',
      description: 'We offer temporary, ongoing, or permanent security staffing solutions to match your specific needs.',
      delay: 0.3
    },
    {
      icon: 'fas fa-search',
      title: 'Enhanced DBS checks',
      description: 'All security personnel undergo thorough background checks for your peace of mind.',
      delay: 0.4
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 support',
      description: 'Round-the-clock support and workforce management to ensure continuous security coverage.',
      delay: 0.5
    },
    {
      icon: 'fas fa-user-shield',
      title: 'Experienced professionals',
      description: 'Our security staff have extensive experience across various sectors and security situations.',
      delay: 0.6
    }
  ]

  return (
    <section id="why-choose" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#232d54] mb-4">Why Choose NANI for Security Staff?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide top-tier security professionals who are thoroughly vetted and trained to handle any situation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#ad4f68] transition-all duration-300 hover:shadow-lg group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: benefit.delay }}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="w-12 h-12 bg-[#ad4f68]/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#ad4f68] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <i className={`${benefit.icon} text-[#ad4f68] group-hover:text-white transition-colors duration-300`}></i>
                </motion.div>
                <h3 className="text-xl font-bold text-[#232d54]">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
