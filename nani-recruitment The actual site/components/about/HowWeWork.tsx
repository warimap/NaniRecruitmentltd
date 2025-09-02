'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';

export default function HowWeWork() {
  const features = [
    {
      title: "Thorough Vetting",
      description: "Every candidate undergoes comprehensive screening, including qualifications verification, reference checks, and compliance with all regulatory requirements.",
      icon: (
        <svg className="h-10 w-10 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    },
    {
      title: "Ongoing Communication",
      description: "We maintain regular contact with both clients and candidates, ensuring expectations are met and addressing any concerns promptly and effectively.",
      icon: (
        <svg className="h-10 w-10 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
        </svg>
      )
    },
    {
      title: "Tailored Matching",
      description: "We take time to understand each client's unique culture and requirements, ensuring we match them with professionals who will integrate seamlessly into their teams.",
      icon: (
        <svg className="h-10 w-10 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      )
    },
    {
      title: "Responsive Support",
      description: "Our 24/7 support system ensures that both clients and candidates can reach us whenever they need assistance, reflecting our commitment to exceptional service.",
      icon: (
        <svg className="h-10 w-10 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="how-we-work" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-navy"
              variants={{itemVariants}}
            >
              How We Work
            </motion.h2>
            <motion.div 
              className="h-1 w-16 bg-gradient-to-r from-crimson to-crimson-dark rounded-full my-6"
              variants={{itemVariants}}
            />
            
            <motion.p 
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              variants={{itemVariants}}
            >
              At NANI Recruitment, we blend strategic thinking with genuine compassion. We understand that healthcare professionals thrive in adaptable, stable work environments, which is why we tailor our approach to each individual career aspirations and life circumstances.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              variants={{itemVariants}}
            >
              What sets us apart is our personal touch. Our management team stays actively connected to our staff—listening, responding, and providing real support when it matters most. We are accessible when you need us, whether that is at 9 AM or 9 PM.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 mb-12 leading-relaxed"
              variants={{itemVariants}}
            >
              This foundation of trust translates directly into the quality of care delivered by our candidates. When healthcare professionals feel valued and supported, they bring their best selves to work—and that makes all the difference to the people in their care.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                variants={{cardVariants}}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(173, 79, 104, 0.1), 0 8px 10px -6px rgba(173, 79, 104, 0.1)",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="ml-4 text-xl font-semibold text-navy">{feature.title}</h3>
                </div>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
