"use client";

import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../projects/ProjectCard";

export type NewsItem = {
  title: string;
  date: string;
  category: "School News" | "Events" | "Student Achievements" | "Announcements" | "Community";
  description: string;
  imageTag?: string;
  link?: string;
};

const items: NewsItem[] = [
  {
    title: "[PLACEHOLDER] Open House & Campus Tour Day",
    date: "[Replace with Date]",
    category: "Events",
    description:
      "Families are invited to tour the campus, meet faculty, and experience a day in the life of our students. Registration details will be posted here once confirmed.",
    imageTag: "Campus Visit",
    link: "#contact",
  },
  {
    title: "[PLACEHOLDER] End-of-Term Celebration",
    date: "[Replace with Date]",
    category: "School News",
    description:
      "A wrap-up of another outstanding term — highlights from student work, performances, sports, and community projects throughout the semester.",
    imageTag: "Term Highlights",
    link: "#news-events",
  },
  {
    title: "[PLACEHOLDER] Students Recognised at Regional Competition",
    date: "[Replace with Date]",
    category: "Student Achievements",
    description:
      "Our students recently represented the school at a regional academic and creative competition. This placeholder will be updated with official names and results.",
    imageTag: "Achievements",
    link: "#news-events",
  },
  {
    title: "[PLACEHOLDER] Enrollment Season Now Open",
    date: "[Replace with Date]",
    category: "Announcements",
    description:
      "Applications for the coming academic year are being accepted. Visit the Admissions section or contact the admissions team to begin your journey.",
    imageTag: "Admissions",
    link: "#admissions",
  },
  {
    title: "[PLACEHOLDER] Community Service Project",
    date: "[Replace with Date]",
    category: "Community",
    description:
      "Students, teachers, and families came together for a community service initiative. Full story, photos, and partner acknowledgements to be added.",
    imageTag: "Service",
    link: "#news-events",
  },
  {
    title: "[PLACEHOLDER] Performing Arts Showcase",
    date: "[Replace with Date]",
    category: "Events",
    description:
      "An evening of music, theatre, and dance presented by our performing arts students. Program, tickets, and venue details will be available soon.",
    imageTag: "Arts",
    link: "#news-events",
  },
];

export default function Projects() {
  return (
    <section
      id="news-events"
      className="py-section-sm md:py-section-md bg-foreground/[0.025] dark:bg-white/[0.02] relative"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10 text-left">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold-pale/70 mb-7">
                <CalendarDays className="w-4 h-4 text-gold" strokeWidth={1.8} />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold">
                  Latest Updates
                </span>
              </div>
              <SectionHeading className="text-left">News &amp; Events</SectionHeading>
              <p className="mt-6 text-muted leading-relaxed text-base md:text-lg">
                Stay connected with life at Pharo Foundation — campus events,
                announcements, student achievements, and stories from our community.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#news-events"
                className="inline-flex items-center gap-2 text-sm font-bold text-scholarly dark:text-scholarly-light hover:gap-3 transition-all"
              >
                View All News
                <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </a>
            </div>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {items.map((item, index) => (
              <ProjectCard key={item.title} project={item} index={index} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
