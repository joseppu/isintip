import type { NextPage } from "next";
import Head from "next/head";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProductHero from "../components/ProductHero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import TrialSizeSample from "../components/TrialSizeSample";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Isin Medical</title>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="As a trusted distributor of Santa Cruz Biotechnology (SCBT), Isin Medical handles your deliveries end to end."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Isin Medical" />
        <meta property="og:url" content="http://www.isin-tip.com" />
        <meta
          property="og:description"
          content="As a trusted distributor of Santa Cruz Biotechnology (SCBT), Isin Medical handles your deliveries end to end."
        />
        <meta property="og:image" content="/biochemistry-lab.jpg" />
      </Head>
      <Navbar />
      <HeroSection />
      <ProductHero />
      <Services />
      <Stats />
      <TrialSizeSample />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
