"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 md:pt-28 overflow-hidden">
      {/* Background Image Layer — replaceable school campus photo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-scholarly-pale via-background to-gold-pale dark:from-scholarly-pale dark:via-background dark:to-scholarly-pale" />
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
          <m.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 text-left"
          >
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-scholarly/15 bg-scholarly-pale/70 backdrop-blur-sm mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-scholarly" />
              <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-scholarly">
                Welcome to Pharo Foundation
              </span>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="font-serif text-hero-mobile sm:text-hero-tablet lg:text-hero-desktop font-bold leading-tighter tracking-tighter mb-7 text-balance max-w-3xl"
            >
              Inspiring <span className="text-scholarly">Excellence.</span>{" "}
              <span className="block sm:inline">Building <span className="text-gold">Futures.</span></span>
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="text-body md:text-[19px] text-muted mb-10 leading-relaxed max-w-2xl text-left"
            >
              Pharo Foundation is committed to creating an inspiring learning
              environment where students develop knowledge, confidence,
              creativity, character, and the skills they need for the future.
            </m.p>

            <m.div
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
            </m.div>

            {/* Trust strip */}
            <m.div
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
            </m.div>
          </m.div>

          {/* Visual Block (spans 5 cols on desktop) — clearly replaceable image placeholder */}
          <m.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Main image placeholder card */}
              <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-[28px] overflow-hidden border border-border shadow-xl group">
                {/* Real school photo */}
                <Image
                  src="/pharo-school.png"
                  alt="Pharo Foundation campus"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  priority
                />
                {/* Overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/45" />

                <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9 text-white">
                  <div className="mb-4 inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-scholarly border-0 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-white">
                      OUR CAMPUS
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight mb-2 drop-shadow-lg">
                    A Campus Designed for Learning
                  </h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed drop-shadow">
                    Featuring state-of-the-art science labs, expansive athletic fields,
                    and collaborative spaces built to inspire academic excellence.
                  </p>
                </div>

                {/* EST. Badge — top right */}
                <m.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute top-5 right-5 px-4 py-2.5 rounded-2xl bg-white shadow-xl border-0 z-10"
                >
                  <div className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-scholarly mb-0.5">
                    Est.
                  </div>
                  <div className="font-serif text-xl font-bold leading-none text-gray-900">2011</div>
                </m.div>

                {/* Programs pill — top left */}
                <m.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="hidden sm:flex absolute left-5 top-5 items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-xl border-0 z-10 max-w-[220px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-scholarly flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-white" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-extrabold tracking-[0.18em] uppercase text-scholarly">
                      Programs
                    </div>
                    <div className="text-sm font-bold truncate text-gray-900">Early Years → High School</div>
                  </div>
                </m.div>
              </div>

              {/* Accent corner shapes — subtle, not futuristic */}
              <div className="absolute -z-10 -bottom-5 -left-5 w-28 h-28 rounded-3xl bg-gold-pale dark:bg-gold-pale/60 -rotate-6" />
              <div className="absolute -z-10 -top-5 -right-5 w-28 h-28 rounded-3xl bg-scholarly-pale dark:bg-scholarly-pale/60 rotate-6" />
            </div>
          </m.div>
        </div>
      </Container>
    </section>
  );
}
