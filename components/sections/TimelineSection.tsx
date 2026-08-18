"use client";

import { m } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  Users,
  Rocket,
  Calendar,
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { siteConfig } from "@/lib/siteConfig";

type Milestone = {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  iconBg: string;
};

const milestones: Milestone[] = siteConfig.timeline.map((item, i) => ({
  ...item,
  icon: [Sparkles, BookOpen, GraduationCap, Users, Rocket][i],
  color: [
    "from-scholarly/25 to-scholarly-light/10",
    "from-gold/25 to-accent/10",
    "from-success/25 to-emerald-500/10",
    "from-accent/25 to-gold/10",
    "from-scholarly-light/25 to-cyan-500/10",
  ][i],
  iconBg: [
    "bg-scholarly text-white",
    "bg-gold text-white",
    "bg-success text-white",
    "bg-accent text-white",
    "bg-scholarly-light text-white",
  ][i],
}));

export default function TimelineSection() {
  return (
    <section
      id="history"
      className="py-section-sm md:py-section-md relative overflow-hidden"
    >
      <Container>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="max-w-3xl text-left mb-14 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-scholarly/15 bg-scholarly-pale/60 mb-7">
              <Calendar className="w-4 h-4 text-scholarly" strokeWidth={1.8} />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-scholarly">
                History &amp; Milestones
              </span>
            </div>
            <SectionHeading className="text-left">Our Journey</SectionHeading>
            <p className="mt-6 text-muted leading-relaxed text-base md:text-lg">
              The story of Pharo Foundation is one of sustained commitment,
              thoughtful growth, and a community that has always put students
              first. These milestones tell the story so far.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Centered vertical line (desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-scholarly/50 via-border to-transparent -translate-x-px" />

            <div className="space-y-10 md:space-y-14">
              {milestones.map((ms, idx) => {
                const Icon = ms.icon;
                const isEven = idx % 2 === 0;
                return (
                  <m.div
                    key={`${ms.year}-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: idx * 0.1 }}
                    className={`relative flex items-start gap-5 md:gap-10 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Icon node on center line (desktop) */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${ms.iconBg} flex items-center justify-center shadow-lg border-[3px] border-background`}
                      >
                        <Icon
                          className="w-5 h-5 md:w-6 md:h-6 text-white"
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    {/* Spacer — pushes card onto one side (desktop) */}
                    <div className="hidden md:block md:w-1/2" />

                    {/* Card */}
                    <m.div
                      whileHover={{ y: -5, scale: 1.015 }}
                      transition={{ duration: 0.2 }}
                      className={`flex-1 md:w-1/2 md:max-w-[46%] p-7 md:p-8 rounded-[26px] border border-border bg-background overflow-hidden relative shadow-sm hover:shadow-[0_0_32px_rgba(30,58,95,0.16)] dark:hover:bg-white/5 dark:hover:border-scholarly/40 transition-all duration-300 ${
                        isEven ? "md:pr-10" : "md:pl-10"
                      } ml-16 md:ml-0`}
                    >
                      <div
                        className={`absolute -top-12 -right-12 w-44 h-44 rounded-full bg-gradient-to-br ${ms.color} blur-3xl opacity-80`}
                      />

                      <div className="relative">
                        {/* Year badge (mobile icon lives here too) */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <div
                            className={`md:hidden w-10 h-10 rounded-full ${ms.iconBg} flex items-center justify-center flex-shrink-0 shadow`}
                          >
                            <Icon
                              className="w-4.5 h-4.5 text-white"
                              strokeWidth={2}
                            />
                          </div>
                          <span className="text-sm font-bold tracking-[0.18em] uppercase text-scholarly dark:text-scholarly-light">
                            {ms.year}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-[22px] font-semibold text-foreground mb-3 leading-snug">
                          {ms.title}
                        </h3>
                        <p className="text-muted leading-relaxed text-sm md:text-base">
                          {ms.description}
                        </p>
                      </div>
                    </m.div>
                  </m.div>
                );
              })}
            </div>
          </div>
        </m.div>
      </Container>
    </section>
  );
}
