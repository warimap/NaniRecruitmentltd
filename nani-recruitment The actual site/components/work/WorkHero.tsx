'use client'

import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import TestimonialCarousel from './TestimonialCarousel'
import SuccessMessage from './SuccessMessage'
import Image from 'next/image';

interface FormData {
  fullName: string
  email: string
  phone: string
  role: string
  availability: string
  location: string
  notes: string
  gdprConsent: boolean
}

interface FormErrors {
  [key: string]: string
}

export default function WorkHero() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    availability: '',
    location: '',
    notes: '',
    gdprConsent: false
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [showSuccess, setShowSuccess] = useState(false)

  const roles = [
    "Nurse",
    "Support Worker",
    "Social Worker",
    "Domestic Staff",
    "Cleaner",
    "Healthcare Assistant"
  ]

  const availabilityOptions = [
    "Immediate",
    "1 week",
    "2 weeks",
    "Flexible"
  ]

  const benefits = [
    {
      title: "Flexible Working Options",
      description: "Choose shifts that fit your lifestyle, with full-time, part-time, and temporary positions available.",
      icon: (
        <svg className="h-6 w-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: "Competitive Pay Rates",
      description: "Enjoy above-average compensation with weekly pay options and holiday pay.",
      icon: (
        <svg className="h-6 w-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      )
    },
    {
      title: "Free Training & Development",
      description: "Access to professional development opportunities and specialized healthcare training.",
      icon: (
        <svg className="h-6 w-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
      )
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement
      setFormData(prev => ({ ...prev, [name]: checkbox.checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name'
    if (!formData.email.trim()) newErrors.email = 'Please enter a valid email address'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address'
    if (!formData.phone.trim()) newErrors.phone = 'Please enter a valid phone number'
    if (!formData.role) newErrors.role = 'Please select a role'
    if (!formData.availability) newErrors.availability = 'Please select your availability'
    if (!formData.location.trim()) newErrors.location = 'Please enter your location preference'
    if (!formData.gdprConsent) newErrors.gdprConsent = 'You must consent to proceed'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      setShowSuccess(true)
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          role: '',
          availability: '',
          location: '',
          notes: '',
          gdprConsent: false
        })
        setShowSuccess(false)
      }, 5000)
    }
  }

  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

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
    <section className="relative py-16 px-4 md:px-8">
      <Image
        src="/find work bg.jpg"
        alt="Healthcare professionals working together"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2">
            {/* Left Column - Form */}
            <motion.div 
              className="p-8 md:p-12"
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Looking for Work in Healthcare? We have Got You.
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                NANI Recruitment connects passionate healthcare professionals with meaningful roles in care homes, supported living facilities, and NHS settings. Let us help you find your perfect position.
              </p>

              <SuccessMessage isVisible={showSuccess} />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block mb-2 font-medium text-navy">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-md transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-navy">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-md transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium text-navy">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-md transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="role" className="block mb-2 font-medium text-navy">
                      Role Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-md transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson ${
                        errors.role ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    >
                      <option value="" disabled>Select a role</option>
                      {roles.map(role => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                    {errors.role && (
                      <p className="text-red-500 text-sm mt-1">{errors.role}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="availability" className="block mb-2 font-medium text-navy">
                      Availability <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-md transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson ${
                        errors.availability ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    >
                      <option value="" disabled>Select availability</option>
                      {availabilityOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.availability && (
                      <p className="text-red-500 text-sm mt-1">{errors.availability}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="location" className="block mb-2 font-medium text-navy">
                    Location Preference <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City, region, or 'Anywhere in UK'"
                    className={`w-full px-4 py-3 border rounded-md transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson ${
                      errors.location ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="notes" className="block mb-2 font-medium text-navy">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson"
                    placeholder="Tell us about your experience, qualifications, or specific preferences..."
                  />
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="gdprConsent"
                      name="gdprConsent"
                      type="checkbox"
                      checked={formData.gdprConsent}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-crimson rounded border-gray-300 focus:ring-crimson focus:ring-2"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="gdprConsent" className="text-gray-600">
                      I consent to NANI Recruitment processing my data to contact me about job opportunities. <span className="text-red-500">*</span>
                    </label>
                    {errors.gdprConsent && (
                      <p className="text-red-500 text-sm mt-1">{errors.gdprConsent}</p>
                    )}
                  </div>
                </div>
                
                <div className="pt-4">
                  <motion.button
                    type="submit"
                    className="w-full md:w-auto bg-crimson hover:bg-crimson-dark text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-crimson/40 relative overflow-hidden"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply Now
                  </motion.button>
                </div>
              </form>
            </motion.div>
            
            {/* Right Column - Content */}
            <motion.div 
              className="bg-[rgba(26,35,66,0.9)] p-8 md:p-12 text-white"
              variants={rightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Why Join NANI Recruitment?</h2>
              
              <motion.div 
                className="space-y-6 mb-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {benefits.map((benefit, index) => (
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
                      {benefit.icon}
                    </motion.div>
                    <div className="ml-3">
                      <h3 className="text-xl font-semibold">{benefit.title}</h3>
                      <p className="mt-1 text-gray-200">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <TestimonialCarousel />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}