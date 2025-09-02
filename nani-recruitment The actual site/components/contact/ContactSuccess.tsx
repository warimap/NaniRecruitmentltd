'use client'

import { motion, AnimatePresence, Easing, easeOut } from 'framer-motion'
import Image from 'next/image';

interface ContactSuccessProps {
  isVisible: boolean
}

export default function ContactSuccess({ isVisible }: ContactSuccessProps) {
  const messageVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1]  // this is the exact cubic-bezier curve for easeOut
 // <-- use imported easing function here
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
          variants={{messageVariants}}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <motion.svg
                className="h-5 w-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                variants={{iconVariants}}
                initial="hidden"
                animate="visible"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </motion.svg>
            </div>
            <div className="ml-3">
              <motion.p
                className="text-sm font-medium text-green-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Message sent successfully!
              </motion.p>
              <motion.p
                className="mt-1 text-sm text-green-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Thank you for contacting us. Our team will respond to your enquiry within 24 hours.
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
