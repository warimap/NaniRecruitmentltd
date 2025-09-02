'use client'

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

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

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function TermsAndConditions() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const currentSections = sectionsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('animate-in');
          } else {
            (entry.target as HTMLElement).classList.remove('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    currentSections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      currentSections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const addToRef = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-[#c9b6c9] to-white overflow-hidden">
        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 8] }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[-10, 10, -5]} intensity={1} />
            <AnimatedSphere position={[-10, 0, -2]} color="#ad4f68" />
            <AnimatedSphere position={[5, 0, -2]} color="#c9b6c9" />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
          </Canvas>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <motion.header
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1a2342] mb-2">Terms and Conditions</h1>
            <p className="text-sm text-gray-600">Last updated: January 15, 2025</p>
          </motion.header>

          <motion.nav
            className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm mb-12 border border-gray-200"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-[#1a2342] mb-3">Table of Contents</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
              {[
                { id: "payment-fees", label: "1. Payment & Fees" },
                { id: "staff-engagement", label: "2. Staff Engagement & Responsibilities" },
                { id: "working-conditions", label: "3. Working Conditions & Compliance" },
                { id: "liability-indemnity", label: "4. Liability & Indemnity" },
                { id: "cancellation-policy", label: "5. Cancellation & Replacement Policy" },
                { id: "data-protection", label: "6. Data Protection & Confidentiality" },
                { id: "termination-enforcement", label: "7. Termination & Legal Enforcement" },
                { id: "governing-laws", label: "8. Governing Laws" },
              ].map((item) => (
                <li key={item.id}>
                  <Link href={`#${item.id}`} className="hover:text-[#ad4f68] transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <main className="space-y-12">
            <motion.section
              id="payment-fees"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">1. Payment & Fees</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Payment Terms:</strong> Payments must be made within 14 days from the invoice date.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Late Payments:</strong> Late payments incur a 5% daily interest charge on the outstanding balance.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Credit Limit:</strong> A maximum credit limit of £1,000 applies within 18 days. If this limit is exceeded, full payment will be demanded immediately.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">VAT:</strong> Value Added Tax (VAT) applies per UK legislative requirements.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Introduction Fee:</strong> If a client directly hires a candidate introduced by Nani Recruitment, a 15% fee of the first year&apos;s salary applies.
                </motion.li>
              </ul>
            </motion.section>

            <motion.section
              id="staff-engagement"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">2. Staff Engagement & Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Employment Status:</strong> Temporary staff remain employed by Nani Recruitment, not the client.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Direct Hiring:</strong> Clients cannot rehire introduced staff without paying a transfer fee.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Engagement:</strong> Clients must not engage staff outside of Nani Recruitment during the assignment.
                </motion.li>
              </ul>
            </motion.section>

            <motion.section
              id="working-conditions"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">3. Working Conditions & Compliance</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Health & Safety:</strong> Clients must ensure safe working conditions and comply with Health & Safety laws.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Agency Workers Regulations (AWR):</strong> AWR applies to workers after 12 consecutive weeks in the same role.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Working Hours:</strong> Clients must comply with Working Time Regulations, ensuring staff receive breaks and reasonable working hours.
                </motion.li>
              </ul>
            </motion.section>

            <motion.section
              id="liability-indemnity"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">4. Liability & Indemnity</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Limited Liability:</strong> Nani Recruitment is not liable for any losses, damages, or misconduct caused by temporary staff.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Client Responsibility:</strong> The client assumes all responsibilities and risks once staff begin working.
                </motion.li>
              </ul>
            </motion.section>

            <motion.section
              id="cancellation-policy"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">5. Cancellation & Replacement Policy</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Cancellation Notice:</strong> Clients must provide at least 24 hours notice for shift cancellations.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Replacements:</strong> If a staff member fails to attend, Nani Recruitment will attempt to provide a replacement but does not guarantee availability.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Fees:</strong> Full charges apply for shifts cancelled without proper notice.
                </motion.li>
              </ul>
            </motion.section>

            <motion.section
              id="data-protection"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">6. Data Protection & Confidentiality</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">GDPR Compliance:</strong> All personal data will be handled lawfully and confidentially.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Confidentiality:</strong> Clients and Nani Recruitment must not disclose staff or business-related information to third parties.
                </motion.li>
              </ul>
            </motion.section>

            <motion.section
              id="termination-enforcement"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">7. Termination & Legal Enforcement</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Termination:</strong> Nani Recruitment reserves the right to terminate agreements if clients fail to pay invoices within the agreed terms or there is a breach of contract.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Debt Collection:</strong> Unpaid debts will be pursued through legal action or a debt collection agency. The client is responsible for any legal or collection fees incurred.
                </motion.li>
              </ul>
            </motion.section>

            <motion.section
              id="governing-laws"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">8. Governing Laws</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This agreement is governed by UK employment and recruitment laws, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <motion.li variants={itemVariants}>Employment Agencies Act 1973</motion.li>
                <motion.li variants={itemVariants}>Agency Workers Regulations 2010 (AWR)</motion.li>
                <motion.li variants={itemVariants}>Conduct of Employment Agencies and Employment Businesses Regulations 2003</motion.li>
                <motion.li variants={itemVariants}>Working Time Regulations 1998</motion.li>
                <motion.li variants={itemVariants}>Health & Safety at Work Act 1974</motion.li>
              </ul>
              <p className="mt-4 text-gray-700 leading-relaxed">
                By engaging Nani Recruitment Services, the client agrees to these terms and conditions in full.
              </p>
            </motion.section>
          </main>
        </div>
      </div>
    </div>
  );
}