"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  School as Classrooms,
  FlaskConical,
  Library,
  Monitor,
  Dumbbell,
  Palette as CreativeIcon,
  ArrowRight,
  X,
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
  image?: string;
};

const facilities: Facility[] = [
  {
    icon: Classrooms,
    title: "Classrooms",
    tag: "Learning Spaces",
    caption:
      "Bright, modern, purpose-built classrooms designed for engagement, collaboration, and focused teaching.",
    gradient:
      "bg-gradient-to-br from-scholarly via-scholarly-light to-scholarly-pale dark:from-scholarly dark:via-scholarly-light dark:to-scholarly-pale",
    tagColor: "bg-scholarly text-white",
    order: "tall",
    image: "/classrooms.png",
  },
  {
    icon: FlaskConical,
    title: "Laboratories",
    tag: "Sciences",
    caption:
      "Fully equipped labs for biology, chemistry, physics, and STEAM exploration — enabling hands-on discovery.",
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
      "Extensive print and digital collections, comfortable reading spaces, and expert librarian guidance for research and reading.",
    gradient:
      "bg-gradient-to-br from-gold via-accent to-gold-pale dark:from-gold dark:via-accent dark:to-amber-950",
    tagColor: "bg-gold text-white",
    order: "wide",
    image: "/library.png",
  },
  {
    icon: Monitor,
    title: "Computer Labs",
    tag: "Technology",
    caption:
      "Modern computing facilities with up-to-date hardware and software supporting coding, design, research, and creation.",
    gradient:
      "bg-gradient-to-br from-scholarly-light via-blue-600 to-sky-300 dark:from-scholarly-light dark:via-blue-700 dark:to-blue-950",
    tagColor: "bg-scholarly-light text-white",
    order: "standard",
    image: "/computer-labs.png",
  },
  {
    icon: Dumbbell,
    title: "Sports Facilities",
    tag: "Athletics & Wellbeing",
    caption:
      "Gymnasium, playing fields, courts, and fitness areas supporting team sports, physical education, and lifelong wellness.",
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
      "Purpose-built studios for visual arts, music, dance, theatre, and digital media — where creativity comes to life.",
    gradient:
      "bg-gradient-to-br from-purple-600 via-pink-500 to-rose-300 dark:from-purple-700 dark:via-pink-700 dark:to-rose-950",
    tagColor: "bg-scholarly text-white",
    order: "wide",
  },
];

export default function Facilities() {
  const [selected, setSelected] = useState<Facility | null>(null);

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

          {/* Bento grid */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-5 md:gap-6 auto-rows-[220px] md:auto-rows-[260px]">
            {facilities.map((f, idx) => {
              const Icon = f.icon;
              const colSpan =
                f.order === "wide"
                  ? "sm:col-span-6 lg:col-span-8"
                  : "sm:col-span-3 lg:col-span-4";
              const rowSpan =
                f.order === "tall" ? "row-span-2" : "row-span-1";

              return (
                <motion.article
                  key={f.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.08 }}
                  whileHover={{ y: -4, scale: 1.012 }}
                  onClick={() => setSelected(f)}
                  className={`group relative overflow-hidden rounded-[24px] border border-border shadow-sm cursor-pointer transition-all duration-300 hover:shadow-[0_0_36px_rgba(30,58,95,0.22)] ${colSpan} ${rowSpan}`}
                >
                  {/* Background — photo or gradient */}
                  <div className={`absolute inset-0 ${f.gradient}`}>
                    {f.image && (
                      <img
                        src={f.image}
                        alt={f.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                    {!f.image && (
                      <div className="absolute -right-6 -bottom-10 opacity-20">
                        <Icon className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] text-white" strokeWidth={1} />
                      </div>
                    )}
                  </div>

                  {/* Subtle dark overlay — deepens on hover */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

                  {/* Top tag */}
                  <div className="absolute top-5 left-5 z-10">
                    <span className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase ${f.tagColor} shadow-sm`}>
                      {f.tag}
                    </span>
                  </div>

                  {/* View Details — appears on hover, centered */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-scholarly text-sm font-bold shadow-lg">
                      View Details
                      <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </Container>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 pointer-events-none"
            >
              <div className="relative w-full max-w-lg bg-background rounded-[28px] border border-border shadow-2xl overflow-hidden pointer-events-auto">

                {/* Photo / gradient header */}
                <div className={`relative aspect-[16/7] ${selected.gradient} overflow-hidden`}>
                  {selected.image && (
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  {/* Close */}
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white hover:bg-white/35 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" strokeWidth={2} />
                  </button>
                  {/* Tag in header */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase ${selected.tagColor} shadow-sm`}>
                      {selected.tag}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-7 md:p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 ${selected.tagColor}`}>
                      {(() => { const Icon = selected.icon; return <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />; })()}
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight">
                      {selected.title}
                    </h2>
                  </div>
                  <p className="text-muted leading-relaxed text-base md:text-[17px]">
                    {selected.caption}
                  </p>
                  <div className="mt-6 pt-5 border-t border-border/60 flex justify-end">
                    <button
                      onClick={() => setSelected(null)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-scholarly text-white text-sm font-semibold hover:bg-scholarly-light transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
