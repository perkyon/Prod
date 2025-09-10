import { Hero } from "./Hero";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { SEOHead } from "./SEOHead";

export function HomePage() {
  return (
    <>
      <SEOHead />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
}