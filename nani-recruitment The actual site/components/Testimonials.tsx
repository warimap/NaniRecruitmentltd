'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Jane Cooper",
      role: "Care Home Manager, London",
      initials: "JC",
      color: "bg-[#852f49]",
      rating: 5,
      content: "Nani Recruitment has been our go-to agency for temporary staff. Their nurses are always professional and arrive on time. They've saved us during many staffing crises."
    },
    {
      name: "Robert Smith",
      role: "Facility Manager, Birmingham",
      initials: "RS",
      color: "bg-[#ad4f68]",
      rating: 5,
      content: "The cleaning staff provided by Nani have been exceptional. They're thorough, reliable, and our residents always comment on how friendly they are. Highly recommended."
    },
    {
      name: "Alice Morgan",
      role: "Healthcare Assistant, Manchester",
      initials: "AM",
      color: "bg-[#852f49]",
      rating: 5,
      content: "As a carer, I appreciate how Nani finds me regular work that fits my schedule. The team is supportive and payments are always on time. It's great to feel valued."
    },
    {
      name: "David Wilson",
      role: "Head of Nursing, Bristol",
      initials: "DW",
      color: "bg-[#ad4f68]",
      rating: 5,
      content: "Nani's team understands our specific needs and consistently provides high-quality nurses. Their service is efficient and professional, making them an invaluable partner."
    }
  ]

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  // To make the slider work properly, we need to show three testimonials at a time
  // This calculates the indices for the three testimonials to display
  const visibleTestimonials = [
    testimonials[currentTestimonial],
    testimonials[(currentTestimonial + 1) % testimonials.length],
    testimonials[(currentTestimonial + 2) % testimonials.length]
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#852f49] mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Trusted by care homes and professionals across the UK</p>
        </motion.div>
        
        <div className="relative">
          <motion.div 
            className="flex gap-8 justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence initial={false} custom={1}>
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index} // Use index as key since the content is consistent
                  className="bg-gray-50 p-8 rounded-lg shadow-sm w-full md:w-1/3 flex flex-col min-h-[250px]"
                  variants={variants}
                  custom={1}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-xl mr-4`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#852f49]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 flex-grow">{testimonial.content}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 sm:px-0">
            <button 
              onClick={handlePrev} 
              className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <i className="fas fa-chevron-left text-2xl text-[#852f49]" />
            </button>
            <button 
              onClick={handleNext} 
              className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <i className="fas fa-chevron-right text-2xl text-[#852f49]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}