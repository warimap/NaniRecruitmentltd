'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image';

export default function WhoWeAre() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  } as Variants; // Explicitly tell TypeScript this is a Variants object

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
  } as Variants; // Explicitly tell TypeScript this is a Variants object

  return (
    <section id="who-we-are" className="py-16 bg-white">
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
              variants={itemVariants}
            >
              Who We Are
            </motion.h2>
            <motion.div 
              className="h-1 w-16 bg-gradient-to-r from-crimson to-crimson-dark rounded-full my-6"
              variants={itemVariants}
            />
            
            <motion.p 
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              NANI Recruitment partners closely with healthcare providers across the UK, ensuring the staff we place are not just qualified and experienced, but genuinely aligned with the highest standards of kindness, reliability, and patient-focused care.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              We understand that healthcare staffing is n0t simply about filling vacancies—it is about finding the right people who will enhance your team is capabilities and contribute positively to patient outcomes. That is why we take the time to understand both our clients specific needs and our candidates unique strengths.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              variants={itemVariants}
            >
              Compliance forms a core pillar of our approach. We strictly adhere to industry standards and regulations, conducting thorough vetting processes to guarantee safe, competent placements every time. When you work with NANI, you can trust that we have done our due diligence—because we believe excellence in healthcare begins with excellence in recruitment.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}