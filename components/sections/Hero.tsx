"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 md:pt-28 overflow-hidden">
      {/* Background Image Layer — replaceable school campus photo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-scholarly-pale via-background to-gold-pale dark:from-scholarly-pale dark:via-background dark:to-scholarly-pale" />
        {/* Image placeholder — swap this <div> for a real <Image src="/campus.jpg" fill /> later */}
        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(30,58,95,0.6) 0, transparent 50%), radial-gradient(circle at 80% 70%, rgba(184,137,60,0.5) 0, transparent 50%)",
          }}
        />
      </div>

      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center py-12 md:py-20 lg:py-28">
          {/* Text Block (spans 7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-scholarly/15 bg-scholarly-pale/70 backdrop-blur-sm mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-scholarly" />
              <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-scholarly">
                Welcome to Pharo Foundation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="font-serif text-hero-mobile sm:text-hero-tablet lg:text-hero-desktop font-bold leading-tighter tracking-tighter mb-7 text-balance max-w-3xl"
            >
              Inspiring <span className="text-scholarly">Excellence.</span>{" "}
              <span className="block sm:inline">Building <span className="text-gold">Futures.</span></span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="text-body md:text-[19px] text-muted mb-10 leading-relaxed max-w-2xl text-left"
            >
              Pharo Foundation is committed to creating an inspiring learning
              environment where students develop knowledge, confidence,
              creativity, character, and the skills they need for the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-12"
            >
              <Button href="#admissions" variant="secondary" size="lg">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" href="#about">
                Explore Our School
              </Button>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-border/60 text-left"
            >
              {[
                { k: "Excellence", v: "In Scholarship" },
                { k: "Character", v: "In Community" },
                { k: "Opportunity", v: "For Every Student" },
              ].map((t) => (
                <div key={t.k} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl border border-scholarly/10 bg-scholarly-pale/60 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-scholarly" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold tracking-tight text-foreground leading-tight">{t.k}</div>
                    <div className="text-xs text-muted leading-tight">{t.v}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Block (spans 5 cols on desktop) — clearly replaceable image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Main image placeholder card */}
              <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-[28px] overflow-hidden border border-border shadow-xl bg-gradient-to-br from-scholarly via-scholarly-light to-scholarly group">
                {/* To replace with actual school image:
                  <Image src="/school-campus.jpg" alt="Pharo Foundation campus" fill className="object-cover" priority />
                */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(212,167,94,0.22),transparent_55%)]" />
                <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9 text-white">
                  <div className="mb-4 inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                      [School Campus Photo]
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight mb-2">
                    A Campus Designed for Learning
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    Replace this placeholder with an official photograph of the
                    Pharo Foundation campus, main building, or student life.
                  </p>
                </div>

                {/* Floating badge — top right */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute top-6 right-6 px-4 py-2.5 rounded-2xl bg-white/95 text-foreground shadow-lg border border-white/60 backdrop-blur"
                >
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-scholarly mb-0.5">
                    Est.
                  </div>
                  <div className="font-serif text-xl font-bold leading-none">[Year]</div>
                </motion.div>

                {/* Floating info — bottom-left overlay */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="hidden sm:flex absolute left-6 bottom-[52%] items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 text-foreground shadow-lg border border-white/60 backdrop-blur max-w-[230px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-pale flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-gold" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-gold">
                      [Programs]
                    </div>
                    <div className="text-sm font-bold truncate">Early Years → Secondary</div>
                  </div>
                </motion.div>
              </div>

              {/* Accent corner shapes — subtle, not futuristic */}
              <div className="absolute -z-10 -bottom-5 -left-5 w-28 h-28 rounded-3xl bg-gold-pale dark:bg-gold-pale/60 -rotate-6" />
              <div className="absolute -z-10 -top-5 -right-5 w-28 h-28 rounded-3xl bg-scholarly-pale dark:bg-scholarly-pale/60 rotate-6" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
