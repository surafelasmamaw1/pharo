import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

const BackToTop = dynamic(() => import("@/components/layout/BackToTop"));
const Hero = dynamic(() => import("@/components/sections/Hero"));
const About = dynamic(() => import("@/components/sections/About"));
const TimelineSection = dynamic(() => import("@/components/sections/TimelineSection"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Facilities = dynamic(() => import("@/components/sections/Facilities"));
const StudentLife = dynamic(() => import("@/components/sections/StudentLife"));
const Resume = dynamic(() => import("@/components/sections/Resume"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground animate-[fadeIn_0.5s_ease-out]">
        <Hero />
        <About />
        <TimelineSection />
        <Services />
        <Skills />
        <Facilities />
        <StudentLife />
        <Projects />
        <Testimonials />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
