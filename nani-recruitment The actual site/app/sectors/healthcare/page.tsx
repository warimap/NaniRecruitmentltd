import { Metadata } from 'next'
import HealthcareHero from '@/components/sectors/healthcare/HealthcareHero'
import HealthcareSectors from '@/components/sectors/healthcare/HealthcareSectors'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Healthcare Recruitment | Nani Recruitment Ltd - UK Staffing Specialists',
  description: 'Specialist healthcare recruitment for nursing homes, supported living, mental health facilities, hospitals and more. Placing registered nurses, HCAs, and healthcare professionals across the UK.',
  keywords: 'healthcare recruitment, nursing homes, registered nurses, healthcare assistants, mental health nursing, domiciliary care, hospital staff',
}

export default function HealthcarePage() {
  return (
    <>
    <main className="min-h-screen bg-white">
      <HealthcareHero />
      <HealthcareSectors />
    </main>
      <Footer />
    </>
  )
}
