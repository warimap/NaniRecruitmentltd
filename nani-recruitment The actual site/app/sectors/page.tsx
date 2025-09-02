import { Metadata } from 'next'
import SectorsHero from '@/components/sectors/SectorsHero'
import HealthcareRoles from '@/components/sectors/HealthcareRoles'
import ProcessTimeline from '@/components/sectors/ProcessTimeline'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Sectors | Nani Recruitment Ltd - UK Staffing Specialists',
  description: 'Specialized staffing solutions across healthcare, cleaning & domestic, security, and logistics sectors. Expert recruitment services across the UK.',
  keywords: 'healthcare recruitment, cleaning staff, security personnel, logistics recruitment, UK staffing agency',
}

export default function Sectors() {
  return (
    <>
    <main className="min-h-screen bg-white">
      <SectorsHero />
      <CTASection />
      <HealthcareRoles />
      <ProcessTimeline />
      
    </main>
     <Footer />
    </>
  )
}
