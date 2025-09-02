'use client'
import Image from 'next/image';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a
        href="https://wa.me/+447405308477"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 relative"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
        <span className="absolute -top-10 right-0 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          +44 7405308477
        </span>
      </a>
    </div>
  )
}
