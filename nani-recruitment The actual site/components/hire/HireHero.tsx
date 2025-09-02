'use client'

import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import SuccessModal from './SuccessModal'
import Image from 'next/image';

interface FormData {
  fullName: string
  companyName: string
  email: string
  phone: string
  staffType: string
  staffCount: string
  shifts: string[]
  startDate: string
  notes: string
}

interface FormErrors {
  [key: string]: string
}

export default function HireHero() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    staffType: '',
    staffCount: '',
    shifts: [],
    startDate: '',
    notes: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [showModal, setShowModal] = useState(false)

  const features = [
    {
      title: "Fully Vetted Professionals",
      description: "All our candidates undergo rigorous screening, including DBS checks, qualification verification, and reference checks.",
      icon: (
        <svg className="h-6 w-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: "Rapid Response",
      description: "We understand urgent staffing needs and can provide qualified professionals with minimal notice.",
      icon: (
        <svg className="h-6 w-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: "Tailored Staffing Solutions",
      description: "We match staff based on your specific requirements, ensuring the right fit for your organization's culture and needs.",
      icon: (
        <svg className="h-6 w-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    }
  ]

  const staffTypes = [
    "Nurses",
    "Support Workers",
    "Social Workers",
    "Cleaners",
    "Domestic Staff",
    "Other"
  ]

  const shiftOptions = [
    { id: "Day", label: "Day" },
    { id: "Night", label: "Night" },
    { id: "Weekend", label: "Weekend" },
    { id: "24/7", label: "24/7" }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      shifts: checked
        ? [...prev.shifts, value]
        : prev.shifts.filter(shift => shift !== value)
    }))

    // Clear shifts error when user selects an option
    if (errors.shifts) {
      setErrors(prev => ({ ...prev, shifts: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name'
    if (!formData.companyName.trim()) newErrors.companyName = 'Please enter your company name'
    if (!formData.email.trim()) newErrors.email = 'Please enter a valid email address'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address'
    if (!formData.phone.trim()) newErrors.phone = 'Please enter a valid phone number'
    if (!formData.staffType) newErrors.staffType = 'Please select a staff type'
    if (!formData.staffCount || parseInt(formData.staffCount) < 1) newErrors.staffCount = 'Please enter the number of staff needed'
    if (formData.shifts.length === 0) newErrors.shifts = 'Please select at least one shift requirement'
    if (!formData.startDate) newErrors.startDate = 'Please select a preferred start date'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real application, you would submit the form data to your server here
      setShowModal(true)

      // Reset form
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        staffType: '',
        staffCount: '',
        shifts: [],
        startDate: '',
        notes: ''
      })
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

  return (
    <>
      <section
        className="relative py-16 bg-gray-50"
      >
        <Image
          src="/hirestaff bg.png"
          alt="Staffing professionals background"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid md:grid-cols-2">
                {/* Left Column - Content */}
                <motion.div
                  className="bg-[rgba(26,35,66,0.9)] p-8 md:p-12 text-white"
                  variants={leftVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Hire Exceptional Staff Today</h2>
                  <div className="h-1 w-16 bg-white rounded-full mb-8" />

                  <p className="text-lg mb-8">
                    At NANI Recruitment, we understand that finding the right healthcare professionals is crucial for providing quality care. We connect you with fully compliant, highly qualified staff tailored to your specific needs.
                  </p>

                  <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {features.map((feature, index) => (
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
                          {feature.icon}
                        </motion.div>
                        <div className="ml-3">
                          <h3 className="text-xl font-semibold">{feature.title}</h3>
                          <p className="mt-1 text-gray-200">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="mt-12"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Need immediate assistance?</h3>
                    <p className="mb-4">Contact our staffing specialists directly:</p>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span className="ml-2">020 3576 0497</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right Column - Form */}
                <motion.div
                  className="p-8 md:p-12"
                  variants={rightVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-navy mb-6">Request Staff</h3>
                  <p className="text-gray-600 mb-8">Fill out the form below and our team will contact you within 24 hours to discuss your staffing needs.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          className={`w-full px-4 py-3 border rounded-md transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson ${
                            errors.fullName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          required
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="companyName" className="block mb-2 font-medium text-navy">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-md transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson ${
                            errors.companyName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          required
                        />
                        {errors.companyName && (
                          <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
                        )}
                      </div>
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
                          className={`w-full px-4 py-3 border rounded-md transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson ${
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
                          className={`w-full px-4 py-3 border rounded-md transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson ${
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
                        <label htmlFor="staffType" className="block mb-2 font-medium text-navy">
                          Type of Staff Needed <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="staffType"
                          name="staffType"
                          value={formData.staffType}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-md transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson ${
                            errors.staffType ? 'border-red-500' : 'border-gray-300'
                          }`}
                          required
                        >
                          <option value="" disabled>Select staff type</option>
                          {staffTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        {errors.staffType && (
                          <p className="text-red-500 text-sm mt-1">{errors.staffType}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="staffCount" className="block mb-2 font-medium text-navy">
                          Number of Staff <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          id="staffCount"
                          name="staffCount"
                          min="1"
                          value={formData.staffCount}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-md transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson ${
                            errors.staffCount ? 'border-red-500' : 'border-gray-300'
                          }`}
                          required
                        />
                        {errors.staffCount && (
                          <p className="text-red-500 text-sm mt-1">{errors.staffCount}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-navy">
                        Shift Requirements <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {shiftOptions.map(shift => (
                          <div key={shift.id} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`shift${shift.id}`}
                              value={shift.id}
                              checked={formData.shifts.includes(shift.id)}
                              onChange={handleCheckboxChange}
                              className="h-5 w-5 text-crimson rounded border-gray-300 focus:ring-crimson focus:ring-2"
                            />
                            <label htmlFor={`shift${shift.id}`} className="ml-2 text-gray-700">
                              {shift.label}
                            </label>
                          </div>
                        ))}
                      </div>
                      {errors.shifts && (
                        <p className="text-red-500 text-sm mt-1">{errors.shifts}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="startDate" className="block mb-2 font-medium text-navy">
                        Preferred Start Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-md transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson ${
                          errors.startDate ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                      />
                      {errors.startDate && (
                        <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="notes" className="block mb-2 font-medium text-navy">
                        Additional Notes
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-crimson/20 focus:border-crimson"
                        placeholder="Please provide any additional information about your staffing requirements..."
                      />
                    </div>

                    <div className="pt-4">
                      <motion.button
                        type="submit"
                        className="w-full md:w-auto bg-crimson hover:bg-crimson-dark text-white font-semibold py-3 px-8 rounded-md transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-crimson/40"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Request Staff
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  )
}