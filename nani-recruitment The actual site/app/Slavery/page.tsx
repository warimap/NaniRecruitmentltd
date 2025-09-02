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

export default function Slavery() {
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
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1a2342] mb-2">Modern Slavery and Human Trafficking Statement</h1>
            <p className="text-sm text-gray-600">Financial Year: 2025–2026 | Effective Date: 07 July 2025</p>
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
                { id: "statement-overview", label: "1. Statement Overview" },
                { id: "our-business", label: "2. Our Business" },
                { id: "our-commitment", label: "3. Our Commitment" },
                { id: "steps-taken", label: "4. Steps Taken in 2025–2026" },
                { id: "looking-ahead", label: "5. Looking Ahead: 2026–2027" },
                { id: "approval-reporting", label: "6. Approval & Reporting" },
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
              id="statement-overview"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">1. Statement Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This statement is made pursuant to Section 54(1) of the Modern Slavery Act 2015. It sets out the steps taken by Nani Recruitment Ltd during the financial year ending March 2026 to prevent modern slavery and human trafficking in our PAYE workforce, operations, and supply chains.
              </p>
              <p className="text-sm italic text-gray-500">
                Note: Although Nani Recruitment Ltd does not currently meet the £36 million annual turnover threshold under Section 54 of the Modern Slavery Act 2015, we voluntarily publish this statement to demonstrate our ethical practices and support transparency throughout the healthcare, cleaning, domestic, and security sectors.
              </p>
            </motion.section>

            <motion.section
              id="our-business"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">2. Our Business</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nani Recruitment Ltd is a staffing and recruitment agency that supplies healthcare and support workers, cleaning and domestic staff, and security personnel across the UK. All our workers are engaged under PAYE (Pay As You Earn) contracts. We provide trained and compliant staff to clients including care homes, healthcare providers, commercial facilities, residential properties, and security-requiring establishments regulated by the Care Quality Commission (CQC), local authorities, and relevant industry bodies.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 mt-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#1a2342] mb-2">Our Focus</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Healthcare and support workers</li>
                    <li>Cleaning and domestic staff</li>
                    <li>Security personnel</li>
                    <li>PAYE workforce employment</li>
                    <li>CQC and industry regulated environments</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1a2342] mb-2">Our Coverage</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Healthcare facilities and care homes</li>
                    <li>Commercial and residential cleaning</li>
                    <li>Security services across sectors</li>
                    <li>Local authority partnerships</li>
                    <li>Trained and compliant staff</li>
                    <li>Quality assured placements</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section
              id="our-commitment"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">3. Our Commitment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to ensuring that modern slavery, human trafficking, and exploitation have no place within our organisation. As a recruitment agency specialising in healthcare, cleaning, domestic, and security sectors operating in the UK with a PAYE workforce, we have a clear responsibility to protect the welfare, dignity, and freedom of every individual we place or employ.
              </p>
              <h3 className="text-lg font-semibold text-[#1a2342] mb-2">Transparency & Accessibility</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Is aligned with NHS Supply Chain requirements</li>
                <li>Meets CQC expectations for ethical recruitment</li>
                <li>Complies with industry standards for cleaning and security sectors</li>
                <li>Is publicly available and may be shared with clients, local authorities, and regulators upon request</li>
                <li>Will be reviewed annually in July 2026</li>
              </ul>
            </motion.section>

            <motion.section
              id="steps-taken"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">4. Steps Taken in 2025–2026</h2>
              <ul className="list-decimal list-inside space-y-6 text-gray-700">
                <li>
                  <strong className="font-semibold text-[#1a2342]">Policy Review & Implementation</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Reviewed and enforced our Modern Slavery and Human Trafficking Policy for PAYE staff</li>
                    <li>Policy embedded into staff handbooks and induction packs</li>
                  </ul>
                </li>
                <li>
                  <strong className="font-semibold text-[#1a2342]">Worker Declarations</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Every PAYE worker completes a Domestic Slavery Declaration Form at onboarding, confirming they are working freely, without coercion, and receive wages directly.</li>
                  </ul>
                </li>
                <li>
                  <strong className="font-semibold text-[#1a2342]">Right to Work & Identity Checks</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Full compliance with Home Office Right to Work guidelines</li>
                    <li>In-person verification of original ID, work status documents, and personal bank details</li>
                    <li>100% of PAYE staff underwent enhanced Right to Work checks</li>
                    <li>Enhanced checks for security roles including DBS and SIA licensing verification</li>
                  </ul>
                </li>
                <li>
                  <strong className="font-semibold text-[#1a2342]">Training & Awareness</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Mandatory Modern Slavery Awareness Training delivered to recruitment staff, compliance officers, and management</li>
                    <li>Training includes how to identify red flags (e.g. withheld documents, unusual financial control) and escalation procedures</li>
                    <li>Sessions included case studies, warning signs, and response protocols</li>
                  </ul>
                </li>
                <li>
                  <strong className="font-semibold text-[#1a2342]">Whistleblowing & Reporting</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Operated a confidential, anonymous whistleblowing channel for staff and candidates</li>
                    <li>Concerns are escalated to the Designated Safeguarding Lead and, where appropriate, the GLAA (Gangmasters and Labour Abuse Authority)</li>
                    <li>Escalation pathways link directly to local authority safeguarding teams, if needed</li>
                  </ul>
                </li>
                <li>
                  <strong className="font-semibold text-[#1a2342]">Supplier and Third-Party Checks</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Reviewed all umbrella companies, training providers, and third-party suppliers</li>
                    <li>Required each to confirm written compliance with the Modern Slavery Act 2015</li>
                    <li>Reviewed contracts and compliance statements from umbrella payroll providers and external training organisations</li>
                  </ul>
                </li>
                <li>
                  <strong className="font-semibold text-[#1a2342]">Auditing & Monitoring</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Conducted regular internal audits of PAYE worker files, addresses, bank details, and contract documentation</li>
                    <li>Investigated two red-flag cases (shared contact details), both resolved with no evidence of exploitation</li>
                    <li>Monitored for shared addresses across unrelated staff and unusual financial activity</li>
                  </ul>
                </li>
              </ul>
            </motion.section>

            <motion.section
              id="looking-ahead"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">5. Looking Ahead: 2026–2027</h2>
              <h3 className="text-lg font-semibold text-[#1a2342] mb-2">Planned Actions</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                <li>Launch a supplier self-assessment form for ongoing due diligence</li>
                <li>Expand awareness training to include client-facing personnel and external recruiters</li>
                <li>Conduct quarterly compliance audits of temp worker files</li>
                <li>Update whistleblowing materials in multiple languages</li>
              </ul>
              <h3 className="text-lg font-semibold text-[#1a2342] mb-2">Additional Improvements</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Launch supplier self-audit forms for all third parties</li>
                <li>Quarterly worker file audits by compliance team</li>
                <li>Annual refresher training for all team leaders and safeguarding staff</li>
                <li>Client guidance packs to raise awareness of shared legal duties</li>
              </ul>
            </motion.section>

            <motion.section
              id="approval-reporting"
              className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200"
              ref={addToRef}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2342] mb-4">6. Approval & Reporting</h2>
              <p className="text-gray-700 leading-relaxed">
                This statement has been approved by the Director of Nani Recruitment Ltd.
              </p>
              <div className="mt-4 mb-8">
                <p className="font-semibold text-[#1a2342]">Signed: Ismahan Ibrahim</p>
                <p className="text-gray-600">Director</p>
                <p className="text-gray-600">Nani Recruitment Ltd</p>
                <p className="text-gray-600">Date: 07 July 2025</p>
              </div>
              <h3 className="text-lg font-semibold text-[#1a2342] mb-2">Report Concerns</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have concerns about modern slavery or human trafficking in our business or supply chain, please report them immediately through our confidential whistleblowing channels:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong className="font-semibold text-[#1a2342]">Designated Safeguarding Lead:</strong> <Link href="mailto:safeguarding@nanirecruitment.com" className="hover:text-[#ad4f68] transition-colors duration-200">safeguarding@nanirecruitment.com</Link>
                </li>
                <li>
                  <strong className="font-semibold text-[#1a2342]">Anonymous Reporting:</strong> 020 3576 0497 (24-hour confidential helpline)
                </li>
                <li>Concerns can also be escalated directly to the GLAA (Gangmasters and Labour Abuse Authority) or local authority.</li>
              </ul>
            </motion.section>
          </main>
        </div>
      </div>
    </div>
  );
}