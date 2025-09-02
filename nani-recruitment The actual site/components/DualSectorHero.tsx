// components/DualSectorHero.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// New components for the background
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

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
  );
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
  );
}

export default function DualSectorHero() {
  const [currentFace, setCurrentFace] = useState(0);

  // Auto-rotate the cube every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFace((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const photos = [
    "https://images.unsplash.com/photo-1676281050264-178eff38874a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY2FyZSUyMG51cnNlfGVufDF8fHx8MTc1NDEyNzY0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586529726010-2411a6bec3c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjYXJlJTIwaG9tZSUyMHN0YWZmfGVufDF8fHx8MTc1NDEyNzY0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1516841273335-e39b37888115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsc3xlbnwxfHx8fDE3NTQxMjc2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  return (
    <section className="relative min-h-screen">
      {/* Background with Gradient and 3D Scene */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 8] }}>
            <HeroBackgroundScene />
          </Canvas>
        </div>
      </div>

      {/* Main Content (placed on top of the background) */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-navy blue -800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Who We Are
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              NANI Recruitment partners closely with healthcare providers across the UK, ensuring the staff we place are not just qualified and experienced, but genuinely aligned with the highest standards of kindness, reliability, and patient-focused care. We believe that healthcare staffing is not simply about filling vacancies—it is about finding the right people who will enhance your team capabilities and contribute positively to patient outcomes.
            </motion.p>
          </motion.div>

          {/* Right Content - 3D Photo Cube */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-80 h-80 perspective-1000">
              {/* 3D Cube Container */}
              <motion.div
                className="relative w-full h-full transform-gpu preserve-3d"
                animate={{
                  rotateY: currentFace * 120,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut"
                }}
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Cube Faces */}
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 w-full h-full rounded-lg overflow-hidden shadow-xl"
                    style={{
                      transform: `rotateY(${index * 120}deg) translateZ(160px)`,
                      backfaceVisibility: "hidden"
                    }}
                  >
                    <div className="relative w-full h-64 md:h-80 lg:h-96">
  <Image
    src={photo}
    alt={`Care home professional ${index + 1}`}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover"
  />
</div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg mb-1">
                        {index === 0 && "Compassionate Care"}
                        {index === 1 && "Professional Excellence"}
                        {index === 2 && "Trusted Partners"}
                      </h3>
                      <p className="text-sm text-gray-200">
                        {index === 0 && "Elderly care specialists"}
                        {index === 1 && "Experienced healthcare team"}
                        {index === 2 && "Healthcare professionals"}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Floating indicators */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFace(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentFace === index
                        ? 'bg-[#ad4f68] shadow-lg transform scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Ambient lighting effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#ad4f68]/20 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}