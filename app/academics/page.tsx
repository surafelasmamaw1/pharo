"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  Baby,
  School,
  GraduationCap,
  Atom,
  Palette,
  ArrowRight,
  ArrowLeft,
  X,
  BookOpen,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

type SubjectGroup = { label: string; subjects: string[] };
type Program = {
  icon: LucideIcon;
  iconBg: string;
  name: string;
  band: string;
  description: string;
  detail: string;
  subjectGroups: SubjectGroup[];
  accent: string;
  accentBg: string;
  glow: string;
};

const coreSubjects = [
  "First Language",
  "Federal Language",
  "English",
  "Mathematics",
  "Performing & Visual Arts",
  "Health & Physical Education",
];

const programs: Program[] = [
  {
    icon: Baby,
    iconBg: "bg-gold",
    name: "Early Years",
    band: "Ages 3 – 6",
    description: "A joyful, play-based foundation where curiosity is nurtured, social-emotional skills bloom, and young learners begin their educational journey with confidence.",
    detail: "Our Early Years programme is designed around the natural curiosity of young children. Through guided play, storytelling, creative arts, and collaborative activities, children develop foundational literacy, numeracy, and social skills in a warm and nurturing environment. Every child is known by name, supported as an individual, and celebrated for their unique gifts.",
    subjectGroups: [{ label: "Core Subjects", subjects: coreSubjects }],
    accent: "bg-gold text-white",
    accentBg: "from-gold/20 to-amber-500/10 border-gold/25",
    glow: "hover:shadow-[0_0_32px_rgba(184,137,60,0.2)] hover:bg-gold/5 hover:border-gold/40",
  },
  {
    icon: School,
    iconBg: "bg-scholarly",
    name: "Primary Education",
    band: "Grades 1 – 6",
    description: "Strong foundational skills in literacy and numeracy, paired with rich explorations across disciplines — building capable, independent learners.",
    detail: "Primary education at Pharo Foundation builds the academic and personal foundations that last a lifetime. Students develop strong reading, writing, and mathematical reasoning alongside science, social studies, arts, and physical education.",
    subjectGroups: [
      { label: "Core Subjects", subjects: coreSubjects },
      { label: "Additional Subjects", subjects: ["Environmental Science", "Moral Education"] },
    ],
    accent: "bg-scholarly text-white",
    accentBg: "from-scholarly/20 to-scholarly-light/10 border-scholarly/25",
    glow: "hover:shadow-[0_0_32px_rgba(30,58,95,0.2)] hover:bg-scholarly/5 hover:border-scholarly/40",
  },
  {
    icon: BookOpen,
    iconBg: "bg-scholarly-light",
    name: "Middle School",
    band: "Grades 7 – 8",
    description: "A broadening curriculum introducing the sciences, social studies, and technology — preparing students for the demands of secondary education.",
    detail: "Middle school at Pharo Foundation bridges primary learning with the rigour of secondary education. Students engage with a wider range of disciplines, developing analytical thinking, digital literacy, and career awareness.",
    subjectGroups: [
      { label: "Core Subjects", subjects: coreSubjects },
      { label: "Additional Subjects", subjects: ["General Science", "Social Studies", "Citizenship Education", "Information Technology", "Career & Technical Education"] },
    ],
    accent: "bg-scholarly-light text-white",
    accentBg: "from-scholarly-light/20 to-blue-500/10 border-scholarly-light/25",
    glow: "hover:shadow-[0_0_32px_rgba(45,79,122,0.2)] hover:bg-scholarly-light/5 hover:border-scholarly-light/40",
  },
  {
    icon: GraduationCap,
    iconBg: "bg-success",
    name: "Secondary Education",
    band: "Grades 9 – 12",
    description: "A rigorous college-preparatory pathway with depth, choice, and challenge — preparing students for university, career, and leadership.",
    detail: "Our secondary programme offers a rigorous, breadth-and-depth curriculum designed to prepare students for university admission and lifelong success. Students are guided by expert faculty across core and specialist subjects.",
    subjectGroups: [
      { label: "Core Subjects", subjects: coreSubjects },
      { label: "Compulsory Secondary Subjects", subjects: ["Physics", "Chemistry", "Biology", "Geography", "History", "Citizenship Education", "Economics", "Information Technology", "Health & Physical Education"] },
    ],
    accent: "bg-success text-white",
    accentBg: "from-success/20 to-emerald-500/10 border-success/25",
    glow: "hover:shadow-[0_0_32px_rgba(46,125,87,0.2)] hover:bg-success/5 hover:border-success/40",
  },
  {
    icon: Atom,
    iconBg: "bg-accent",
    name: "Health Science Stream",
    band: "Grades 11 – 12",
    description: "A specialised natural science track equipping students with the knowledge and skills for careers in health, medicine, and life sciences.",
    detail: "The Health Science Stream at Pharo Foundation offers both general science subjects and four field-based specialisations — giving students real-world preparation for careers in healthcare and the life sciences.",
    subjectGroups: [
      { label: "General Subjects", subjects: ["Physics", "Chemistry", "Biology", "Information Technology", "Agriculture"] },
      { label: "Field-Based Subjects", subjects: ["Personal, Community Health & Patient Care", "Nutrition & Dietetics", "Child Care & Well-being", "Reproductive Health"] },
    ],
    accent: "bg-accent text-white",
    accentBg: "from-accent/20 to-gold/10 border-accent/25",
    glow: "hover:shadow-[0_0_32px_rgba(166,110,63,0.2)] hover:bg-accent/5 hover:border-accent/40",
  },
  {
    icon: Palette,
    iconBg: "bg-purple-500",
    name: "Arts & Humanities",
    band: "All levels · Integrated",
    description: "Visual arts, music, theatre, dance, history, literature, and philosophy — cultivating creative expression, empathy, and cultural perspective.",
    detail: "The arts and humanities are at the heart of a Pharo Foundation education. Students explore visual art, music, theatre, and dance alongside history, literature, and philosophy — developing the empathy and communication skills that define truly educated citizens.",
    subjectGroups: [
      { label: "Subjects", subjects: ["Performing & Visual Arts", "History", "Geography", "Social Studies", "Moral Education", "Citizenship Education"] },
    ],
    accent: "bg-purple-500 text-white",
    accentBg: "from-purple-500/20 to-pink-500/10 border-purple-500/25",
    glow: "hover:shadow-[0_0_32px_rgba(120,40,200,0.2)] hover:bg-purple-500/5 hover:border-purple-400/40",
  },
];

function ProgramModal({ program, onClose }: { program: Program; onClose: () => void }) {
  const Icon = program.icon;
  return (
    <AnimatePresence>
      <>
        <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }} className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        <motion.div key="modal" initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.25, ease: "easeOut" }} className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 pointer-events-none">
          <div className="relative w-full max-w-xl bg-background rounded-[28px] border border-border shadow-2xl overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col">
            <div className={`relative p-7 md:p-8 bg-gradient-to-br ${program.accentBg} border-b border-border flex-shrink-0`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${program.iconBg} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.16em] uppercase ${program.accent} shadow-sm mb-1.5`}>Program</span>
                    <h2 className="font-serif text-2xl font-bold text-foreground leading-tight">{program.name}</h2>
                    <p className="text-xs font-semibold tracking-wide text-muted mt-0.5">{program.band}</p>
                  </div>
                </div>
                <button onClick={onClose} className="w-9 h-9 rounded-full bg-foreground/8 border border-border flex items-center justify-center text-muted hover:text-foreground transition-colors flex-shrink-0" aria-label="Close">
                  <X className="w-4 h-4" strokeWidth={2} />
                </button>
              </div>
            </div>
            <div className="p-7 md:p-8 overflow-y-auto space-y-6">
              <div>
                <h3 className="font-semibold text-foreground text-base mb-2">Overview</h3>
                <p className="text-muted leading-relaxed text-sm md:text-base">{program.description}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-base mb-2">Programme Details</h3>
                <p className="text-muted leading-relaxed text-sm md:text-base">{program.detail}</p>
              </div>
              {program.subjectGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="font-semibold text-foreground text-base mb-3">{group.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.subjects.map((s) => (
                      <span key={s} className="px-3 py-1.5 rounded-full border border-border bg-foreground/[0.04] text-foreground text-xs font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-4">
                <span className="text-xs text-muted">{program.band}</span>
                <Button href="/#contact" size="sm" variant="secondary" onClick={onClose}>
                  Enquire Now <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </>
    </AnimatePresence>
  );
}

export default function AcademicsPage() {
  const [selected, setSelected] = useState<Program | null>(null);

  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground min-h-screen">
        {/* Hero banner */}
        <div className="relative pt-28 pb-16 md:pb-20 overflow-hidden bg-gradient-to-br from-scholarly-pale via-background to-gold-pale/40">
          <div className="absolute inset-0 -z-10 opacity-[0.07] bg-[radial-gradient(circle_at_20%_30%,rgba(30,58,95,0.8),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(184,137,60,0.6),transparent_60%)]" />
          <Container>
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
              <Link href="/#academics" className="inline-flex items-center gap-2 text-sm font-semibold text-scholarly hover:gap-3 transition-all mb-8 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
                Back to Home
              </Link>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-scholarly/15 bg-scholarly-pale/70 mb-6">
                <BookOpen className="w-4 h-4 text-scholarly" strokeWidth={1.8} />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-scholarly">Academic Programmes</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 max-w-3xl">
                Academics at<br /><span className="text-scholarly">Pharo Foundation</span>
              </h1>
              <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                Our academic programme spans the full journey of a child's development — from Early Years through to Grade 12 — with depth, breadth, and care at every stage.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Early Years", "Primary", "Middle School", "Secondary", "Health Science", "Arts & Humanities"].map((level) => (
                  <span key={level} className="px-4 py-2 rounded-full border border-border bg-background text-sm font-medium text-foreground shadow-sm">
                    {level}
                  </span>
                ))}
              </div>
            </motion.div>
          </Container>
        </div>

        {/* Core subjects strip */}
        <div className="border-y border-border bg-foreground/[0.02]">
          <Container>
            <div className="py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-scholarly flex-shrink-0">Core Subjects · All Levels</span>
              <div className="flex flex-wrap gap-2">
                {coreSubjects.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-full border border-scholarly/20 bg-scholarly-pale/50 text-scholarly text-xs font-semibold">{s}</span>
                ))}
              </div>
            </div>
          </Container>
        </div>

        {/* Programme cards */}
        <Container>
          <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {programs.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.article
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  whileHover={{ y: -6, scale: 1.018 }}
                  className={`group relative flex flex-col p-7 md:p-8 rounded-[24px] border border-border bg-background overflow-hidden shadow-sm transition-all duration-300 ${p.glow}`}
                >
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-br from-scholarly/10 via-transparent to-gold/10 blur-3xl opacity-70" />
                  <div className="relative flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl ${p.iconBg} flex items-center justify-center shadow-md`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={1.7} />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.16em] uppercase ${p.accent} shadow-sm whitespace-nowrap`}>Program</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1.5 leading-snug">{p.name}</h3>
                    <div className="text-xs md:text-sm font-semibold tracking-wide text-scholarly dark:text-scholarly-light mb-4">{p.band}</div>
                    <p className="text-muted leading-relaxed text-sm md:text-base mb-5">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.subjectGroups[0].subjects.slice(0, 4).map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-full border border-border bg-foreground/[0.03] text-foreground text-[11px] font-medium">{s}</span>
                      ))}
                      {p.subjectGroups.reduce((acc, g) => acc + g.subjects.length, 0) > 4 && (
                        <span className="px-2.5 py-1 rounded-full border border-border bg-foreground/[0.03] text-muted text-[11px] font-medium">
                          +{p.subjectGroups.reduce((acc, g) => acc + g.subjects.length, 0) - 4} more
                        </span>
                      )}
                    </div>
                    <div className="mt-auto">
                      <button onClick={() => setSelected(p)} className="inline-flex items-center gap-2 text-sm font-bold text-scholarly dark:text-scholarly-light group-hover:gap-3 transition-all hover:underline underline-offset-4">
                        View All Subjects <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </main>
      <Footer />
      {selected && <ProgramModal program={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
