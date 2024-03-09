import About from '@/components/home/About'
import FaqComponent from '@/components/home/Faq'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FaqComponent />
    </>
  )
}
