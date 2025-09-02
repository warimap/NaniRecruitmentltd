import { Metadata } from 'next'
import SecurityHero from '@/components/sectors/security/SecurityHero'
import SecurityServices from '@/components/sectors/security/SecurityServices'
import SecurityBenefits from '@/components/sectors/security/SecurityBenefits'
import SecurityTestimonials from '@/components/sectors/security/SecurityTestimonials'
import SecurityFAQ from '@/components/sectors/security/SecurityFAQ'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Security Staffing | Nani Recruitment Ltd - UK Security Specialists',
  description: 'Professional security staffing services across the UK. SIA licensed security guards for residential, commercial, healthcare, and event security. 24/7 support and rapid deployment.',
  keywords: 'security staff recruitment, SIA licensed guards, security personnel, event security, commercial security, residential security, healthcare security',
}

export default function SecurityPage() {
  return (
    <>
    <main className="min-h-screen bg-white">
      <SecurityHero />
      <SecurityServices />
      <SecurityBenefits />
      <SecurityTestimonials />
      <SecurityFAQ />
    </main>
     <Footer />
    </>
  )
}
