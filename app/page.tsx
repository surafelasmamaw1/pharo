import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

const BackToTop = dynamic(() => import("@/components/layout/BackToTop"));
const Hero = dynamic(() => import("@/components/sections/Hero"));
const About = dynamic(() => import("@/components/sections/About"));
const TimelineSection = dynamic(() => import("@/components/sections/TimelineSection"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Academics = dynamic(() => import("@/components/sections/Academics"));
const Facilities = dynamic(() => import("@/components/sections/Facilities"));
const StudentLife = dynamic(() => import("@/components/sections/StudentLife"));
const Admissions = dynamic(() => import("@/components/sections/Admissions"));
const NewsEvents = dynamic(() => import("@/components/sections/NewsEvents"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Gallery = dynamic(() => import("@/components/sections/Gallery"));
const Vacancy = dynamic(() => import("@/components/sections/Vacancy"));
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
        <Academics />
        <Facilities />
        <StudentLife />
        <NewsEvents />
        <Testimonials />
        <Admissions />
        <Vacancy />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
