'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HealthcareRoles() {
  const roles = [
    {
      icon: 'fas fa-user-nurse',
      title: 'Registered Nurses',
      description: 'Qualified RGNs for all care settings.',
      bgColor: 'bg-[#ad4f68]',
      iconColor: 'text-[#ad4f68]',
      delay: 0,
    },
    {
      icon: 'fas fa-hands-helping',
      title: 'Healthcare Assistants',
      description: 'Compassionate HCAs for daily care.',
      bgColor: 'bg-[#624d69]',
      iconColor: 'text-[#624d69]',
      delay: 0.1,
    },
    {
      icon: 'fas fa-bed',
      title: 'Support Workers',
      description: 'Dedicated support for vulnerable adults.',
      bgColor: 'bg-[#232d54]',
      iconColor: 'text-[#232d54]',
      delay: 0.2,
    },
    {
      icon: 'fas fa-home',
      title: 'Live-in Carers',
      description: "24/7 care in the client's own home.",
      bgColor: 'bg-[#ad4f68]',
      iconColor: 'text-[#ad4f68]',
      delay: 0.3,
    },
  ]

  const floatTransition = {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut',
  }

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    hoverFloat: {
      y: [0, -10, 0],
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: floatTransition,
    },
    hoverSimple: {
      y: -5,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: { duration: 0.3 },
    },
  }

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/health nurses.jpg"
          alt="Abstract healthcare background"
          width={1200}
          height={400}
          className="object-cover"
          priority
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
          <h2 className="text-3xl font-bold text-white mb-4">
            Healthcare Staffing Solutions
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Specialized healthcare professionals for your facility
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              className="role-card bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg cursor-pointer"
              variants={{cardVariants}}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: role.delay }}
              whileHover={index === 0 ? 'hoverFloat' : 'hoverSimple'}
            >
              <div
                className={`w-14 h-14 ${role.bgColor} bg-opacity-10 rounded-full flex items-center justify-center mb-4`}
              >
                <i className={`${role.icon} ${role.iconColor} text-2xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-[#232d54] mb-2">
                {role.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{role.description}</p>
              <div className="flex space-x-2">
                <motion.a
                  href="/hire"
                  className="text-sm bg-[#ad4f68] text-white font-medium py-2 px-4 rounded-full hover:bg-[#8e3d55] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire
                </motion.a>
                <motion.a
                  href="/work"
                  className="text-sm border border-[#ad4f68] text-[#ad4f68] font-medium py-2 px-4 rounded-full hover:bg-[#ad4f68] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="/sectors/healthcare"
            className="inline-block bg-[#232d54] text-white font-bold py-3 px-8 rounded-full hover:bg-[#1a2342] transition-all duration-300"
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Healthcare Roles
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
