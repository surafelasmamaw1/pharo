"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, X, BookOpen } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { programs, coreSubjects, type Program } from "@/lib/academicsData";

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
      {/* Hero banner */}
      <div className="relative pt-44 md:pt-48 pb-16 md:pb-20 overflow-hidden bg-gradient-to-br from-scholarly-pale via-background to-gold-pale/40">
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
              Our academic programme spans the full journey of a child&apos;s development — from Early Years through to Grade 12 — with depth, breadth, and care at every stage.
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

      {selected && <ProgramModal program={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
