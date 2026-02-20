import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '../components/layout/sections/Hero';
import Stats from '../components/layout/sections/Stats';
import Partners from '../components/layout/sections/Partners';
import Accreditations from '../components/layout/sections/Accreditations';
import CTASection from '../components/layout/sections/CTABanner';
import Contact from '../components/layout/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Partners />
        <Accreditations />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}