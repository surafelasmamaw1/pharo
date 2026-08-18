"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  UserCheck,
  Lightbulb,
  Sprout,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

type WhyCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  tagColor: string;
  chipBg: string;
  iconBg: string;
  shadowGlow: string;
  borderGlow: string;
};

const cards: WhyCard[] = [
  {
    icon: Award,
    title: "Quality Education",
    description:
      "[PLACEHOLDER — replace with official quality statement] A rigorous, balanced, and research-based curriculum that upholds high academic standards while nurturing genuine curiosity and love of learning.",
    tagColor: "text-scholarly border-scholarly/15 bg-scholarly/[0.07]",
    chipBg: "bg-scholarly text-white",
    iconBg: "from-scholarly/25 to-scholarly-light/10 border-scholarly/20",
    shadowGlow: "hover:shadow-[0_0_32px_rgba(30,58,95,0.18)]",
    borderGlow: "dark:hover:border-scholarly/40",
  },
  {
    icon: UserCheck,
    title: "Experienced Educators",
    description:
      "[PLACEHOLDER] Talented, dedicated faculty who combine deep subject expertise with a genuine passion for teaching, mentorship, and the success of every individual student.",
    tagColor: "text-gold border-gold/20 bg-gold/[0.08]",
    chipBg: "bg-gold text-white",
    iconBg: "from-gold/25 to-accent/10 border-gold/20",
    shadowGlow: "hover:shadow-[0_0_32px_rgba(184,137,60,0.18)]",
    borderGlow: "dark:hover:border-gold/40",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Technology",
    description:
      "[PLACEHOLDER] Modern learning tools, technology-rich classrooms, and forward-thinking pedagogy that prepare students to thrive in a rapidly changing world.",
    tagColor: "text-scholarly-light border-scholarly-light/20 bg-scholarly-light/[0.08]",
    chipBg: "bg-scholarly-light text-white",
    iconBg: "from-scholarly-light/25 to-cyan-500/10 border-scholarly-light/20",
    shadowGlow: "hover:shadow-[0_0_32px_rgba(45,79,122,0.18)]",
    borderGlow: "dark:hover:border-scholarly-light/40",
  },
  {
    icon: Sprout,
    title: "Student Development",
    description:
      "[PLACEHOLDER] A whole-child approach — intellectual, social, emotional, and physical — that helps every student discover strengths, build confidence, and grow into thoughtful young adults.",
    tagColor: "text-success border-success/20 bg-success/[0.08]",
    chipBg: "bg-success text-white",
    iconBg: "from-success/25 to-emerald-500/10 border-success/20",
    shadowGlow: "hover:shadow-[0_0_32px_rgba(46,125,87,0.18)]",
    borderGlow: "dark:hover:border-success/40",
  },
  {
    icon: ShieldCheck,
    title: "Safe Learning Environment",
    description:
      "[PLACEHOLDER] A caring, inclusive, and well-supervised campus culture where every student feels secure, respected, and free to focus on learning and healthy growth.",
    tagColor: "text-accent border-accent/20 bg-accent/[0.08]",
    chipBg: "bg-accent text-white",
    iconBg: "from-accent/25 to-gold/10 border-accent/20",
    shadowGlow: "hover:shadow-[0_0_32px_rgba(166,110,63,0.18)]",
    borderGlow: "dark:hover:border-accent/40",
  },
  {
    icon: UsersRound,
    title: "Community",
    description:
      "[PLACEHOLDER] A warm, connected community of students, teachers, staff, and families — united by shared values, active partnership, and mutual support.",
    tagColor: "text-scholarly border-scholarly/15 bg-scholarly/[0.06]",
    chipBg: "bg-scholarly text-white",
    iconBg: "from-scholarly/20 to-blue-500/10 border-scholarly/20",
    shadowGlow: "hover:shadow-[0_0_32px_rgba(30,58,95,0.18)]",
    borderGlow: "dark:hover:border-scholarly/40",
  },
];

export default function Services() {
  return (
    <section
      id="why-choose"
      className="py-section-sm md:py-section-md bg-foreground/[0.025] dark:bg-white/[0.02] relative"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="text-left max-w-3xl">
            <SectionHeading className="text-left">Why Choose Pharo Foundation?</SectionHeading>
            <p className="mt-6 text-muted leading-relaxed text-base md:text-lg">
              Families choose Pharo Foundation because of our enduring
              commitment to excellence in every dimension of school life. Here
              are six reasons parents and students consistently place their
              trust in our community.
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {cards.map((c, idx) => {
              const Icon = c.icon;
              return (
                <motion.article
                  key={c.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`relative p-7 md:p-8 rounded-[24px] border border-border bg-background overflow-hidden shadow-sm transition-all duration-300 ${c.shadowGlow} dark:hover:bg-white/5 ${c.borderGlow}`}
                >
                  {/* Subtle accent corner */}
                  <div
                    className={`absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br ${c.iconBg} blur-3xl opacity-80`}
                  />

                  <div className="relative">
                    {/* Numbered chip */}
                    <div
                      className={`inline-flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold ${c.chipBg} shadow-sm mb-6`}
                    >
                      0{idx + 1}
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${c.iconBg} border flex items-center justify-center mb-6 shadow-sm`}
                    >
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-foreground dark:text-white" strokeWidth={1.7} />
                    </div>

                    <h3 className="text-xl md:text-[22px] font-semibold text-foreground mb-3 leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-muted leading-relaxed text-sm md:text-base">
                      {c.description}
                    </p>
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
