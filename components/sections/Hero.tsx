"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import { GraduationCap, BookOpen, Award, CheckCircle2, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-border/70 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Editorial Text Block */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded border border-scholarly/20 bg-scholarly-pale/60 mb-6">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-scholarly">
                Assosa • Benishangul-Gumuz • Ethiopia
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-scholarly leading-[1.14] tracking-tight mb-6 text-balance">
              Excellence in Education.{" "}
              <span className="text-foreground">Rooted in Assosa,</span>{" "}
              <span className="text-gold">Inspiring Ethiopia.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mb-8 font-normal">
              Pharo School Assosa is a premier boarding and day secondary institution dedicated to academic rigour, character development, and scientific inquiry. We deliver the Ethiopian National Curriculum enriched with intensive STEM, English proficiency, and 70% philanthropic tuition subsidies.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 mb-10">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-scholarly text-white font-bold text-sm tracking-wide hover:bg-scholarly-light transition-all shadow-sm"
              >
                Apply for Admission 2026/27
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-border bg-white text-slate-800 font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                School Overview &amp; Curriculum
              </Link>
            </div>

            {/* Academic Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Grades 7–12 Education</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Boarding &amp; Day Scholars</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>70% Philanthropic Subsidy</span>
              </div>
            </div>
          </div>

          {/* School Campus Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white p-2">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                <Image
                  src="/pharo-school.png"
                  alt="Pharo School Assosa Main Campus"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
                  <div className="inline-block px-2.5 py-1 rounded bg-gold text-slate-950 text-[10px] font-bold uppercase tracking-wider mb-2">
                    Our Assosa Campus
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-1">
                    Modern Laboratories &amp; Classrooms
                  </h3>
                  <p className="text-white/85 text-xs leading-relaxed">
                    Purpose-built learning environment featuring science laboratories, computer suites, and full residential facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Fact Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200">
          <div className="p-4 rounded-xl bg-white border border-slate-200 text-left">
            <div className="text-2xl lg:text-3xl font-serif font-bold text-scholarly">100%</div>
            <div className="text-xs font-semibold text-slate-800 mt-1">National Exam Pass Rate</div>
            <div className="text-[11px] text-slate-500">Ministry of Education Benchmark</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 text-left">
            <div className="text-2xl lg:text-3xl font-serif font-bold text-scholarly">450+</div>
            <div className="text-xs font-semibold text-slate-800 mt-1">Active Scholars</div>
            <div className="text-[11px] text-slate-500">Across Grades 7 to 12</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 text-left">
            <div className="text-2xl lg:text-3xl font-serif font-bold text-scholarly">1:18</div>
            <div className="text-xs font-semibold text-slate-800 mt-1">Teacher-Student Ratio</div>
            <div className="text-[11px] text-slate-500">Individualised Academic Focus</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 text-left">
            <div className="text-2xl lg:text-3xl font-serif font-bold text-gold">70%</div>
            <div className="text-xs font-semibold text-slate-800 mt-1">Tuition Subsidised</div>
            <div className="text-[11px] text-slate-500">Philanthropic Foundation Grant</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
