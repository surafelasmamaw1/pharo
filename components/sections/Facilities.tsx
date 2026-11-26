"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  School as Classrooms,
  FlaskConical,
  Library,
  Monitor,
  Dumbbell,
  Palette as CreativeIcon,
  ArrowRight,
  Compass,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

type Facility = {
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  tag: string;
  caption: string;
  highlight: string;
  tagColor: string;
  image: string;
};

const facilities: Facility[] = [
  {
    icon: Classrooms,
    title: "Modern Classrooms",
    shortTitle: "Classrooms",
    tag: "Learning Spaces",
    caption:
      "Bright, purpose-built classrooms designed for active engagement, collaboration, and focused instruction.",
    highlight: "Smart boards & ergonomic seating",
    tagColor: "bg-scholarly text-white",
    image: "/classrooms.png",
  },
  {
    icon: FlaskConical,
    title: "Science Laboratories",
    shortTitle: "Sciences",
    tag: "Sciences",
    caption:
      "Dedicated labs for biology, chemistry, and physics — enabling hands-on experimentation and scientific inquiry.",
    highlight: "Biology, Chemistry & Physics suites",
    tagColor: "bg-success text-white",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1000&q=80&auto=format&fit=crop",
  },
  {
    icon: Library,
    title: "School Library",
    shortTitle: "Library",
    tag: "Knowledge Hub",
    caption:
      "Rich print and digital collections with quiet reading spaces and guided research support for every scholar.",
    highlight: "Quiet study & research archives",
    tagColor: "bg-gold text-white",
    image: "/library.png",
  },
  {
    icon: Monitor,
    title: "Computer & ICT Labs",
    shortTitle: "ICT Labs",
    tag: "Technology",
    caption:
      "Modern computing suites with up-to-date hardware and software for coding, digital literacy, and research.",
    highlight: "1:1 workstation access",
    tagColor: "bg-scholarly-light text-white",
    image: "/computer-labs.png",
  },
  {
    icon: Dumbbell,
    title: "Sports & Athletics",
    shortTitle: "Athletics",
    tag: "Athletics & Wellbeing",
    caption:
      "Playing fields and courts supporting team athletics, physical education, and lifelong student wellness.",
    highlight: "Football pitch & athletics track",
    tagColor: "bg-accent text-white",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1000&q=80&auto=format&fit=crop",
  },
  {
    icon: CreativeIcon,
    title: "Creative & Arts Studios",
    shortTitle: "Arts Studio",
    tag: "Arts & Design",
    caption:
      "Dedicated spaces for visual arts, music, and cultural expression — where student creativity comes to life.",
    highlight: "Visual arts, music & culture",
    tagColor: "bg-scholarly text-white",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1000&q=80&auto=format&fit=crop",
  },
];

export default function Facilities() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selected, setSelected] = useState<Facility | null>(null);

  useEffect(() => {
    if (isPaused || selected) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % facilities.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, selected]);

  const activeFacility = facilities[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % facilities.length);
  };

  return (
    <section
      id="facilities"
      className="py-16 md:py-24 bg-foreground/[0.025] dark:bg-white/[0.02] relative overflow-hidden"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Compact Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-scholarly/15 bg-scholarly-pale/70 mb-5">
                <Compass className="w-4 h-4 text-scholarly" strokeWidth={1.8} />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-scholarly">
                  Campus &amp; Facilities
                </span>
              </div>
              <SectionHeading className="text-left">Our Learning Environment</SectionHeading>
              <p className="mt-3 text-muted leading-relaxed text-sm md:text-base">
                Explore the purpose-built spaces that support academic excellence and holistic growth at Pharo School Assosa.
              </p>
            </div>

            {/* Step Controls */}
            <div className="flex items-center gap-2.5 self-start md:self-end">
              <span className="text-xs font-bold tracking-widest text-muted mr-2">
                0{activeIdx + 1} / 0{facilities.length}
              </span>
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-border bg-background hover:bg-scholarly hover:text-white hover:border-scholarly flex items-center justify-center text-foreground transition-all shadow-sm"
                aria-label="Previous facility"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-border bg-background hover:bg-scholarly hover:text-white hover:border-scholarly flex items-center justify-center text-foreground transition-all shadow-sm"
                aria-label="Next facility"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Desktop: Creative Expanding Horizontal Accordion */}
          <div
            className="hidden lg:flex gap-3 h-[430px] w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {facilities.map((f, idx) => {
              const Icon = f.icon;
              const isActive = idx === activeIdx;

              return (
                <motion.div
                  key={f.title}
                  layout
                  transition={{ type: "spring", stiffness: 220, damping: 26 }}
                  onClick={() => (isActive ? setSelected(f) : setActiveIdx(idx))}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`relative rounded-[24px] overflow-hidden cursor-pointer border transition-shadow duration-300 ${
                    isActive
                      ? "flex-[4.5] border-scholarly/30 shadow-[0_20px_50px_rgba(30,58,95,0.22)]"
                      : "flex-[0.65] border-border/70 hover:flex-[0.8] opacity-90 hover:opacity-100"
                  }`}
                >
                  {/* Photo with smooth Ken Burns zoom when active */}
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className={`object-cover transition-transform duration-700 ease-out ${
                      isActive ? "scale-105" : "scale-100 grayscale-[35%]"
                    }`}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-t from-[#0D1C30]/95 via-[#0D1C30]/40 to-black/15"
                        : "bg-[#122339]/70 hover:bg-[#122339]/55"
                    }`}
                  />

                  {/* Collapsed Strip Content */}
                  {!isActive && (
                    <div className="absolute inset-0 flex flex-col items-center justify-between py-6 px-2 z-10">
                      <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white">
                        <Icon className="w-4 h-4 text-gold" strokeWidth={2} />
                      </div>
                      <span
                        className="text-white/90 font-semibold text-xs tracking-[0.18em] uppercase whitespace-nowrap"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                      >
                        {f.shortTitle}
                      </span>
                      <span className="text-[10px] font-bold text-white/50">0{idx + 1}</span>
                    </div>
                  )}

                  {/* Expanded Active Panel Content */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key={f.title}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="absolute inset-0 p-8 flex flex-col justify-between z-10 text-left"
                      >
                        {/* Top Badges */}
                        <div className="flex items-center justify-between gap-3">
                          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[10px] font-bold tracking-[0.18em] uppercase text-white">
                            <Icon className="w-3.5 h-3.5 text-gold" strokeWidth={2} />
                            {f.tag}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-gold/90 text-slate-950 text-[11px] font-bold shadow-sm">
                            {f.highlight}
                          </span>
                        </div>

                        {/* Bottom Copy & CTA */}
                        <div className="max-w-xl">
                          <h3 className="font-serif text-3xl xl:text-4xl font-bold text-white leading-tight mb-2.5">
                            {f.title}
                          </h3>
                          <p className="text-white/85 text-sm leading-relaxed mb-5">
                            {f.caption}
                          </p>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelected(f);
                            }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-scholarly text-xs font-bold uppercase tracking-wider hover:bg-gold hover:text-slate-950 transition-colors shadow-md group/btn"
                          >
                            Explore Space
                            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.2} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Animated Auto-Advance Progress Bar */}
                  {isActive && !isPaused && (
                    <motion.div
                      key={`progress-${activeIdx}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gold origin-left z-20"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Mobile / Tablet: Compact Spotlight Card + Pill Selector */}
          <div className="lg:hidden space-y-4">
            <div className="relative h-[340px] sm:h-[380px] rounded-[22px] overflow-hidden border border-border shadow-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFacility.title}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                  onClick={() => setSelected(activeFacility)}
                >
                  <Image
                    src={activeFacility.image}
                    alt={activeFacility.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C30]/95 via-[#0D1C30]/40 to-black/15" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[10px] font-bold tracking-[0.18em] uppercase text-white">
                      {activeFacility.tag}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-gold text-slate-950 text-[10px] font-bold">
                      {activeFacility.highlight}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1.5">
                      {activeFacility.title}
                    </h3>
                    <p className="text-white/85 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
                      {activeFacility.caption}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold">
                      Tap to explore <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Compact Pill Selector */}
            <div className="flex flex-wrap gap-2">
              {facilities.map((f, idx) => {
                const Icon = f.icon;
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={f.title}
                    onClick={() => setActiveIdx(idx)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-scholarly text-white shadow-sm"
                        : "bg-background border border-border text-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {f.shortTitle}
                  </button>
                );
              })}
            </div>
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
              className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm"
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
                <div className="relative aspect-[16/8] bg-scholarly overflow-hidden">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 512px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white hover:bg-white/35 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" strokeWidth={2} />
                  </button>
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase ${selected.tagColor} shadow-sm`}>
                      {selected.tag}
                    </span>
                  </div>
                </div>

                <div className="p-7 md:p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 ${selected.tagColor}`}>
                      {(() => {
                        const Icon = selected.icon;
                        return <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />;
                      })()}
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight">
                        {selected.title}
                      </h2>
                      <p className="text-xs font-semibold text-gold mt-0.5">{selected.highlight}</p>
                    </div>
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
