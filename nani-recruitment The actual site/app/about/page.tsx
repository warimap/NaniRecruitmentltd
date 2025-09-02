import AboutHero from '@/components/about/AboutHero'
import WhoWeAre from '@/components/about/WhoWeAre'
import HowWeWork from '@/components/about/HowWeWork'
import MissionVision from '@/components/about/MissionVision'
import Values from '@/components/about/Values'
import ServicesForCandidates from '@/components/about/ServicesForCandidates'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Us | Nani Recruitment Ltd',
  description: 'Learn about NANI Recruitment - a dedicated healthcare recruitment team committed to connecting compassionate professionals with organizations that share our values of excellence, integrity, and person-centered care.',
}

export default function About() {
  return (
    <>
   
      <main>
        <AboutHero />
        <WhoWeAre />
        <HowWeWork />
        <MissionVision />
        <Values />
        <ServicesForCandidates />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
