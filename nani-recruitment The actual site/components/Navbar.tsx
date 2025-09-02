'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSectorsOpen, setIsSectorsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleSectors = () => setIsSectorsOpen(!isSectorsOpen)

  return (
    <nav className="relative bg-[#404567] text-[#232d54] shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* === DESKTOP LOGO AND NAVIGATION === */}
        <div className="hidden md:flex flex-grow items-center">
          {/* Floating desktop logo */}
  <motion.div
  className="absolute top-[-40px] left-4 transform -translate-x-1/2 z-50"
  initial={{ scale: 1 }}
  animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
>
  <div className="relative w-40 h-40 cursor-pointer drop-shadow-2xl">
    <Link href="/">
      <Image
        src="/logo-2.png"
        alt="Nani Recruitment Logo"
        fill
        style={{ objectFit: "contain" }}
      />
    </Link>
  </div>
</motion.div>

      
          {/* Desktop Links - adjusted to be more responsive */}
          <div className="flex items-center space-x-8 ml-auto pl-[10rem]">
            <Link href="/" className="nav-link text-white hover:text-crimson font-medium transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="nav-link text-white hover:text-crimson font-medium transition-colors duration-300">
              About Us
            </Link>
            <div className="relative group">
              <button className="nav-link text-white hover:text-crimson font-medium flex items-center transition-colors duration-300">
                Sectors <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/sectors" className="block px-4 py-2 text-[#232d54]-700 hover:bg-gray-100 transition-colors duration-200">
                  All Sectors
                </Link>
                <Link href="/sectors/healthcare" className="block px-4 py-2 text-[#232d54]-700 hover:bg-gray-100 transition-colors duration-200">
                  Healthcare
                </Link>
                <Link href="/sectors/cleaning" className="block px-4 py-2 text-[#232d54]-700 hover:bg-gray-100 transition-colors duration-200">
                  Cleaning & Domestic
                </Link>
                <Link href="/sectors/security" className="block px-4 py-2 text-[#232d54]-700 hover:bg-gray-100 transition-colors duration-200">
                  Security
                </Link>
                <Link href="/sectors/logistic" className="block px-4 py-2 text-[#232d54]-700 hover:bg-gray-100 transition-colors duration-200">
                  Logistics
                </Link>
              </div>
            </div>
            <Link href="/hire" className="nav-link text-white hover:text-crimson font-medium transition-colors duration-300">
              Hire Staff
            </Link>
            <Link href="/work" className="nav-link text-white hover:text-crimson font-medium transition-colors duration-300">
              Find Work
            </Link>
            <Link href="/contact" className="nav-link text-white hover:text-crimson font-medium transition-colors duration-300">
              Contact
            </Link>
            
            {/* Contact icons */}
            <div className="relative ml-4">
              <div className="flex flex-col items-center justify-center h-12 w-12">
                <div className="relative group -mb-1">
                  <a href="https://www.linkedin.com/company/nani-recruitment-ltd/?viewAsMember=true" target="_blank" className="text-white hover:text-crimson transition-colors duration-300">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white-800 text-crimson text-3x1 font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Connect on LinkedIn
                  </span>
                </div>
                
                <div className="flex justify-between w-full px-1">
                  <div className="relative group">
                    <a href="mailto:info@nanirecruitment.co.uk" className="text-white hover:text-crimson transition-colors duration-300">
                      <i className="fas fa-envelope"></i>
                    </a>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white-800 text-crimson text-3x1 font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      info@nanirecruitment.co.uk
                    </span>
                  </div>
                  <div className="relative group">
                    <a href="tel:02012345678" className="text-white hover:text-crimson transition-colors duration-300">
                      <i className="fas fa-phone-alt transform rotate-90"></i>
                    </a>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white-800 text-crimson text-3x1 font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      020 3576 0497
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === MOBILE LAYOUT === */}
        <div className="md:hidden flex justify-between items-center w-full">
          {/* Mobile Logo on the left */}
     <Link href="/">
  <Image
    src="/logo-2.png"
    alt="Nani Recruitment Logo"
    width={112}   // 28 * 4 (Tailwind w-28 = 7rem = 112px)
    height={112}
    className="object-contain"
  />
</Link>

          
          {/* Hamburger Menu on the right */}
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        className="md:hidden bg-white overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-2 space-y-3">
          <Link href="/" className="block py-2 text-gray-700 hover:text-crimson font-medium transition-colors duration-300">
            Home
          </Link>
          <Link href="/about" className="block py-2 text-gray-700 hover:text-crimson font-medium transition-colors duration-300">
            About Us
          </Link>
          <div className="pt-2 border-t border-gray-200">
            <div className="flex space-x-4">
              <a href="tel:02012345678" className="text-gray-700 hover:text-crimson transition-colors duration-300">
                <i className="fas fa-phone-alt mr-2"></i> 020 3576 0497
              </a>
            </div>
            <div className="flex space-x-4 mt-2">
              <a href="mailto:info@nanirecruitment.co.uk" className="text-gray-700 hover:text-crimson transition-colors duration-300">
                <i className="fas fa-envelope mr-2"></i> Email Us
              </a>
            </div>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.linkedin.com/company/nani-recruitment-ltd/" target="_blank" className="text-gray-700 hover:text-crimson transition-colors duration-300">
                <i className="fab fa-linkedin-in mr-2"></i> LinkedIn
              </a>
            </div>
          </div>
          <div>
            <button onClick={toggleSectors} className="w-full flex justify-between items-center py-2 text-gray-700 hover:text-crimson font-medium transition-colors duration-300">
              Sectors <i className={`fas ${isSectorsOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs`}></i>
            </button>
            {isSectorsOpen && (
              <motion.div 
                className="pl-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/sectors" className="block py-2 text-gray-700 hover:text-crimson transition-colors duration-300">
                  All Sectors
                </Link>
                <Link href="/sectors/healthcare" className="block py-2 text-gray-700 hover:text-crimson transition-colors duration-300">
                  Healthcare
                </Link>
                <Link href="/sectors/cleaning" className="block py-2 text-gray-700 hover:text-crimson transition-colors duration-300">
                  Cleaning & Domestic
                </Link>
                <Link href="/sectors/security" className="block py-2 text-gray-700 hover:text-crimson transition-colors duration-300">
                  Security
                </Link>
                <Link href="/sectors/logistic" className="block py-2 text-gray-700 hover:text-crimson transition-colors duration-300">
                  Logistics
                </Link>
              </motion.div>
            )}
          </div>
          <Link href="/hire" className="block py-2 text-gray-700 hover:text-crimson font-medium transition-colors duration-300">
            Hire Staff
          </Link>
          <Link href="/work" className="block py-2 text-gray-700 hover:text-crimson font-medium transition-colors duration-300">
            Find Work
          </Link>
          <Link href="/contact" className="block py-2 text-gray-700 hover:text-crimson font-medium transition-colors duration-300">
            Contact
          </Link>
        </div>
      </motion.div>
    </nav>
  )
}
