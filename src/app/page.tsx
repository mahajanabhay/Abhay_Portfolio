import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Photography from "@/components/Photography";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AskAbhay from "@/components/AskAbhay";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <FeaturedProjects />
        <Experience />
        <About />
        <Photography />
        <AskAbhay />
        <CTA />
      </main>

      <Footer />
    </>
  );
}