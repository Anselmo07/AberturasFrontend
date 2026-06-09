import { Navbar } from "../components/layout/Navbar";

import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { About } from "../components/sections/About";
import { Projects } from "../components/sections/Projects";

import { Footer } from "../components/layout/Footer";
import { Benefits } from "../components/sections/Benefits";
import { CTA } from "../components/sections/CTA";
import { WhatsAppButton } from "../components/ui/whatsAppButton";

export const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <Services />

      <About />

      <Benefits />

      <Projects />

      <CTA />

      <Footer />

      <WhatsAppButton />
    </>
  );
};