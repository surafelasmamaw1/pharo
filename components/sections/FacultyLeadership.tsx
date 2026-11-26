"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
} from "lucide-react";

interface FacultyItem {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  expertise: string;
  imageUrl?: string | null;
  order: number;
}

function getInitials(name: string): string {
  const cleaned = name.replace(/^(Ato|W\/ro|Dr\.?|Prof\.?)\s+/i, "").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "PS";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function FacultyLeadership() {
  const [faculty, setFaculty] = useState<FacultyItem[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFaculty() {
      try {
        const res = await fetch("/api/faculty", { cache: "no-store" });
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setFaculty(json.data);
        }
      } catch (err) {
        console.error("Failed to load faculty:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadFaculty();
  }, []);

  if (!isLoading && faculty.length === 0) {
    return null;
  }

  if (isLoading || faculty.length === 0) {
    return null;
  }

  const safeIdx = activeIdx < faculty.length ? activeIdx : 0;
  const activeLeader = faculty[safeIdx];
  const expertiseTags = activeLeader.expertise
    ? activeLeader.expertise
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
    : [];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + faculty.length) % faculty.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % faculty.length);
  };

  return (
    <section id="faculty" className="py-16 md:py-24 bg-slate-50/80 border-b border-border/70 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
            <div className="max-w-2xl text-left">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold mb-3">
                Academic Leadership &amp; Faculty
              </p>
              <SectionHeading className="text-left">
                Experienced Educators Inspiring Excellence
              </SectionHeading>
              <p className="mt-3 text-slate-600 leading-relaxed text-sm md:text-base">
                Teachers and department heads guiding our secondary scholars in Assosa.
              </p>
            </div>

            {/* Quick Nav Counter */}
            <div className="flex items-center gap-2.5 self-start md:self-end">
              <span className="text-xs font-bold tracking-widest text-muted mr-1">
                0{safeIdx + 1} / 0{faculty.length}
              </span>
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-border bg-white hover:bg-scholarly hover:text-white hover:border-scholarly flex items-center justify-center text-foreground transition-all shadow-sm"
                aria-label="Previous educator"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-border bg-white hover:bg-scholarly hover:text-white hover:border-scholarly flex items-center justify-center text-foreground transition-all shadow-sm"
                aria-label="Next educator"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Split Stage: Roster (Left) + Animated Spotlight Card (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Interactive Roster Selector */}
            <div className="lg:col-span-5 flex flex-col gap-2.5 justify-center">
              {faculty.map((leader, idx) => {
                const isSelected = idx === safeIdx;
                return (
                  <button
                    key={leader.id}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`relative w-full text-left p-4 rounded-2xl border transition-colors duration-200 flex items-center gap-4 ${
                      isSelected
                        ? "border-scholarly/30 text-white shadow-md"
                        : "bg-white border-slate-200/90 hover:border-scholarly/30 hover:bg-white/90 text-slate-800"
                    }`}
                  >
                    {/* Sliding Shared-Element Background */}
                    {isSelected && (
                      <motion.div
                        layoutId="faculty-active-pill"
                        transition={{ type: "spring", stiffness: 280, damping: 28 }}
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#162D4A] to-[#1E3A5F] z-0"
                      />
                    )}

                    {/* Avatar / Monogram */}
                    <div
                      className={`relative z-10 w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 font-serif font-bold text-base transition-colors ${
                        isSelected
                          ? "bg-white/15 text-gold border border-gold/40"
                          : "bg-scholarly-pale text-scholarly border border-scholarly/15"
                      }`}
                    >
                      {leader.imageUrl ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={leader.imageUrl}
                            alt={leader.name}
                            className="w-full h-full object-cover object-top"
                          />
                        </>
                      ) : (
                        <span>{getInitials(leader.name)}</span>
                      )}
                    </div>

                    {/* Name & Role */}
                    <div className="relative z-10 min-w-0 flex-1">
                      <div
                        className={`font-serif text-lg font-bold leading-snug truncate ${
                          isSelected ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {leader.name}
                      </div>
                      <div
                        className={`text-[11px] font-semibold uppercase tracking-wider truncate mt-0.5 ${
                          isSelected ? "text-gold" : "text-slate-500"
                        }`}
                      >
                        {leader.role}
                      </div>
                    </div>

                    {/* Active Indicator */}
                    <div
                      className={`relative z-10 w-2 h-2 rounded-full flex-shrink-0 transition-transform ${
                        isSelected ? "bg-gold scale-125" : "bg-slate-200"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right: Featured Educator Spotlight */}
            <div className="lg:col-span-7">
              <div className="h-full rounded-[26px] bg-white border border-slate-200/90 shadow-[0_14px_40px_rgba(30,58,95,0.08)] overflow-hidden flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLeader.id}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -18 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex flex-col flex-1 justify-between"
                  >
                    {/* Top Editorial Band */}
                    <div className="bg-gradient-to-br from-[#122339] via-[#1A3354] to-[#1E3A5F] p-7 md:p-8 text-white relative overflow-hidden">
                      <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-gold/15 blur-2xl pointer-events-none" />
                      <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
                        {/* Large Portrait / Crest */}
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-gold/50 bg-white/10 backdrop-blur flex items-center justify-center flex-shrink-0 shadow-lg">
                          {activeLeader.imageUrl ? (
                            <>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={activeLeader.imageUrl}
                                alt={activeLeader.name}
                                className="w-full h-full object-cover object-top"
                              />
                            </>
                          ) : (
                            <span className="font-serif text-3xl font-bold text-gold tracking-wider">
                              {getInitials(activeLeader.name)}
                            </span>
                          )}
                        </div>

                        <div className="min-w-0 flex-1 text-left">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-[10px] font-bold uppercase tracking-[0.18em] mb-2">
                            <Sparkles className="w-3 h-3" />
                            {activeLeader.role}
                          </div>
                          <h3 className="font-serif text-2xl sm:text-3xl md:text-[34px] font-bold text-white leading-tight break-words">
                            {activeLeader.name}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Body: Credentials + Bio + Expertise */}
                    <div className="p-7 md:p-8 flex flex-col flex-1 justify-between text-left gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-2.5 text-xs font-semibold text-scholarly bg-scholarly-pale/60 px-4 py-3 rounded-xl border border-scholarly/15 break-words [overflow-wrap:anywhere]">
                          <BookOpen className="w-4 h-4 text-scholarly flex-shrink-0 mt-0.5" />
                          <span>{activeLeader.credentials}</span>
                        </div>

                        <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed break-words [overflow-wrap:anywhere]">
                          {activeLeader.bio}
                        </p>
                      </div>

                      {expertiseTags.length > 0 && (
                        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-1">
                            Focus:
                          </span>
                          {expertiseTags.map((exp) => (
                            <span
                              key={exp}
                              className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-scholarly border border-slate-200/80"
                            >
                              {exp}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Sleek Dark Navy Faculty Benchmark Strip */}
          <div className="mt-8 p-6 md:px-8 md:py-6 rounded-2xl bg-[#122339] text-white shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-gold/20 border border-gold/30 text-gold flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white">
                  100% Certified Secondary Faculty
                </h4>
                <p className="text-xs text-white/75 mt-0.5 max-w-xl">
                  All instructional staff hold specialized bachelor&apos;s degrees or higher, certified by the Ethiopian Ministry of Education.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-xs font-semibold flex-shrink-0">
              <div>
                <span className="text-2xl font-bold font-serif text-gold block leading-none">
                  1:18
                </span>
                <span className="text-white/70 font-normal mt-1 block">
                  Teacher-Student Ratio
                </span>
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div>
                <span className="text-2xl font-bold font-serif text-gold block leading-none">
                  85%+
                </span>
                <span className="text-white/70 font-normal mt-1 block">
                  Post-Graduate Degrees
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
