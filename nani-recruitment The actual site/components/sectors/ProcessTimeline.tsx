'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';

export default function ProcessTimeline() {
  const employerSteps = [
    {
      title: 'Submit Your Request',
      description: 'Tell us your staffing needs via phone, email, or our online form.'
    },
    {
      title: 'We Find the Right Staff',
      description: 'We match your requirements with our vetted professionals.'
    },
    {
      title: 'Staff Arrive Ready to Work',
      description: 'Your temporary or permanent staff arrive fully prepared.'
    }
  ]

  const jobSeekerSteps = [
    {
      title: 'Register With Us',
      description: 'Complete our simple registration and submit your documents.'
    },
    {
      title: 'Get Matched',
      description: 'We match your skills and availability with suitable roles.'
    },
    {
      title: 'Start Working',
      description: 'Begin your new role with our full support throughout.'
    }
  ]

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/work bg.jpg"
          alt="Abstract timeline background"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">Simple process for clients and candidates</p>
        </motion.div>
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-between mb-8">
            <h3 className="text-2xl font-bold text-white text-left w-1/2 px-4">For Employers</h3>
            <h3 className="text-2xl font-bold text-white text-right w-1/2 px-4">For Job Seekers</h3>
          </div>
          
          <div className="timeline relative max-w-6xl mx-auto">
            {/* Central timeline line */}
            <div className="absolute w-1.5 bg-[#ad4f68] top-0 bottom-0 left-1/2 transform -translate-x-1/2 rounded-full"></div>
            
            {/* Timeline steps */}
            {employerSteps.map((step, index) => (
              <div key={`employer-${index}`} className="relative">
                {/* Employer step (left side) */}
                <motion.div 
                  className="timeline-container left relative w-1/2 pr-10 pb-10"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
                >
                  <div className="timeline-content bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-100 relative">
                    <div className="absolute top-6 right-0 w-0 h-0 border-l-[15px] border-l-white/90 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent transform translate-x-full"></div>
                    <h4 className="text-lg font-semibold text-[#232d54] mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute w-6 h-6 bg-white border-4 border-[#624d69] rounded-full top-6 right-0 transform translate-x-1/2 z-10"></div>
                </motion.div>
                
                {/* Job seeker step (right side) */}
                {jobSeekerSteps[index] && (
                  <motion.div 
                    className="timeline-container right absolute top-0 left-1/2 w-1/2 pl-10 pb-10"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
                  >
                    <div className="timeline-content bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-100 relative">
                      <div className="absolute top-6 left-0 w-0 h-0 border-r-[15px] border-r-white/90 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent transform -translate-x-full"></div>
                      <h4 className="text-lg font-semibold text-[#232d54] mb-2">{jobSeekerSteps[index].title}</h4>
                      <p className="text-gray-600">{jobSeekerSteps[index].description}</p>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute w-6 h-6 bg-white border-4 border-[#624d69] rounded-full top-6 left-0 transform -translate-x-1/2 z-10"></div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a 
            href="/hire" 
            className="bg-[#ad4f68] text-white font-bold py-3 px-8 rounded-full text-center hover:bg-[#8e3d55] transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Staff Today
          </motion.a>
          <motion.a 
            href="/work" 
            className="bg-[#232d54] text-white font-bold py-3 px-8 rounded-full text-center hover:bg-[#1a2342] transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Find Work Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}