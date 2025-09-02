'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image';

export default function OfficeLocation() {
  const contactDetails = [
    {
      icon: (
        <svg className="h-6 w-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      title: "London Office",
      content: (
        <>
          203-205 The Vale Business Center<br/>
          The Vale Acton W3 7QS<br/>
          United Kingdom
        </>
      )
    },
    {
      icon: (
        <svg className="h-6 w-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      ),
      title: "Contact Number",
      content: (
        <>
          <p className="text-gray-600">020 3576 0497</p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <span className="text-sm font-medium text-navy">Recruitment:</span>
              <span className="ml-2 text-sm text-gray-600">option 1</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-navy">Booking:</span>
              <span className="ml-2 text-sm text-gray-600">option 2</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-navy">Payroll:</span>
              <span className="ml-2 text-sm text-gray-600">option 3</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-navy">Sales:</span>
              <span className="ml-2 text-sm text-gray-600">option 4</span>
            </div>
          </div>
        </>
      )
    },
    {
      icon: (
        <svg className="h-6 w-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Email",
      content: (
        <a href="mailto:info@nanirecruitment.co.uk" className="text-gray-600 hover:text-crimson transition-colors duration-300">
          info@nanirecruitment.co.uk
        </a>
      )
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div>
      <motion.h2 
        className="text-3xl font-bold text-navy mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Offices
      </motion.h2>
      
      <motion.div 
        className="bg-gray-50 rounded-2xl p-6 shadow-md mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {contactDetails.map((detail, index) => (
            <motion.div 
              key={index}
              className="flex items-start"
              variants={itemVariants}
            >
              <motion.div 
                className="flex-shrink-0 mt-1"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {detail.icon}
              </motion.div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-navy">{detail.title}</h3>
                <div className="text-gray-600 mt-1">
                  {detail.content}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Live Google Map */}
      <motion.div 
        className="rounded-2xl overflow-hidden shadow-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="aspect-video relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.743126880829!2d-0.2818987842302324!3d51.50020167963385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876007e0c8b0561%3A0xc39f8f41334e320d!2s203-205%20The%20Vale%20Business%20Centre%2C%20The%20Vale%2C%20London%20W3%207QS%2C%20UK!5e0!3m2!1sen!2ske!4v1682534598075!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
          
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps location of NANI Recruitment Ltd, London"
          ></iframe>
        </div>
      </motion.div>
    </div>
  )
}