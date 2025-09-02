
import HireHero from '@/components/hire/HireHero'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Hire Staff | Nani Recruitment Ltd',
  description: 'Find exceptional healthcare professionals with NANI Recruitment. We connect you with fully compliant, highly qualified staff tailored to your specific needs. 24/7 staffing solutions available.',
}

export default function Hire() {
  return (
    <>
      <main>
        <HireHero />
      </main>
      <Footer />
    </>
  )
}
