import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/layout/sections/Hero';
import Stats from '@/components/layout/sections/Stats';
import Accreditations from '@/components/layout/sections/Accreditations';
import ContactBanner from "@/components/layout/sections/ContactBanner";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Accreditations />
       <ContactBanner/>
      </main>
      <Footer />
    </>
  );
}