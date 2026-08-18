"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Baby,
  School,
  GraduationCap,
  Atom,
  Languages as LanguagesIcon,
  Palette,
  ArrowRight,
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

type Program = {
  icon: LucideIcon;
  iconBg: string;
  name: string;
  band: string;
  description: string;
  accent: string;
  glow: string;
  borderGlow: string;
};

const programs: Program[] = [
  {
    icon: Baby,
    iconBg: "from-gold/30 to-accent/15 border-gold/25",
    name: "Early Years",
    band: "Ages 3 – 6  ·  [Grades placeholder]",
    description:
      "[PLACEHOLDER] A joyful, play-based foundation where curiosity is nurtured, social-emotional skills bloom, and young learners begin their educational journey with confidence.",
    accent: "bg-gold text-white",
    glow: "hover:shadow-[0_0_32px_rgba(184,137,60,0.18)]",
    borderGlow: "dark:hover:border-gold/40",
  },
  {
    icon: School,
    iconBg: "from-scholarly/30 to-scholarly-light/15 border-scholarly/25",
    name: "Primary Education",
    band: "Grades [1 – 6]  ·  [Ages placeholder]",
    description:
      "[PLACEHOLDER] Strong foundational skills in literacy and numeracy, paired with rich explorations across disciplines — building capable, independent learners.",
    accent: "bg-scholarly text-white",
    glow: "hover:shadow-[0_0_32px_rgba(30,58,95,0.18)]",
    borderGlow: "dark:hover:border-scholarly/40",
  },
  {
    icon: GraduationCap,
    iconBg: "from-scholarly-light/30 to-blue-500/15 border-scholarly-light/25",
    name: "Secondary Education",
    band: "Grades [7 – 12]  ·  [Ages placeholder]",
    description:
      "[PLACEHOLDER] A rigorous college-preparatory pathway with depth, choice, and challenge — preparing students for university, career, and leadership.",
    accent: "bg-scholarly-light text-white",
    glow: "hover:shadow-[0_0_32px_rgba(45,79,122,0.18)]",
    borderGlow: "dark:hover:border-scholarly-light/40",
  },
  {
    icon: Atom,
    iconBg: "from-success/30 to-emerald-500/15 border-success/25",
    name: "STEM & Technology",
    band: "All divisions  ·  Integrated program",
    description:
      "[PLACEHOLDER] Hands-on science, engineering, robotics, coding, and digital literacy — equipping students with tools for tomorrow's world of invention.",
    accent: "bg-success text-white",
    glow: "hover:shadow-[0_0_32px_rgba(46,125,87,0.18)]",
    borderGlow: "dark:hover:border-success/40",
  },
  {
    icon: LanguagesIcon,
    iconBg: "from-accent/30 to-gold/15 border-accent/25",
    name: "Languages",
    band: "Beginner to advanced proficiency",
    description:
      "[PLACEHOLDER] A rich language curriculum that opens doors to global citizenship, cross-cultural understanding, and multilingual communication skills.",
    accent: "bg-accent text-white",
    glow: "hover:shadow-[0_0_32px_rgba(166,110,63,0.18)]",
    borderGlow: "dark:hover:border-accent/40",
  },
  {
    icon: Palette,
    iconBg: "from-purple-500/25 to-pink-500/10 border-purple-500/25",
    name: "Arts & Humanities",
    band: "Studio, performance, and humanities",
    description:
      "[PLACEHOLDER] Visual arts, music, theatre, dance, history, literature, and philosophy — cultivating creative expression, empathy, and cultural perspective.",
    accent: "bg-scholarly text-white",
    glow: "hover:shadow-[0_0_32px_rgba(30,58,95,0.18)]",
    borderGlow: "dark:hover:border-scholarly/40",
  },
];

export default function Skills() {
  return (
    <section id="academics" className="py-section-sm md:py-section-md relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10 text-left">
            <div className="max-w-3xl">
              <SectionHeading className="text-left">Academics</SectionHeading>
              <p className="mt-6 text-muted leading-relaxed text-base md:text-[19px]">
                Building strong foundations for lifelong learning.
              </p>
              <p className="mt-4 text-muted leading-relaxed text-base md:text-lg">
                Our academic program spans the full journey of a child&apos;s
                development — from the youngest learners through graduation —
                with depth, breadth, and care at every stage.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Button href="#contact" size="md" variant="outline">
                Request Curriculum Guide <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {programs.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.article
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.07 }}
                  whileHover={{ y: -6, scale: 1.018 }}
                  className={`group relative flex flex-col p-7 md:p-8 rounded-[24px] border border-border bg-background overflow-hidden shadow-sm transition-all duration-300 ${p.glow} dark:hover:bg-white/5 ${p.borderGlow}`}
                >
                  {/* Accent blur */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-br from-scholarly/10 via-transparent to-gold/10 blur-3xl opacity-70" />

                  <div className="relative flex-1 flex flex-col">
                    {/* Icon + band */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div
                        className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${p.iconBg} border flex items-center justify-center shadow-sm`}
                      >
                        <Icon
                          className="w-7 h-7 md:w-8 md:h-8 text-foreground dark:text-white"
                          strokeWidth={1.7}
                        />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.16em] uppercase ${p.accent} shadow-sm whitespace-nowrap`}>
                        Program
                      </span>
                    </div>

                    <h3 className="text-xl md:text-[22px] font-semibold text-foreground mb-2 leading-snug">
                      {p.name}
                    </h3>

                    <div className="text-xs md:text-sm font-semibold tracking-wide text-scholarly dark:text-scholarly-light mb-4">
                      {p.band}
                    </div>

                    <p className="text-muted leading-relaxed text-sm md:text-base mb-6">
                      {p.description}
                    </p>

                    <div className="mt-auto">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm font-bold text-scholarly dark:text-scholarly-light group-hover:gap-3 transition-all"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
