"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import BackToTop from "@/components/layout/BackToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TimelineSection from "@/components/sections/TimelineSection";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Facilities from "@/components/sections/Facilities";
import StudentLife from "@/components/sections/StudentLife";
import Resume from "@/components/sections/Resume";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-background text-foreground"
      >
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
        <CallToAction />
        <Contact />
      </motion.main>
      <Footer />
      <BackToTop />
    </>
  );
}
