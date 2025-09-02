'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ContactSuccess from './ContactSuccess'
import Image from 'next/image';

interface FormData {
  fullName: string
  email: string
  phone: string
  enquiryType: string
  message: string
  gdprConsent: boolean
}

interface FormErrors {
  [key: string]: string
}

interface ContactFormProps {
  selectedEnquiryType?: string
}

export default function ContactForm({ selectedEnquiryType }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    enquiryType: selectedEnquiryType || '',
    message: '',
    gdprConsent: false
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [showSuccess, setShowSuccess] = useState(false)

  const enquiryTypes = [
    "General",
    "Feedback", 
    "Media",
    "Complaints"
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
    if (!formData.enquiryType) newErrors.enquiryType = 'Please select an enquiry type'
    if (!formData.message.trim()) newErrors.message = 'Please enter your message'
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
          enquiryType: '',
          message: '',
          gdprConsent: false
        })
        setShowSuccess(false)
      }, 5000)
    }
  }

  return (
    <div id="contact-form-section">
      <motion.h2 
        className="text-3xl font-bold text-navy mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>
      
      <ContactSuccess isVisible={showSuccess} />
      
      <motion.form 
        onSubmit={handleSubmit} 
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
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
            className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson ${
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
              className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson ${
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
              Phone Number (optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="enquiryType" className="block mb-2 font-medium text-navy">
            Enquiry Type <span className="text-red-500">*</span>
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson ${
              errors.enquiryType ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          >
            <option value="" disabled>Select enquiry type</option>
            {enquiryTypes.map(type => (
              <option key={type} value={type}>{type} Enquiry</option>
            ))}
          </select>
          {errors.enquiryType && (
            <p className="text-red-500 text-sm mt-1">{errors.enquiryType}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-2 font-medium text-navy">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
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
              I consent to NANI Recruitment processing my data to respond to my enquiry. <span className="text-red-500">*</span>
            </label>
            {errors.gdprConsent && (
              <p className="text-red-500 text-sm mt-1">{errors.gdprConsent}</p>
            )}
          </div>
        </div>
        
        <div className="pt-4">
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-crimson to-crimson-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-crimson/40"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </div>
      </motion.form>
    </div>
  )
}
