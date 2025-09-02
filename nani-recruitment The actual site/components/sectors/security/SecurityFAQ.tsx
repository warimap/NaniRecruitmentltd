'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image';

export default function SecurityFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "What qualifications do your security staff have?",
      answer: "All our security personnel are SIA licensed and undergo thorough background checks. Many have additional qualifications such as first aid training, conflict management, and specific industry experience. We match staff qualifications to your specific requirements."
    },
    {
      question: "How quickly can you provide security staff?",
      answer: "We pride ourselves on rapid response times. For emergency situations, we can often deploy security personnel within hours. For planned staffing, we recommend at least 48 hours' notice to ensure the best match for your requirements."
    },
    {
      question: "What types of security services do you offer?",
      answer: "We offer a comprehensive range of security services including residential security, commercial security, healthcare security, event security, CCTV monitoring, and night watch & patrol services. Our services can be customized to meet your specific security needs."
    },
    {
      question: "Do you provide both temporary and permanent security staff?",
      answer: "Yes, we offer flexible staffing solutions including temporary, ongoing, and permanent security personnel. Whether you need coverage for a one-time event or ongoing security presence, we can accommodate your requirements."
    },
    {
      question: "What is your vetting process for security personnel?",
      answer: "Our vetting process is thorough and includes verification of SIA licenses, employment history checks, character references, and enhanced DBS checks where required. We also conduct face-to-face interviews and assess communication skills to ensure our staff meet the highest standards."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#232d54] mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our security staffing services.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.button
                className="flex justify-between items-center w-full p-5 bg-white rounded-lg shadow-md text-left focus:outline-none transition-all duration-300 hover:shadow-lg"
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="text-lg font-bold text-[#232d54] pr-4">{faq.question}</h3>
                <motion.i 
                  className={`fas fa-chevron-down text-[#ad4f68] transition-transform duration-300 ${
                    openFAQ === index ? 'transform rotate-180' : ''
                  }`}
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    className="bg-white rounded-b-lg shadow-md mt-1 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-5">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
