import { Metadata } from 'next'
import CleaningHero from '@/components/sectors/cleaning/CleaningHero'
import CleaningServices from '@/components/sectors/cleaning/CleaningServices'
import CleaningBenefits from '@/components/sectors/cleaning/CleaningBenefits'
import CleaningCTA from '@/components/sectors/cleaning/CleaningCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cleaning & Domestic Staff | Nani Recruitment Ltd - UK Staffing Specialists',
  description: 'Reliable cleaning and domestic support for healthcare, residential, and commercial facilities. Fully vetted staff trained in infection control and healthcare protocols.',
  keywords: 'cleaning staff recruitment, domestic workers, healthcare cleaning, residential cleaning, DBS checked cleaners, infection control training',
}

export default function CleaningPage() {
  return (
    <>
    <main className="min-h-screen bg-white">
      <CleaningHero />
      <CleaningServices />
      <CleaningBenefits />
      <CleaningCTA />
    </main>
    <Footer />
    </>
  )
}
