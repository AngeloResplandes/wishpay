import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Strategic } from './components/Strategic/Strategic'
import { Features } from './components/Features/Features'
import { Integrations } from './components/Integrations/Integrations'
import { Pricing } from './components/Pricing/Pricing'
import { FAQ } from './components/FAQ/FAQ'
import { CTABanner } from './components/CTABanner/CTABanner'
import { Footer } from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Strategic />
        <Features />
        <Integrations />
        <Pricing />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
