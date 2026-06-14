import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import News from "@/components/News";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Affiliations from "@/components/Affiliations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <News />
        <Experience />
        <Projects />
        <OpenSource />
        <Skills />
        <Education />
        <Affiliations />
      </main>
      <Footer />
    </>
  );
}
