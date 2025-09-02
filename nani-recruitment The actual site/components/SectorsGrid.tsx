'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function SectorsGrid() {
  const sectors = [
    {
      href: "/sectors/healthcare",
      image: "/health.jpg",
      title: "Healthcare",
      description: "Qualified nurses, carers, and support workers for care homes and private clients."
    },
    {
      href: "/sectors/cleaning",
      image: "/cleaning bg.jpg",
      title: "Cleaning & Domestic",
      description: "Reliable cleaning staff for commercial and residential properties."
    },
    {
      href: "/sectors/security",
      image: "/security1.png",
      title: "Security",
      description: "Trained security personnel for construction sites and commercial premises."
    },
    {
      href: "/sectors/logistic",
      image: "/truck-driver-delivery-boxes.jpg",
      title: "Logistics",
      description: "Warehouse staff, drivers, and logistics support for your supply chain needs."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="py-16 bg-gradient-to-r from-navy to-navy-deep relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Sectors We Cover</h2>
          <p className="text-xl font-bold text-crimson max-w-2xl mx-auto">Specialized staffing solutions across key industries</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              variants={{itemVariants}}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Link href={sector.href} className="block">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-2">{sector.title}</h3>
                    <p className="text-gray-600 mb-4">{sector.description}</p>
                    <span className="text-crimson font-medium hover:text-crimson-dark transition-colors duration-300">
                      Explore &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link 
            href="/sectors" 
            className="inline-block bg-navy hover:bg-navy-deep text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            View All Sectors
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
