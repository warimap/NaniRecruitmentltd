'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="py-16 bg-navy text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you need staff or you are looking for work, our team is here to help 24/7.
          </p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/hire" 
                className="inline-block bg-crimson hover:bg-crimson-dark text-white font-bold py-3 px-8 rounded-full text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Hire Staff
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/work" 
                className="inline-block bg-white text-navy hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Find Work
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
