'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';

export default function Values() {
  const values = [
    {
      title: "Put people first — always.",
      description: "We believe that healthcare is fundamentally about people. Every decision we make prioritizes the wellbeing of patients, healthcare professionals, and the organizations we serve. We recognize the humanity in everyone and treat each person with the dignity and respect they deserve.",
      icon: (
        <svg className="h-8 w-8 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      )
    },
    {
      title: "Uphold dignity, independence, privacy, and human rights.",
      description: "We respect the fundamental rights and freedoms of all service users and staff. We're committed to creating environments where everyone feels valued, heard, and empowered to make choices about their own lives and work.",
      icon: (
        <svg className="h-8 w-8 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
        </svg>
      )
    },
    {
      title: "Promote personal fulfillment and individual choice.",
      description: "We believe that everyone deserves the opportunity to grow, develop, and find meaning in their work. We support our candidates in finding roles that align with their values and career aspirations, and we help our clients build teams where each member can thrive.",
      icon: (
        <svg className="h-8 w-8 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: "Respect, reliability, and honesty in every relationship.",
      description: "Trust is the foundation of everything we do. We're committed to being reliable partners who deliver on our promises, communicate openly and honestly, and treat everyone with respect—regardless of their role, background, or circumstances.",
      icon: (
        <svg className="h-8 w-8 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    },
    {
      title: "Confidentiality and professionalism at every level.",
      description: "We understand the sensitive nature of healthcare and recruitment. We handle all information with the utmost care and discretion, maintaining the highest standards of professional conduct in everything we do.",
      icon: (
        <svg className="h-8 w-8 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      )
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  return (
    <section id="values" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-navy">Our Values</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-crimson to-crimson-dark rounded-full mx-auto my-6" />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our values are not just words on a page—they are the principles that guide every decision we make and every interaction we have.
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="flex items-start group"
                variants={{itemVariants}}
              >
                <motion.div 
                  className="mr-6 mt-1 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    color: "#ad4f68",
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  {value.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-crimson transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
