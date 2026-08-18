"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  School as Classrooms,
  FlaskConical,
  Library,
  Monitor,
  Dumbbell,
  Palette as CreativeIcon,
  ArrowRight,
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

type Facility = {
  icon: LucideIcon;
  title: string;
  tag: string;
  caption: string;
  gradient: string;
  tagColor: string;
  order: "tall" | "wide" | "standard";
};

const facilities: Facility[] = [
  {
    icon: Classrooms,
    title: "Classrooms",
    tag: "Learning Spaces",
    caption:
      "[PLACEHOLDER] Bright, modern, purpose-built classrooms designed for engagement, collaboration, and focused teaching.",
    gradient:
      "bg-gradient-to-br from-scholarly via-scholarly-light to-scholarly-pale dark:from-scholarly dark:via-scholarly-light dark:to-scholarly-pale",
    tagColor: "bg-scholarly text-white",
    order: "tall",
  },
  {
    icon: FlaskConical,
    title: "Laboratories",
    tag: "Sciences",
    caption:
      "[PLACEHOLDER] Fully equipped labs for biology, chemistry, physics, and STEAM exploration — enabling hands-on discovery.",
    gradient:
      "bg-gradient-to-br from-success via-emerald-600 to-emerald-200 dark:from-success dark:via-emerald-700 dark:to-emerald-950",
    tagColor: "bg-success text-white",
    order: "standard",
  },
  {
    icon: Library,
    title: "Library",
    tag: "Knowledge Hub",
    caption:
      "[PLACEHOLDER] Extensive print and digital collections, comfortable reading spaces, and expert librarian guidance for research and reading.",
    gradient:
      "bg-gradient-to-br from-gold via-accent to-gold-pale dark:from-gold dark:via-accent dark:to-amber-950",
    tagColor: "bg-gold text-white",
    order: "wide",
  },
  {
    icon: Monitor,
    title: "Computer Labs",
    tag: "Technology",
    caption:
      "[PLACEHOLDER] Modern computing facilities with up-to-date hardware and software supporting coding, design, research, and creation.",
    gradient:
      "bg-gradient-to-br from-scholarly-light via-blue-600 to-sky-300 dark:from-scholarly-light dark:via-blue-700 dark:to-blue-950",
    tagColor: "bg-scholarly-light text-white",
    order: "standard",
  },
  {
    icon: Dumbbell,
    title: "Sports Facilities",
    tag: "Athletics & Wellbeing",
    caption:
      "[PLACEHOLDER] Gymnasium, playing fields, courts, and fitness areas supporting team sports, physical education, and lifelong wellness.",
    gradient:
      "bg-gradient-to-br from-accent via-orange-500 to-amber-200 dark:from-accent dark:via-orange-700 dark:to-amber-950",
    tagColor: "bg-accent text-white",
    order: "tall",
  },
  {
    icon: CreativeIcon,
    title: "Creative Spaces",
    tag: "Arts & Design",
    caption:
      "[PLACEHOLDER] Purpose-built studios for visual arts, music, dance, theatre, and digital media — where creativity comes to life.",
    gradient:
      "bg-gradient-to-br from-purple-600 via-pink-500 to-rose-300 dark:from-purple-700 dark:via-pink-700 dark:to-rose-950",
    tagColor: "bg-scholarly text-white",
    order: "wide",
  },
];

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="py-section-sm md:py-section-md bg-foreground/[0.025] dark:bg-white/[0.02] relative overflow-hidden"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="text-left max-w-3xl">
            <SectionHeading className="text-left">Our Learning Environment</SectionHeading>
            <p className="mt-6 text-muted leading-relaxed text-base md:text-lg">
              Great learning happens in great spaces. Explore the campus
              facilities that support — and inspire — every dimension of life
              at Pharo Foundation.
            </p>
          </div>

          {/* Responsive bento-style image grid */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-5 md:gap-6 auto-rows-[220px] md:auto-rows-[260px]">
            {facilities.map((f, idx) => {
              const Icon = f.icon;
              // Assign span widths per category
              const colSpan =
                f.order === "wide"
                  ? "sm:col-span-6 lg:col-span-8"
                  : f.order === "tall"
                  ? "sm:col-span-3 lg:col-span-4"
                  : "sm:col-span-3 lg:col-span-4";
              const rowSpan =
                f.order === "tall"
                  ? "row-span-2 md:row-span-2"
                  : f.order === "wide"
                  ? "row-span-1 md:row-span-1"
                  : "row-span-1 md:row-span-1";

              return (
                <motion.article
                  key={f.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.08 }}
                  whileHover={{ y: -6, scale: 1.012 }}
                  className={`group relative overflow-hidden rounded-[24px] border border-border shadow-sm transition-all duration-300 hover:shadow-[0_0_36px_rgba(30,58,95,0.18)] dark:hover:border-scholarly/40 ${colSpan} ${rowSpan}`}
                >
                  {/* Image layer — replaceable photo. Currently stylised gradient placeholder. */}
                  <div className={`absolute inset-0 ${f.gradient}`}>
                    {/* Soft grainy overlay for depth */}
                    <div className="absolute inset-0 opacity-[0.12] dark:opacity-[0.18] mix-blend-overlay"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.85), transparent 55%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.25), transparent 55%)",
                      }}
                    />
                    {/* Decorative oversized icon (background visual) */}
                    <div className="absolute -right-6 -bottom-10 opacity-30">
                      <Icon
                        className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] text-white/60"
                        strokeWidth={1}
                      />
                    </div>
                  </div>

                  {/* Darkening overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-scholarly/95 via-scholarly/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top tag */}
                  <div className="absolute top-5 left-5 z-10">
                    <span
                      className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase ${f.tagColor} shadow-sm`}
                    >
                      {f.tag}
                    </span>
                  </div>

                  {/* Learn More — visible on hover */}
                  <div className="absolute top-5 right-5 z-10 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 text-scholarly text-xs font-bold shadow-md border border-white/60 backdrop-blur">
                      View Details
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.2} />
                    </span>
                  </div>

                  {/* Content anchor bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 z-10 text-white">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={1.8} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif text-xl md:text-2xl font-bold leading-tight mb-2">
                          {f.title}
                        </h3>
                        <p className="text-white/85 text-sm md:text-[15px] leading-relaxed line-clamp-3">
                          {f.caption}
                        </p>
                      </div>
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
