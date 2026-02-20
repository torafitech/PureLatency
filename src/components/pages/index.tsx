import Services from '@/components/sections/Services';
import WhyUs from '@/components/sections/WhyUs';
import Process from '@/components/sections/Process';
import CTABanner from '@/components/sections/CTABanner';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>PureLatency — Digital innovation studio</title>
        <meta name="description" content="We build scalable web applications, mobile experiences, and AI solutions for forward-thinking companies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <CTABanner />
      </main>
      
      <Footer />
    </>
  );
};

export default HomePage;