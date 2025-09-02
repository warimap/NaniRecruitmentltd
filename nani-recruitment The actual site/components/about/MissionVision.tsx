'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import Image from 'next/image';

// This component now accepts a color prop and a position prop
function AnimatedSphere(props: { position: [number, number, number]; color: string }) {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2} position={props.position}>
      <MeshDistortMaterial
        color={props.color}
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  )
}

function HeroBackgroundScene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[-10, 10, -5]} intensity={1} />
      {/* First sphere on the left with a lighter color */}
      <AnimatedSphere position={[-10, 0, -2]} color="#c9b6c9" />
      {/* Second sphere on the right with a darker color */}
      <AnimatedSphere position={[5, 0, -2]} color="#ad4f68" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </>
  )
}

export default function MissionVision() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const rightItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="mission-vision" className="relative min-h-screen py-16">
      {/* Background with Gradient and 3D Scene */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 8] }}>
            <HeroBackgroundScene />
          </Canvas>
        </div>
      </div>

      {/* Main Content (placed on top of the background) */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={{itemVariants}}>
              <h2 className="text-3xl font-bold text-navy">Our Mission</h2>
              {/* Updated color for the separator line to match the sphere colors */}
              <div className="h-1 w-16 bg-gradient-to-r from-[#c9b6c9] to-[#ad4f68] rounded-full my-6" />
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To provide the highest level of support services and staffing solutions at fair and competitive pricing, while creating safe workspaces and maintaining integrity, fairness, and honesty with all stakeholders.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that exceptional healthcare staffing is not just about filling positions—it is about creating meaningful connections that benefit patients, healthcare providers, and the professionals we place.
              </p>
            </motion.div>

            <motion.div variants={{rightItemVariants}}>
              <h2 className="text-3xl font-bold text-navy">Our Vision</h2>
              {/* Updated color for the separator line to match the sphere colors */}
              <div className="h-1 w-16 bg-gradient-to-r from-[#c9b6c9] to-[#ad4f68] rounded-full my-6" />
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To be a leading and trusted healthcare staffing partner and employer of choice—helping people and organizations grow, thrive, and achieve their goals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We envision a healthcare sector where staffing solutions contribute positively to patient outcomes, professional satisfaction, and organizational success—and we are committed to making that vision a reality.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
