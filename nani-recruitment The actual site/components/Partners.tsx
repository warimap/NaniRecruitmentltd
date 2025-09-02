'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';

// Define the type for a single partner object
type Partner = {
  id: number;
  name: string;
  description: string;
  logo: string;
  logoImage: string;
  color: string;
};

// Partner data with placeholder information
const partners: Partner[] = [
  {
    id: 1,
    name: "REC",
    description: "Leading technology solutions provider with over 15 years of experience in digital transformation and enterprise software development.",
    logo: "REC",
    logoImage: "/REC R.png",
    color: "#ad4f68",
  },
  {
    id: 2,
    name: "Citation",
    description: "Cutting-edge research and development company specializing in AI-driven solutions and next-generation cloud infrastructure.",
    logo: "Citation",
    logoImage: "/CITATION R.png",
    color: "#624d69",
  },
  {
    id: 3,
    name: "CV Library",
    description: "Expert data analytics and business intelligence platform helping companies make data-driven decisions at scale.",
    logo: "CV Library",
    logoImage: "/cv library R.png",
    color: "#232d54",
  },
  {
    id: 4,
    name: "Train Healthcare",
    description: "Reliable cloud infrastructure and DevOps solutions ensuring seamless scalability and 99.9% uptime for mission-critical applications.",
    logo: "Train Healthcare",
    logoImage: "/TRAIN HR.png",
    color: "#ad4f68",
  },
  {
    id: 5,
    name: "Florence Academy",
    description: "Comprehensive cybersecurity solutions protecting businesses from evolving digital threats with advanced threat detection and response.",
    logo: "Florence Academy",
    logoImage: "/florence R 2.png",
    color: "#624d69",
  },
  {
    id: 6,
    name: "Atlas citation",
    description: "Agile development methodologies and project management solutions that accelerate time-to-market for software products.",
    logo: "Matrix",
    logoImage: "/ALTAS R.png",
    color: "#232d54",
  },
 
  {
    id: 7,
    name: "Matrix",
    description: "NANI Recruitment and Matrix collaborate to streamline healthcare staffing through cutting-edge technology and tailored solutions, driving efficiency and delivering top talent where it matters most.",
    logo: "Matrix",
    logoImage: "/image",
    color: "#232d54",
  },
  {
    id: 8,
    name: "Magnit",
    description: "Magnit and NANI Recruitment have joined forces to revolutionize healthcare staffing. Together, we combine cutting-edge technology with deep industry expertise to deliver smarter, faster, and more reliable recruitment solutions — empowering care homes and healthcare professionals to thrive in a rapidly evolving landscape",
    logo: "Magnit",
    logoImage: "/image",
    color: "#ad4f68",
  },
];

// Filter partners to exclude Matrix and Magnit for the globe
const globePartners = partners.filter(p => p.id !== 7 && p.id !== 8);

const Globe = ({ partner, index, isMobile }: { partner: Partner; index: number; isMobile: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showName, setShowName] = useState(false);

  const angle = (index * 360) / globePartners.length;
  const radius = isMobile ? 120 : 180;
  const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
  const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isHovered) {
      timer = setTimeout(() => setShowName(true), 100);
    } else {
      setShowName(false);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isHovered]);

  const baseSize = isMobile ? 72 : 96;
  const hoverScale = 3;

  return (
    <motion.div
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)',
        zIndex: isHovered ? 10 : 1,
      }}
      whileHover={{ scale: hoverScale, zIndex: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative rounded-full cursor-pointer transition-all duration-300"
        style={{
          width: baseSize,
          height: baseSize,
          backgroundColor: partner.color,
          boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.3)${isHovered ? `, 0 0 30px ${partner.color}60` : ''}`,
          overflow: 'hidden',
        }}
      >
        <div 
          className="absolute inset-0 rounded-full opacity-40 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(0, 0, 0, 0.1) 100%)'
          }}
        />
        
        <div 
          className="absolute rounded-full pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)',
            top: '15%',
            left: '20%',
            width: '40%',
            height: '30%',
          }}
        />
        
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Image
            src={partner.logoImage}
            alt={`${partner.name} logo`}
            fill={true}
            className="rounded-full"
            style={{ objectFit: 'cover' }}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `<span class="text-white font-bold text-sm">${partner.logo}</span>`;
              }
            }}
          />
        </div>
        
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), transparent)'
          }}
        />
      </motion.div>
      
      <AnimatePresence>
        {showName && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap"
          >
            <div className="bg-white px-3 py-1 rounded-lg shadow-lg border text-sm font-medium" style={{ color: '#232d54' }}>
              {partner.name}
            </div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-l border-t rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const MatrixMagnitSlider = () => {
  // Filter partners to only Matrix and Magnit by id 8 and 9
  const filteredPartners = partners.filter(p => p.id === 7 || p.id === 8);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredPartners.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredPartners.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredPartners.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredPartners.length) % filteredPartners.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative h-64 flex flex-col bg-transparent"> {/* <-- Transparent background */}
      {/* Navigation and info */}
      <div className="flex justify-center items-center mb-4 space-x-6">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50"
        >
          <ChevronLeft className="w-5 h-5" style={{ color: '#232d54' }} />
        </button>
        <div className="flex-1 max-w-xl mx-4 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-[#232d54]">{filteredPartners[currentIndex].name}</h3>
              <p className="text-sm text-gray-700">{filteredPartners[currentIndex].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50"
        >
          <ChevronRight className="w-5 h-5" style={{ color: '#232d54' }} />
        </button>
      </div>

      {/* Progress bar */}
      <div className="relative h-1 bg-gray-300 rounded-full overflow-hidden mx-12">
        <motion.div
          key={currentIndex}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 4.5, ease: "linear" }}
          className="h-full bg-[#ad4f68]"
        />
      </div>
    </div>
  );
};

export default function MatrixMagnitGlobe() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full relative px-4 lg:px-0">
      {/* H1 & H2 */}
      <div className="text-center mb-12 mt-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-crimson mb-4">
          Our Trusted Partners
        </h1>
        <h2 className="text-xl lg:text-2xl text-crimson -600 max-w-2xl mx-auto">
          We collaborate with the most innovative companies to deliver top-notch healthcare staffing solutions.
        </h2>
      </div>

      {/* Globe container */}
      <div className="relative w-full h-[500px] max-w-md lg:max-w-none mx-auto rounded-3xl overflow-visible z-10">
        {globePartners.map((partner, i) => (
          <Globe key={partner.id} partner={partner} index={i} isMobile={isMobile} />
        ))}
      </div>

      {/* Slider below globe */}
      <div className="mt-20 max-w-3xl mx-auto relative z-0">
        <MatrixMagnitSlider />
      </div>
    </div>
  );
}