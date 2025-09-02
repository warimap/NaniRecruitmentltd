'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Users, CheckCircle, Briefcase, UserCheck, Play } from 'lucide-react';
import Image from 'next/image';

export default function HowItWorks() {
  const employerSteps = [
    {
      icon: FileText,
      title: 'Submit Your Request',
      description: 'Tell us your staffing needs via phone, email, or our online form.',
      color: '#ad4f68'
    },
    {
      icon: Users,
      title: 'We Find the Right Staff',
      description: 'We match your requirements with our vetted professionals.',
      color: '#624d69'
    },
    {
      icon: CheckCircle,
      title: 'Staff Arrive Ready to Work',
      description: 'Your temporary or permanent staff arrive fully prepared.',
      color: '#232d54'
    }
  ];

  const jobSeekerSteps = [
    {
      icon: UserCheck,
      title: 'Register With Us',
      description: 'Complete our simple registration and submit your documents.',
      color: '#ad4f68'
    },
    {
      icon: Briefcase,
      title: 'Get Matched',
      description: 'We match your skills and availability with suitable roles.',
      color: '#624d69'
    },
    {
      icon: Play,
      title: 'Start Working',
      description: 'Begin your new role with our full support throughout.',
      color: '#232d54'
    }
  ];

  return (
   <section className="py-16 relative overflow-hidden min-h-[600px]">

  {/* Background image */}
 <div className="absolute inset-0 -z-10">
  <Image
    src="/Timeline background.png"
    alt="Background"
    fill
    className="object-cover opacity-30"
    priority
  />
</div>


      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-[#ad4f68] rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-[#624d69] rounded-full"
          animate={{
            y: [0, 20, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#232d54] mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple process for clients and candidates
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:block mb-16">
          <div className="flex justify-between mb-12">
            <motion.h3
              className="text-2xl font-bold text-[#232d54] w-1/2 text-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              For Employers
            </motion.h3>
            <motion.h3
              className="text-2xl font-bold text-[#232d54] w-1/2 text-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              For Job Seekers
            </motion.h3>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#ad4f68] via-[#624d69] to-[#232d54] rounded-full"></div>

            {/* Timeline items */}
            <div className="space-y-16">
              {employerSteps.map((employerStep, index) => {
                const jobSeekerStep = jobSeekerSteps[index];
                return (
                  <div key={index} className="relative flex items-center">
                    {/* Employer side (left) */}
                    <motion.div
                      className="w-5/12 pr-8"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center mb-4">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                            style={{ backgroundColor: employerStep.color }}
                          >
                            <employerStep.icon className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="text-lg font-semibold text-[#232d54]">{employerStep.title}</h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{employerStep.description}</p>
                      </motion.div>
                    </motion.div>

                    {/* Central timeline node */}
                    <motion.div
                      className="absolute left-1/2 transform -translate-x-1/2 z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className="w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                        style={{ backgroundColor: employerStep.color }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </motion.div>

                    {/* Job seeker side (right) */}
                    <motion.div
                      className="w-5/12 pl-8"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center mb-4">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                            style={{ backgroundColor: jobSeekerStep.color }}
                          >
                            <jobSeekerStep.icon className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="text-lg font-semibold text-[#232d54]">{jobSeekerStep.title}</h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{jobSeekerStep.description}</p>
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="space-y-12">
            {/* Employers */}
            <div>
              <motion.h3
                className="text-2xl font-bold text-[#232d54] text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                For Employers
              </motion.h3>
              <div className="space-y-6">
                {employerSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                        style={{ backgroundColor: step.color }}
                      >
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-[#232d54]">{step.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Job Seekers */}
            <div>
              <motion.h3
                className="text-2xl font-bold text-[#232d54] text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                For Job Seekers
              </motion.h3>
              <div className="space-y-6">
                {jobSeekerSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                        style={{ backgroundColor: step.color }}
                      >
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-[#232d54]">{step.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center sm:gap-[300px] mt-12"
        >
          <Link href="/hire" className="flex-1 sm:flex-none">
            <motion.button
              className="bg-[#ad4f68] hover:bg-[#8e3d55] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto mx-auto block"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Staff Today
            </motion.button>
          </Link>
          <Link href="/work" className="flex-1 sm:flex-none">
            <motion.button
              className="bg-[#232d54] hover:bg-[#1a2342] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto mx-auto block"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Find Work Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}