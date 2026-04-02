import Head from 'next/head';
import Navbar from '../layout/Navbar'; // Added missing import
import Hero from '../layout/sections/Hero'; // Added missing import
import Services from '../pages/services';
import WhyUs from '../layout/sections/WhyUs'; // Changed to dash-case
import Process from '../pages/process';

import Footer from '../layout/Footer'; // Added missing import
import { NextPage } from 'next';

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
        {/* <Services /> */}
        <WhyUs />
        <Process />
      </main>
      
      <Footer />
    </>
  );
};

export default HomePage;
