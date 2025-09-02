'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';

interface EnquiryCardsProps {
  onCardClick: (enquiryType: string) => void
}

export default function EnquiryCards({ onCardClick }: EnquiryCardsProps) {
  const enquiryTypes = [
    {
      type: "General",
      title: "General Enquiry",
      description: "Have a question about our services or need general information? We're happy to help.",
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
      )
    },
    {
      type: "Feedback",
      title: "Feedback",
      description: "We value your opinion. Share your experience with our services to help us improve.",
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
        </svg>
      )
    },
    {
      type: "Media",
      title: "Media & Press",
      description: "For media inquiries, press releases, or interview requests with our team.",
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
        </svg>
      )
    },
    {
      type: "Complaints",
      title: "Complaints",
      description: "We take all concerns seriously. Let us know if something hasn't met your expectations.",
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
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
    <section className="relative overflow-hidden mt-16 py-16 px-4 md:px-8">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact bg.jpg" // Replace with your image path
          alt="Contact us background"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {enquiryTypes.map((enquiry, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl overflow-hidden transition-all duration-300"
              variants={{cardVariants}}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="p-6">
                <motion.div 
                  className="h-16 w-16 rounded-full bg-gradient-to-r from-crimson -700 to-navy -500 flex items-center justify-center mx-auto mb-6"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  {enquiry.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-slate-800 text-center mb-3">
                  {enquiry.title}
                </h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {enquiry.description}
                </p>
                <div className="text-center">
                  <motion.button
                    onClick={() => onCardClick(enquiry.type)}
                    className="px-4 py-2 rounded-lg font-medium bg-white text-red-500 border border-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}