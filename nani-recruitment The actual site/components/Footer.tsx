'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image';

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/sectors", label: "Sectors" },
    { href: "/hire", label: "Hire Staff" },
    { href: "/work", label: "Find Work" },
    { href: "/contact", label: "Contact" }
  ]

  const sectors = [
    { href: "/sectors/healthcare", label: "Healthcare" },
    { href: "/sectors/cleaning", label: "Cleaning & Domestic" },
    { href: "/sectors/security", label: "Security" },
    { href: "/sectors/logistic", label: "Logistics" }
  ]

  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/nani-recruitment-ltd/?viewAsMember=true",
      icon: "fab fa-linkedin-in",
      label: "LinkedIn"
    },
    {
      href: "https://www.facebook.com/NaniRecruitmentLtd/",
      icon: "fab fa-facebook-f",
      label: "Facebook"
    },
    {
      href: "https://www.instagram.com/nanirecruitmentltd/",
      icon: "fab fa-instagram",
      label: "Instagram"
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
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
    <footer className="bg-[#1a2342] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-4">
              <motion.div
                className="w-40 h-40 mr-2"
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <Link href="/">
  <div className="relative w-40 h-40"> {/* parent with fixed size */}
    <Image
      src="/logo-2.png"
      alt="Nani Recruitment Logo"
      fill                   // fills the parent container
      className="object-contain drop-shadow-xl cursor-pointer"
      sizes="(max-width: 768px) 100vw, 160px"
    />
  </div>
</Link>

              </motion.div>
            </div>

            <p className="text-gray-300 mb-4">
              Specialist staffing solutions for healthcare, cleaning, security, and logistics sectors across the UK.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-crimson transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-crimson transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Sectors</h3>
            <ul className="space-y-2">
              {sectors.map((sector, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={sector.href}
                    className="text-gray-300 hover:text-crimson transition-colors duration-300"
                  >
                    {sector.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-crimson"></i>
                <span className="text-gray-300">203-205 The Vale Business Center The Vale Acton W3 7QS</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-crimson"></i>
                <a href="tel:02012345678" className="text-gray-300 hover:text-white transition-colors duration-300">
                  020 3576 0497
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-crimson"></i>
                <a href="mailto:info@nanirecruitment.co.uk" className="text-gray-300 hover:text-white transition-colors duration-300">
                  info@nanirecruitment.co.uk
                </a>
              </li>
              <li className="flex items-center">
                <i className="fab fa-whatsapp mr-3 text-crimson"></i>
                <a href="https://wa.me/447459806430" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +447 45980 6430
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2025 Nani Recruitment Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-crimson transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/Terms" className="text-gray-400 hover:text-crimson transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/Slavery" className="text-gray-400 hover:text-crimson transition-colors duration-300">
              Modern Slavery Statement
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}