import ContactPage from '@/components/contact/ContactPage'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact Us | Nani Recruitment Ltd',
  description: 'Get in touch with NANI Recruitment for enquiries, feedback, media requests, or complaints. Our team is ready to help 24/7 with your staffing needs.',
}

export default function Contact() {
  return (
    <>
      <main>
        <ContactPage />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
