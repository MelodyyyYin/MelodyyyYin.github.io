import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutNews from "@/components/AboutNews";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
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
        <AboutNews />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Affiliations />
      </main>
      <Footer />
    </>
  );
}
