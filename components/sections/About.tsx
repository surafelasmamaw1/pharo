"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { Target, Eye, ArrowRight, Landmark, X, BookOpen, Users, Award } from "lucide-react";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="about" className="py-section-sm md:py-section-md relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Intro block: image + institutional intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Image / visual card (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-[28px] overflow-hidden border border-border shadow-lg bg-gradient-to-br from-scholarly-pale via-gold-pale to-scholarly-pale group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(30,58,95,0.18),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(184,137,60,0.2),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-scholarly/10 flex items-center justify-center border border-white/40 backdrop-blur-sm shadow-inner">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/50 dark:bg-white/5 flex items-center justify-center border border-white/50">
                          <Landmark className="w-12 h-12 md:w-16 md:h-16 text-scholarly" strokeWidth={1.4} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 bg-gradient-to-t from-scholarly/90 via-scholarly/50 to-transparent text-white">
                    <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-gold mb-1.5">
                      Pharo Foundation
                    </div>
                    <div className="font-serif text-lg md:text-xl font-semibold leading-snug">
                      A Tradition of Excellence in Education
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 rounded-3xl bg-gold-pale dark:bg-gold-pale/60 -rotate-6" />
                <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 rounded-3xl bg-scholarly-pale dark:bg-scholarly-pale/60 rotate-6" />
              </div>
            </motion.div>

            {/* Intro text (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 text-left"
            >
              <SectionHeading className="text-left">About Pharo Foundation</SectionHeading>

              <div className="mt-6 md:mt-8 space-y-5 md:space-y-6 max-w-2xl">
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Pharo Foundation is an educational community dedicated to nurturing
                  the intellectual, personal, and moral growth of every student
                  in our care. Families trust us with the most important work there
                  is: preparing young people for lives of purpose, achievement, and contribution.
                </p>
                <p className="text-base md:text-lg text-muted leading-relaxed">
                  We believe that a truly excellent education is about the whole child —
                  rigorous academics paired with character formation, creative expression,
                  meaningful relationships, and active citizenship.
                </p>
              </div>

              {/* Learn More button — opens modal */}
              <div className="mt-8 md:mt-10">
                <button
                  onClick={() => setIsOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-scholarly text-white font-bold text-base hover:bg-scholarly-light transition-all duration-200 shadow-sm hover:shadow-[0_0_24px_rgba(30,58,95,0.3)] group"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision cards */}
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              whileHover={{ y: -5, scale: 1.015 }}
              className="relative p-8 md:p-10 rounded-[28px] border border-border bg-gradient-to-br from-scholarly-pale/70 via-background to-background overflow-hidden shadow-sm hover:shadow-[0_0_32px_rgba(30,58,95,0.14)] dark:hover:border-scholarly/40 transition-all duration-300"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-scholarly/8 blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-scholarly flex items-center justify-center mb-7 shadow-md">
                  <Target className="w-7 h-7 text-white" strokeWidth={1.8} />
                </div>
                <div className="inline-block px-3 py-1 rounded-full border border-scholarly/15 bg-scholarly/5 text-scholarly text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
                  Our Mission
                </div>
                <h3 className="font-serif text-2xl md:text-[28px] font-bold text-foreground leading-tight mb-5">
                  Empowering students to grow in knowledge, character, and purpose.
                </h3>
                <p className="text-muted leading-relaxed text-base md:text-[17px]">
                  The mission of Pharo Foundation is to provide a rigorous, supportive,
                  and inclusive learning environment in which each student is known,
                  valued, and inspired to achieve academic excellence, develop strong
                  character, and contribute meaningfully to the world.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              whileHover={{ y: -5, scale: 1.015 }}
              className="relative p-8 md:p-10 rounded-[28px] border border-border bg-gradient-to-br from-gold-pale/70 via-background to-background overflow-hidden shadow-sm hover:shadow-[0_0_32px_rgba(184,137,60,0.14)] dark:hover:border-gold/40 transition-all duration-300"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold/10 blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gold flex items-center justify-center mb-7 shadow-md">
                  <Eye className="w-7 h-7 text-white" strokeWidth={1.8} />
                </div>
                <div className="inline-block px-3 py-1 rounded-full border border-gold/20 bg-gold/5 text-gold text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
                  Our Vision
                </div>
                <h3 className="font-serif text-2xl md:text-[28px] font-bold text-foreground leading-tight mb-5">
                  To be a community where every learner thrives.
                </h3>
                <p className="text-muted leading-relaxed text-base md:text-[17px]">
                  Our vision is to be recognised as a leading educational community —
                  one known for the strength of its scholarship, the warmth of its
                  culture, the depth of its character, and the positive impact of its
                  graduates on the communities they go on to serve.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal panel */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 pointer-events-none"
            >
              <div className="relative w-full max-w-2xl bg-background rounded-[28px] border border-border shadow-2xl overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col">

                {/* Header */}
                <div className="relative bg-gradient-to-br from-scholarly via-scholarly-light to-scholarly p-8 md:p-10 flex-shrink-0">
                  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.4),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(212,167,94,0.4),transparent_55%)]" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                        <Landmark className="w-3 h-3" strokeWidth={2} />
                        Pharo Foundation
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
                        About Pharo Foundation
                      </h2>
                      <p className="text-white/75 text-sm mt-2">Unlocking Africa's potential through education</p>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white hover:bg-white/35 transition-colors flex-shrink-0"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4" strokeWidth={2} />
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div className="p-7 md:p-8 overflow-y-auto space-y-7">

                  {/* Who we are */}
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">Who We Are</h3>
                    <p className="text-muted leading-relaxed text-base">
                      Pharo Foundation is an educational community dedicated to nurturing
                      the intellectual, personal, and moral growth of every student in our care.
                      We believe that a truly excellent education is about the whole child —
                      rigorous academics paired with character formation, creative expression,
                      meaningful relationships, and active citizenship.
                    </p>
                  </div>

                  {/* Three pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: BookOpen, label: "Academics", desc: "Rigorous programmes from Early Years through Secondary.", color: "bg-scholarly" },
                      { icon: Users, label: "Community", desc: "A warm, inclusive culture where every student belongs.", color: "bg-gold" },
                      { icon: Award, label: "Excellence", desc: "High standards in scholarship, sport, and the arts.", color: "bg-success" },
                    ].map(({ icon: Icon, label, desc, color }) => (
                      <div key={label} className="flex flex-col gap-3 p-4 rounded-2xl border border-border bg-foreground/[0.02]">
                        <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shadow-sm`}>
                          <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground text-sm mb-1">{label}</div>
                          <div className="text-muted text-xs leading-relaxed">{desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mission */}
                  <div className="p-5 rounded-2xl border border-scholarly/15 bg-scholarly-pale/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-scholarly" strokeWidth={2} />
                      <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-scholarly">Our Mission</span>
                    </div>
                    <p className="text-foreground leading-relaxed text-sm md:text-base">
                      To provide a rigorous, supportive, and inclusive learning environment
                      in which each student is known, valued, and inspired to achieve academic
                      excellence, develop strong character, and contribute meaningfully to the world.
                    </p>
                  </div>

                  {/* Vision */}
                  <div className="p-5 rounded-2xl border border-gold/20 bg-gold-pale/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="w-4 h-4 text-gold" strokeWidth={2} />
                      <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-gold">Our Vision</span>
                    </div>
                    <p className="text-foreground leading-relaxed text-sm md:text-base">
                      To be recognised as a leading educational community — known for the strength
                      of its scholarship, the warmth of its culture, the depth of its character,
                      and the positive impact of its graduates on the communities they serve.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-border/60 flex justify-end">
                    <button
                      onClick={() => setIsOpen(false)}
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
