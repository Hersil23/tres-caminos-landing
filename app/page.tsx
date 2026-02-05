import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Paths from '@/components/Paths'
import Author from '@/components/Author'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Paths />
      <Author />
      <CTA />
      <Footer />
    </main>
  )
}
