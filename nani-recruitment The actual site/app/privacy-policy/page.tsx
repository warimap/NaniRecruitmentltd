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

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1a2342] mb-2">Data Protection & GDPR Compliance</h1>
            <p className="text-sm text-gray-600">Effective Date: July 2025 | Next Review Due: July 2026</p>
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
                { id: "commitment-to-compliance", label: "1. Commitment to GDPR Compliance" },
                { id: "lawful-basis", label: "2. Lawful Basis for Sharing & Our Role" },
                { id: "data-sharing-practices", label: "3. Data Sharing Practices" },
                { id: "security-safeguards", label: "4. Security Safeguards" },
                { id: "retention-periods", label: "5. Data Retention Periods" },
                { id: "individual-rights", label: "6. Individual Rights under GDPR" },
                { id: "sar-procedure", label: "7. Subject Access Request (SAR) Process" },
                { id: "data-breach", label: "8. Data Breach Procedure" },
                { id: "international-transfers", label: "9. International Data Transfers" },
                { id: "oversight-review", label: "10. Oversight & Review" },
                { id: "contacts", label: "11. Data Protection Contacts" },
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
              id="commitment-to-compliance"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">1. Commitment to GDPR Compliance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This document confirms that Nani Recruitment Ltd agrees to fully uphold the principles and legal obligations of the UK General Data Protection Regulation (UK GDPR) when collecting, processing, storing, or sharing personal data.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Lawfulness, Fairness, and Security:</strong> All personal and sensitive data is handled lawfully, fairly, and securely.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Purpose Limitation:</strong> Data is shared only for relevant purposes such as work placements, compliance checks, or legal obligations.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Integrity & Confidentiality:</strong> Appropriate safeguards (e.g., encryption, access control) are in place to protect all data.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Transparency:</strong> All data subjects are informed of why their data is collected, who it may be shared with, and their full GDPR rights.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Accountability:</strong> Any data breaches will be reported and investigated in line with UK GDPR obligations.
                </motion.li>
              </ul>
            </motion.section>

            <motion.section
              id="lawful-basis"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">2. Lawful Basis for Sharing & Our Role</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We only share personal data when we have a lawful basis to do so:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Consent:</strong> The individual has given clear consent.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Contract:</strong> It is necessary to fulfill a contract (e.g., job placement).
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Legal Obligation:</strong> It is required to meet a legal obligation (e.g., DBS, Right to Work checks).
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Legitimate Interest:</strong> It is based on a legitimate interest with minimal risk to individual rights.
                </motion.li>
              </ul>
              <p className="mt-4 text-gray-700 leading-relaxed font-semibold">
                Our Role:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Data Controller:</strong> For our own internal operations and processes.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Data Processor:</strong> When handling data on behalf of our clients.
                </motion.li>
              </ul>
            </motion.section>

            <motion.section
              id="data-sharing-practices"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">3. Data Sharing Practices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We adhere to strict protocols when sharing personal data with third parties:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Data Minimization:</strong> Only relevant and minimal data is shared.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Signed Agreements:</strong> Data Sharing Agreements (DSAs) and Data Processing Agreements (DPAs) are signed with all third parties.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Enhanced Protection:</strong> Special category data (e.g., health, DBS records) is shared with enhanced protection measures.
                </motion.li>
              </ul>
            </motion.section>

            <motion.section
              id="security-safeguards"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">4. Security Safeguards</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement robust security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Encryption:</strong> All data is transmitted via encrypted email or secure cloud platforms.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Access Control:</strong> Staff access is strictly role-based.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Secure Storage:</strong> All files are password-protected and stored securely.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Internal Audits:</strong> We conduct regular audits to ensure compliance.
                </motion.li>
              </ul>
            </motion.section>

            <motion.section
              id="retention-periods"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">5. Data Retention Periods</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal data for a specific period, after which it is securely destroyed:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Data Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Retention Period
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="bg-white/80 backdrop-blur-sm">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Candidate records</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">6 years from last assignment</td>
                    </tr>
                    <tr className="bg-white/80 backdrop-blur-sm">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Right to work documentation</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">2 years post-termination</td>
                    </tr>
                    <tr className="bg-white/80 backdrop-blur-sm">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">DBS certificate info</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Max 6 months (if stored)</td>
                    </tr>
                    <tr className="bg-white/80 backdrop-blur-sm">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Payroll and contract files</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">6 years from end of engagement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.section>

            <motion.section
              id="individual-rights"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">6. Individual Rights under GDPR</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We uphold all your rights as a data subject, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Right to be informed:</strong> You have the right to know how your data is being used.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Right of access:</strong> You can request a copy of the personal data we hold about you.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Right to rectification:</strong> You can request that inaccurate or incomplete data be corrected.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Right to erasure:</strong> You can request the deletion of your data (subject to legal retention requirements).
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Right to restrict processing:</strong> You can ask us to limit the way we use your data.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Right to data portability:</strong> You can request your data in a format that allows it to be transferred to another organisation.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Right to object:</strong> You can object to the processing of your data in certain circumstances.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Rights related to automated profiling:</strong> You have rights regarding automated decision-making.
                </motion.li>
              </ul>
            </motion.section>

            <motion.section
              id="sar-procedure"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">7. Subject Access Request (SAR) Process</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To request your personal data, please follow this process:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">How to request:</strong> Email your request to <a href="mailto:info@nanirecruitment.com" className="text-[#ad4f68] hover:underline">info@nanirecruitment.com</a>.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Response Time:</strong> We will respond to your request within 30 calendar days.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Verification:</strong> We may require proof of identity to verify your request.
                </motion.li>
              </ul>
            </motion.section>

            <motion.section
              id="data-breach"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">8. Data Breach Procedure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the event of a data breach, we follow a strict protocol:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Reporting:</strong> The breach will be reported to the Information Commissioner&apos;s Office (ICO) within 72 hours.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Notification:</strong> Affected individuals will be notified if the breach poses a risk to their rights and freedoms.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Investigation:</strong> The incident will be logged, investigated, and corrected.
                </motion.li>
              </ul>
            </motion.section>

            <motion.section
              id="international-transfers"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">9. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If we share data outside the UK, we ensure adequate safeguards are in place, such as:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Standard Contractual Clauses (SCCs):</strong> We use approved legal mechanisms for data transfers.
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Logging and Review:</strong> All international data transfers are logged and reviewed for risk.
                </motion.li>
              </ul>
            </motion.section>

            <motion.section
              id="oversight-review"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">10. Oversight & Review</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This policy is overseen by our Data Protection Officer and is subject to regular review:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Policy Review:</strong> Annually, when regulations change, or when business operations change.
                </motion.li>
              </ul>
            </motion.section>

            <motion.section
              id="contacts"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">11. Data Protection Contacts</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For any data protection queries, subject access requests, or concerns, please contact:
              </p>
              <ul className="space-y-3 text-gray-700">
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">Data Protection Officer:</strong> Ismahan Ibrahim
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">General Enquiries Email:</strong> <a href="mailto:info@nanirecruitment.com" className="text-[#ad4f68] hover:underline">info@nanirecruitment.com</a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <strong className="font-semibold text-[#1a2342]">DPO Email:</strong> <a href="mailto:ismahan@nanirecruitment.com" className="text-[#ad4f68] hover:underline">ismahan@nanirecruitment.com</a>
                </motion.li>
              </ul>
              <p className="mt-4 text-gray-700 leading-relaxed">
                You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#ad4f68] hover:underline">ico.org.uk</a>.
              </p>
            </motion.section>
          </main>
        </div>
      </div>
    </div>
  );
}