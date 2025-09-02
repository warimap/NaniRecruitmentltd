'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image';

export default function ServicesForCandidates() {
  const services = [
    {
      title: "Accredited Training (CIDP)",
      description: "Access to professional development opportunities through our CIDP-accredited training programs, helping you stay current with industry standards and enhance your skills.",
      icon: (
        <svg className="h-6 w-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      )
    },
    {
      title: "DBS Application Support",
      description: "Comprehensive assistance with your Disclosure and Barring Service application, ensuring a smooth and efficient process that meets all compliance requirements.",
      icon: (
        <svg className="h-6 w-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    },
    {
      title: "Right to Work Verification",
      description: "Expert guidance through the right to work verification process, helping you navigate documentation requirements with ease and confidence.",
      icon: (
        <svg className="h-6 w-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      )
    },
    {
      title: "Self-employed Tax Return Guidance",
      description: "Clear advice and support for managing your tax obligations as a self-employed professional, helping you stay compliant and financially organized.",
      icon: (
        <svg className="h-6 w-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    },
    {
      title: "Payroll Services",
      description: "Efficient, accurate payroll processing that ensures you're paid correctly and on time, with transparent documentation and support for any questions.",
      icon: (
        <svg className="h-6 w-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
        </svg>
      )
    },
    {
      title: "PPE and Equipment Supply",
      description: "Access to necessary personal protective equipment and specialized tools, ensuring you have everything you need to perform your role safely and effectively.",
      icon: (
        <svg className="h-6 w-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
      )
    },
    {
      title: "Covid-19 Testing and Training",
      description: "Up-to-date resources and support for Covid-19 protocols, including testing arrangements and specialized training to ensure workplace safety.",
      icon: (
        <svg className="h-6 w-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "24/7 Candidate Support",
      description: "Round-the-clock assistance whenever you need it, ensuring you never feel alone in facing workplace challenges or administrative questions.",
      icon: (
        <svg className="h-6 w-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: "Timesheet Management",
      description: "Simple, efficient timesheet systems that make recording your hours straightforward, with support available if you encounter any issues.",
      icon: (
        <svg className="h-6 w-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
        </svg>
      )
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-navy">Our Services for Candidates</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-crimson to-crimson-dark rounded-full mx-auto my-6" />
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At NANI Recruitment, candidates do not just get jobs—they get long-term support, resources, and guidance throughout their career journey. We are committed to helping healthcare professionals thrive, both professionally and personally.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  borderColor: "#ad4f68",
                  boxShadow: "0 10px 25px -5px rgba(173, 79, 104, 0.1), 0 8px 10px -6px rgba(173, 79, 104, 0.1)",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="ml-3 text-lg font-semibold text-navy">{service.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}