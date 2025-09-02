import WorkHero from '@/components/work/WorkHero'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Find Work | Nani Recruitment Ltd',
  description: 'Looking for work in healthcare? NANI Recruitment connects passionate healthcare professionals with meaningful roles. Flexible working options, competitive pay, and free training available.',
}

export default function Work() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <main>
        <WorkHero />
      </main>
      <Footer />
    </div>
  )
}
