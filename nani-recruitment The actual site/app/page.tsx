import Hero from '@/components/Hero'
import DualSectorHero from '@/components/DualSectorHero'
import SectorsGrid from '@/components/SectorsGrid'
import KeyFeatures from '@/components/KeyFeatures'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Partners from '@/components/Partners'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      
      <main>
        <Hero />
        <DualSectorHero />
        <SectorsGrid />
        <KeyFeatures />
        <HowItWorks />
        <Testimonials />
        <CTASection />
        <Partners />
        
      </main>
      <Footer />
    </>
  )
}
