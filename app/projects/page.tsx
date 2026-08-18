import Navbar from "@/components/layout/Navbar";
import BackToTop from "@/components/layout/BackToTop";
import Projects from "@/components/sections/NewsEvents";
import Footer from "@/components/sections/Footer";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Events | Pharo Foundation",
  description: "[PLACEHOLDER] Stay up to date with the latest news, announcements, and upcoming events at Pharo Foundation.",
};

export default function NewsEventsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground pt-32 pb-40">
        <Container>
          <SectionHeading>News &amp; Events</SectionHeading>
        </Container>
        <div className="mt-12">
          <Projects />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
