import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { About } from "../components/sections/About";
import { Benefits } from "../components/sections/Benefits";
import { Projects } from "../components/sections/Projects";
import { CTA } from "../components/sections/CTA";

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Benefits />
      <Projects />
      <CTA />
    </>
  );
};