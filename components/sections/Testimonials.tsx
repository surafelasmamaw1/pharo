"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

type Testimonial = {
  id?: string;
  quote: string;
  name: string;
  role: string;
  type?: "Parent" | "Student" | "Teacher";
};

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "The discipline, academic rigour, and caring teachers at Pharo School Assosa have transformed our child's confidence and national examination performance.",
    name: "Amina Tesfaye",
    role: "Parent of a Grade 8 Scholar",
    type: "Parent",
  },
  {
    quote:
      "The science laboratories and computer resources gave me the hands-on practice I needed. Our teachers are dedicated and always available during tutorial sessions.",
    name: "Daniel Bekele",
    role: "Class of 2027 — Natural Sciences",
    type: "Student",
  },
  {
    quote:
      "Teaching at Pharo School Assosa means shaping determined young minds committed to solving real challenges in Ethiopia through science and ethics.",
    name: "Sara Woldemichael",
    role: "Faculty Head — Mathematics & STEM",
    type: "Teacher",
  },
  {
    quote:
      "From the first years through the later grades, the standard stays high. The teachers give families real confidence that their children are in capable hands.",
    name: "Kaleb Akalu",
    role: "Parent",
    type: "Parent",
  },
  {
    quote:
      "What stands out for us is how Pharo opens doors. Our children are not only taught well—they are given room to grow, compete, and thrive beyond the classroom.",
    name: "Biruk Habte",
    role: "Parent",
    type: "Parent",
  },
];

function getInitials(name: string): string {
  if (!name) return "PS";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export default function Testimonials() {
  const [items, setItems] = useState<Testimonial[]>(defaultTestimonials);
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const res = await fetch("/api/testimonials");
        const json = await res.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          const apiItems: Testimonial[] = json.data;
          const merged = [
            ...apiItems,
            ...defaultTestimonials.filter(
              (d) => !apiItems.some((a) => a.name.toLowerCase() === d.name.toLowerCase())
            ),
          ];
          setItems(merged);
        }
      } catch {
        // Fallback to default curated testimonials
      }
    }
    loadTestimonials();
  }, []);

  useEffect(() => {
    if (isPaused || items.length <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIdx((prev) => (prev + 1) % items.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, items.length]);

  const safeIdx = activeIdx < items.length ? activeIdx : 0;
  const active = items[safeIdx];

  const handlePrev = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % items.length);
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50 || info.velocity.x < -300) {
      handleNext();
    } else if (info.offset.x > 50 || info.velocity.x > 300) {
      handlePrev();
    }
  };

  return (
    <section
      id="testimonials"
      className="py-14 md:py-20 bg-slate-50/70 border-y border-border/60"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Compact Header */}
          <span className="text-[11px] font-bold tracking-[0.24em] uppercase text-gold block mb-2">
            Voices
          </span>
          <SectionHeading className="text-center">
            What families say, in their own words.
          </SectionHeading>

          {/* Swipeable Spotlight Card */}
          <div className="mt-8 relative rounded-2xl bg-white border border-slate-200/90 shadow-sm px-6 py-8 sm:px-10 sm:py-10 text-left overflow-hidden">
            <Quote className="w-8 h-8 text-gold/30 mb-4" strokeWidth={1.6} />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`${active.name}-${safeIdx}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={handleDragEnd}
                className="cursor-grab active:cursor-grabbing select-none touch-pan-y"
              >
                <blockquote className="font-serif text-xl sm:text-2xl text-slate-800 leading-relaxed mb-7">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between gap-4 pt-5 border-t border-slate-100">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-scholarly-pale text-scholarly font-bold text-xs flex items-center justify-center flex-shrink-0">
                      {getInitials(active.name)}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-sm text-scholarly truncate">
                        {active.name}
                      </div>
                      <div className="text-xs text-muted truncate">
                        {active.role}
                      </div>
                    </div>
                  </div>

                  {/* Prev / Next */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={handlePrev}
                      className="w-8 h-8 rounded-full border border-slate-200 hover:bg-scholarly hover:text-white hover:border-scholarly flex items-center justify-center text-slate-600 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-8 h-8 rounded-full border border-slate-200 hover:bg-scholarly hover:text-white hover:border-scholarly flex items-center justify-center text-slate-600 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Minimal Dot Indicators */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {items.map((item, idx) => (
              <button
                key={`${item.name}-${idx}`}
                type="button"
                onClick={() => {
                  setDirection(idx > safeIdx ? 1 : -1);
                  setActiveIdx(idx);
                }}
                aria-label={`View quote from ${item.name}`}
                className={`h-2 rounded-full transition-all duration-200 ${
                  idx === safeIdx
                    ? "w-6 bg-scholarly"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
