import { PROFILE } from "@/data/profile";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Page() {
  return (
    <>
      <Nav name={PROFILE.name} resume={PROFILE.resume} />
      <main id="top" className="wrap">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact email={PROFILE.email} phone={PROFILE.phone} />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
