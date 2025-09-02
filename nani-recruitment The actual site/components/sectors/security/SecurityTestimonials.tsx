'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image';

export default function SecurityTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "NANI Recruitment provided exceptional security staff for our annual corporate event. The guards were professional, attentive, and helped everything run smoothly.",
      name: "Jane Doe",
      position: "Events Manager, TechCorp Ltd",
      initials: "JD",
      bgColor: "bg-[#232d54]",
      rating: 5
    },
    {
      quote: "We've been using NANI for our residential complex security for over two years. Their staff are reliable, courteous to residents, and extremely vigilant.",
      name: "Michael Smith",
      position: "Property Manager, Lakeside Residences", 
      initials: "MS",
      bgColor: "bg-[#ad4f68]",
      rating: 5
    },
    {
      quote: "The healthcare security specialists from NANI have been instrumental in maintaining a safe environment for our patients and staff. Their training in healthcare settings really shows.",
      name: "Dr. Amanda Johnson",
      position: "Director, Westside Medical Center",
      initials: "AJ", 
      bgColor: "bg-[#232c54]",
      rating: 4.5
    }
  ]

  const handleDotClick = (index: number) => {
    setCurrentTestimonial(index)
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>)
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-400"></i>)
    }

    return stars
  }

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/security cctv.png" // Replace with your image path
        alt="Abstract security background"
        fill
          priority
          sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
      />
      <div className="absolute inset-0 bg-black opacity-10"></div> {/* Subtle overlay */}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-1 after:bg-[#ad4f68] after:w-20">What Our Clients Say</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Hear from businesses and organizations that trust NANI Recruitment for their security staffing needs.
          </p>
        </motion.div>
        
        <div className="testimonial-carousel relative">
          <motion.div 
            className="flex overflow-hidden"
            animate={{ x: `-${currentTestimonial * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <motion.div 
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md h-full max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <motion.div 
                      className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold text-xl`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {testimonial.initials}
                    </motion.div>
                    <div className="ml-4">
                      <h4 className="font-bold text-[#232d54]">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
                  currentTestimonial === index ? 'bg-[#ad4f68]' : 'bg-gray-300'
                }`}
                onClick={() => handleDotClick(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}