"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Dumbbell,
  UsersRound,
  Palette,
  Cpu,
  Trophy,
  Crown,
  HeartHandshake,
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Tag from "../ui/Tag";

type Activity = {
  icon: LucideIcon;
  title: string;
  tag: string;
  tagColor: string;
  description: string;
  examples: string[];
  accent: string;
  iconBg: string;
  shadowGlow: string;
  borderGlow: string;
};

const activities: Activity[] = [
  {
    icon: Dumbbell,
    title: "Sports",
    tag: "Athletics",
    tagColor: "bg-accent/10 text-accent border-accent/20",
    description:
      "[PLACEHOLDER] Competitive and recreational athletic programs that build teamwork, resilience, fitness, and school spirit through every season.",
    examples: ["Team Sports", "Individual Events", "PE Classes", "Tournaments"],
    accent: "from-accent/25 via-orange-500/15 to-gold/10",
    iconBg: "bg-gradient-to-br from-accent/30 to-gold/20 text-white",
    shadowGlow: "hover:shadow-[0_0_32px_rgba(166,110,63,0.18)]",
    borderGlow: "dark:hover:border-accent/40",
  },
  {
    icon: UsersRound,
    title: "Clubs",
    tag: "Student Led",
    tagColor: "bg-scholarly/10 text-scholarly border-scholarly/20",
    description:
      "[PLACEHOLDER] A wide range of student clubs and organizations — so every student can pursue passions, find community, and take initiative.",
    examples: ["Student Council", "Debate Club", "Robotics", "Model UN"],
    accent: "from-scholarly/25 via-scholarly-light/15 to-blue-500/10",
    iconBg: "bg-gradient-to-br from-scholarly/30 to-scholarly-light/20 text-white",
    shadowGlow: "hover:shadow-[0_0_32px_rgba(30,58,95,0.18)]",
    borderGlow: "dark:hover:border-scholarly/40",
  },
  {
    icon: Palette,
    title: "Arts",
    tag: "Creative",
    tagColor: "bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/20",
    description:
      "[PLACEHOLDER] Rich programs in visual arts, music, dance, and theatre — giving every student space to explore, create, perform, and grow.",
    examples: ["Visual Arts", "Choir & Band", "Theatre", "Dance"],
    accent: "from-purple-500/25 via-pink-500/15 to-rose-500/10",
    iconBg: "bg-gradient-to-br from-purple-500/30 to-pink-500/20 text-white",
    shadowGlow: "hover:shadow-[0_0_32px_rgba(120,40,200,0.16)]",
    borderGlow: "dark:hover:border-purple-400/40",
  },
  {
    icon: Cpu,
    title: "Technology",
    tag: "Digital",
    tagColor: "bg-scholarly-light/10 text-scholarly-light border-scholarly-light/20",
    description:
      "[PLACEHOLDER] Tech-focused activities that build creative confidence with digital tools — from coding and robotics to design and film.",
    examples: ["Coding Clubs", "Robotics", "Digital Design", "Media"],
    accent: "from-scholarly-light/25 via-cyan-500/15 to-sky-500/10",
    iconBg: "bg-gradient-to-br from-scholarly-light/30 to-blue-500/20 text-white",
    shadowGlow: "hover:shadow-[0_0_32px_rgba(45,79,122,0.18)]",
    borderGlow: "dark:hover:border-scholarly-light/40",
  },
  {
    icon: Trophy,
    title: "Competitions",
    tag: "Excellence",
    tagColor: "bg-gold/10 text-gold border-gold/20",
    description:
      "[PLACEHOLDER] Academic, artistic, and athletic competitions that invite students to stretch themselves, represent our school, and celebrate achievement.",
    examples: ["Academic Olympiads", "Sports Fixtures", "Arts Festivals", "Debate"],
    accent: "from-gold/25 via-amber-500/15 to-yellow-500/10",
    iconBg: "bg-gradient-to-br from-gold/30 to-amber-500/20 text-white",
    shadowGlow: "hover:shadow-[0_0_32px_rgba(184,137,60,0.18)]",
    borderGlow: "dark:hover:border-gold/40",
  },
  {
    icon: Crown,
    title: "Leadership",
    tag: "Character",
    tagColor: "bg-scholarly/10 text-scholarly border-scholarly/20",
    description:
      "[PLACEHOLDER] Formal and informal student leadership programs that prepare young people to lead with integrity, empathy, and confidence.",
    examples: ["Prefects", "House Captains", "Mentorship", "Events"],
    accent: "from-scholarly/25 via-scholarly-light/15 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-scholarly/30 to-success/20 text-white",
    shadowGlow: "hover:shadow-[0_0_32px_rgba(30,58,95,0.18)]",
    borderGlow: "dark:hover:border-scholarly/40",
  },
  {
    icon: HeartHandshake,
    title: "Community Activities",
    tag: "Service",
    tagColor: "bg-success/10 text-success border-success/20",
    description:
      "[PLACEHOLDER] Meaningful service learning and community engagement that connects students to local and global challenges with compassion.",
    examples: ["Community Service", "Charity Drives", "Global Projects", "Partnerships"],
    accent: "from-success/25 via-emerald-500/15 to-teal-500/10",
    iconBg: "bg-gradient-to-br from-success/30 to-emerald-500/20 text-white",
    shadowGlow: "hover:shadow-[0_0_32px_rgba(46,125,87,0.18)]",
    borderGlow: "dark:hover:border-success/40",
  },
];

const featuredTags = [
  "House System",
  "School Traditions",
  "Annual Events",
  "Summer Programs",
  "Global Exchange",
  "Parent Partnership",
];

export default function StudentLife() {
  return (
    <section id="student-life" className="py-section-sm md:py-section-md relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="text-left max-w-3xl">
            <SectionHeading className="text-left">Life Beyond the Classroom</SectionHeading>
            <p className="mt-6 text-muted leading-relaxed text-base md:text-lg">
              Student life at Pharo Foundation is rich, varied, and full of
              opportunity. These are the experiences — with teammates,
              classmates, mentors, and friends — that form memories for a
              lifetime.
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {activities.map((a, idx) => {
              const Icon = a.icon;
              const isLastWide =
                idx === activities.length - 1; // 7th card spans 2 cols on large screens
              return (
                <motion.article
                  key={a.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.07 }}
                  whileHover={{ y: -6, scale: 1.018 }}
                  className={`group relative flex flex-col p-7 md:p-8 rounded-[24px] border border-border bg-background overflow-hidden shadow-sm transition-all duration-300 ${a.shadowGlow} dark:hover:bg-white/5 ${a.borderGlow} ${
                    isLastWide ? "lg:col-span-2" : ""
                  }`}
                >
                  {/* Background accent wash */}
                  <div className={`absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br ${a.accent} blur-3xl opacity-80`} />

                  <div className="relative flex-1 flex flex-col">
                    {/* Icon + tag row */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div
                        className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${a.iconBg} flex items-center justify-center shadow-sm border border-white/10`}
                      >
                        <Icon
                          className="w-7 h-7 md:w-8 md:h-8 text-white dark:text-white"
                          strokeWidth={1.8}
                        />
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full border text-[10px] font-bold tracking-[0.2em] uppercase ${a.tagColor}`}
                      >
                        {a.tag}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-[22px] font-semibold text-foreground mb-3 leading-snug">
                      {a.title}
                    </h3>

                    <p className="text-muted leading-relaxed text-sm md:text-base mb-5">
                      {a.description}
                    </p>

                    {/* Example chips */}
                    <div className="mt-auto flex flex-wrap gap-2.5">
                      {a.examples.map((ex) => (
                        <Tag key={ex} size="sm">
                          {ex}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Signature student experiences strip */}
          <div className="mt-14 md:mt-16 pt-10 md:pt-12 border-t border-border/60 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 text-left">
            <div className="md:max-w-sm flex-shrink-0">
              <h4 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2 leading-snug">
                [PLACEHOLDER] Signature Experiences
              </h4>
              <p className="text-muted text-sm md:text-base leading-relaxed">
                A few of the things that make life at Pharo Foundation
                distinctive.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {featuredTags.map((t) => (
                <Tag key={t} size="md">
                  {t}
                </Tag>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
