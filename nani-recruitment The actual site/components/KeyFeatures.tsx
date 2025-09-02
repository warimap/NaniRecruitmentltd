'use client';

import { motion } from 'framer-motion';
import { Clock, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function KeyFeatures() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock staffing solutions for your urgent needs.",
      color: "#ad4f68", // crimson
      delay: 0.1
    },
    {
      icon: Shield,
      title: "DBS-Checked Staff",
      description: "All our candidates are thoroughly vetted and DBS-checked.",
      color: "#624d69", // crimson-dark
      delay: 0.3
    },
    {
      icon: Zap,
      title: "Quick Turnaround",
      description: "Staff can be placed within hours of your request.",
      color: "#232d54", // navy
      delay: 0.5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-[#ad4f68] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-16 h-16 bg-[#624d69] rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#232d54] mb-4">
            Why Choose Nani Recruitment?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver exceptional staffing solutions with unmatched reliability and professionalism.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer perspective-1000"
              variants={{itemVariants}}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.05
              }}
            >
              <div className="text-center p-8 rounded-2xl bg-white shadow-lg transform-gpu transition-all duration-500 group-hover:shadow-2xl relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `linear-gradient(135deg, ${feature.color}, transparent)` }}
                />

                {/* Icon container with 3D effect */}
                <motion.div
                  className="relative z-10"
                  whileHover={{ rotateY: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transform-gpu transition-all duration-500 group-hover:scale-110 shadow-lg"
                    style={{ backgroundColor: feature.color }}
                  >
                    <feature.icon className="text-white h-8 w-8" />
                  </div>
                </motion.div>

                <div className="relative z-10">
                  <motion.h3
                    className="text-xl font-bold mb-3 text-[#232d54] transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-200 transition-all duration-500"></div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gray-300 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${10 + i * 20}%`
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/contact" passHref>
            <motion.button
              className="bg-gradient-to-r from-[#ad4f68] to-[#624d69] hover:from-[#8e3d55] hover:to-[#4a3a52] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}