'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "NANI Recruitment found me the perfect role within days of registering. The team really listened to what I was looking for and matched me with a care home where I've been working happily for over a year now.",
    name: "Sarah Johnson",
    role: "Registered Nurse, London",
    initials: "SJ"
  },
  {
    id: 2,
    quote: "The flexibility NANI offers is incredible. As a single parent, I need shifts that work around my childcare, and they've always accommodated my schedule while still providing me with enough hours.",
    name: "Michael Thomas",
    role: "Healthcare Assistant, Manchester",
    initials: "MT"
  },
  {
    id: 3,
    quote: "What sets NANI apart is their personal approach. They check in regularly to make sure I'm happy in my placement and always respond quickly if I have any questions or concerns.",
    name: "Amara Patel",
    role: "Support Worker, Birmingham",
    initials: "AP"
  }
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index)
  }

  const cardVariants = {
    enter: {
      x: 100,
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: -100,
      opacity: 0
    }
  }

  return (
    <div className="mt-12">
      <h3 className="text-xl font-semibold mb-6">What Our Staff Say</h3>
      
      <div className="relative h-64 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
            className="absolute inset-0"
          >
            <div className="bg-white bg-opacity-10 p-6 rounded-lg relative h-full">
              <div className="absolute -top-2 left-4 text-4xl text-crimson opacity-20 font-serif">
                
              </div>
              <p className="text-gray-100 mb-4 relative z-10 leading-relaxed">
                {testimonials[currentIndex].quote}
              </p>
              <div className="flex items-center mt-auto">
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="h-10 w-10 rounded-full bg-crimson flex items-center justify-center">
                    <span className="font-bold text-white text-sm">
                      {testimonials[currentIndex].initials}
                    </span>
                  </div>
                </motion.div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{testimonials[currentIndex].name}</p>
                  <p className="text-xs text-gray-300">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-crimson scale-150' 
                : 'bg-gray-400'
            }`}
            whileHover={{ scale: index === currentIndex ? 1.5 : 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  )
}
