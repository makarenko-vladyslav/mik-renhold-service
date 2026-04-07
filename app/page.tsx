import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Trust from "@/components/Trust";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Calculator />
        <Trust />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Process />
        <CTABanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}