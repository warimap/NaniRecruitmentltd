'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image';

export default function CleaningCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const benefits = [
    'Fully vetted, experienced staff',
    '24/7 support and staff availability',
    'Specialized healthcare cleaning training',
    'Flexible contracts with no long-term commitment',
    'Competitive rates with quality guarantee'
  ]

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="max-w-4xl mx-auto bg-gray-50 rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row">
            <motion.div 
              className="md:w-1/2 p-8 md:p-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#232d54] mb-4">Need reliable cleaners fast?</h2>
              <p className="text-gray-600 mb-6">
                Our team can help you find the right cleaning and domestic staff for your facility. Fill out the form and we will be in touch within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad4f68] transition-colors duration-200" 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad4f68] transition-colors duration-200" 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad4f68] transition-colors duration-200" 
                    type="tel" 
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
                    Requirements
                  </label>
                  <textarea 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad4f68] transition-colors duration-200" 
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Tell us about your staffing needs"
                    required
                  />
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full py-3 rounded-lg font-semibold text-white text-lg shadow-lg bg-gradient-to-r from-[#624d69] to-[#ad4f68] hover:from-[#4a3a52] hover:to-[#8e3d55] transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Staff Now
                </motion.button>
              </form>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 bg-gradient-to-br from-[#624d69] to-[#ad4f68] p-8 md:p-12 text-white flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6">Why clients choose us</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  >
                    <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p className="font-semibold text-xl mb-2">Need urgent help?</p>
                <p className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>020 3576 0497</span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
