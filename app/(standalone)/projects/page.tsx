import BackToTop from "@/components/layout/BackToTop";
import Projects from "@/components/sections/NewsEvents";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Events | Pharo Foundation",
  description: "Stay up to date with the latest news, announcements, and upcoming events at Pharo Foundation.",
};

export default function NewsEventsPage() {
  return (
    <>
      <Container>
        <SectionHeading>News &amp; Events</SectionHeading>
      </Container>
      <div className="mt-12">
        <Projects />
      </div>
      <BackToTop />
    </>
  );
}
