"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { Target, Eye, BookOpen, Users, Award, X, Search, Handshake, Lightbulb, ShieldCheck } from "lucide-react";

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
                <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-[28px] overflow-hidden border border-border shadow-lg group">
                  {/* Real photo */}
                  <Image
                    src="/about-photo.png"
                    alt="Pharo Foundation"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay for caption legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 text-white">
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
              <SectionHeading className="text-left">About Pharo School Assosa</SectionHeading>

              <div className="mt-6 md:mt-8 space-y-5 md:space-y-6 max-w-2xl">
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Pharo School Assosa, established in 2020, is located on the western
                  edge of Ethiopia — in the capital of BGRS state. Offering primary and
                  secondary education, the school strives to provide access to high-quality
                  education for the local community and to become a centre of excellence
                  across the region.
                </p>
                <p className="text-base md:text-lg text-muted leading-relaxed">
                  We are committed to a holistic approach to learning — fostering the
                  intellectual, social, emotional, and ethical development of every learner.
                  Our curriculum combines the Ethiopian national curriculum with international
                  standards such as the British curriculum.
                </p>
              </div>

            </motion.div>
          </div>

          {/* Mission & Vision cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -4, scale: 1.015 }}
                  className="relative p-6 rounded-[22px] border border-border bg-gradient-to-br from-scholarly-pale/70 via-background to-background overflow-hidden shadow-sm hover:shadow-[0_0_28px_rgba(30,58,95,0.14)] dark:hover:border-scholarly/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-scholarly flex items-center justify-center mb-5 shadow-md">
                    <Target className="w-6 h-6 text-white" strokeWidth={1.8} />
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-scholarly mb-3">Our Mission</div>
                  <h4 className="font-serif text-lg font-bold text-foreground leading-snug mb-3">
                    Empowering students to grow in knowledge, character, and purpose.
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Our mission is to provide a locally relevant and globally competitive,
                    high-quality learning experience — empowering students to become lifelong
                    learners and productive global citizens.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.18 }}
                  whileHover={{ y: -4, scale: 1.015 }}
                  className="relative p-6 rounded-[22px] border border-border bg-gradient-to-br from-gold-pale/70 via-background to-background overflow-hidden shadow-sm hover:shadow-[0_0_28px_rgba(184,137,60,0.14)] dark:hover:border-gold/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gold flex items-center justify-center mb-5 shadow-md">
                    <Eye className="w-6 h-6 text-white" strokeWidth={1.8} />
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold mb-3">Our Vision</div>
                  <h4 className="font-serif text-lg font-bold text-foreground leading-snug mb-3">
                    To be a community where every learner thrives.
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Our vision is to be recognised as a leading educational community — known
                    for the strength of its scholarship, the warmth of its culture, and the
                    positive impact of its graduates on the communities they serve.
                  </p>
                </motion.div>
          </div>

          {/* What Pharo Schools Stand For */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-16 md:mt-20 pt-14 border-t border-border/60"
          >
            <div className="max-w-3xl mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                What Pharo Schools Stand For
              </h2>
              <p className="text-muted leading-relaxed text-base md:text-lg mb-4">
                In a continent where 40% of the population is aged 15 years and younger, schools are by definition the point of maximum development impact. The challenge is to create schools that do more than boost enrolment rate statistics and find creative ways of engaging the child, leveraging the school and home environments, in order to improve the quality of learning. With this approach, we create tomorrow's local and global leaders, from kindergarten all the way to secondary school education.
              </p>
              <p className="text-muted leading-relaxed text-base md:text-lg">
                All Pharo Schools have a common identity, which is rooted in our commitment to excellent education and our values which guide all our students and teachers. Therefore Pharo Schools have developed a comprehensive quality management framework focusing on quality teaching, learning and school management.
              </p>
            </div>

            {/* Our Values */}
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Our Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {[
                {
                  icon: Search,
                  title: "Curiosity",
                  desc: "We ignite our students' intrinsic motivation to independently explore new ideas, knowledge, skills, technologies, places, cultures, people, and the environment.",
                  color: "bg-scholarly",
                  glow: "hover:shadow-[0_0_28px_rgba(30,58,95,0.15)] hover:border-scholarly/30",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  desc: "Our students strive to achieve their ambitious personal life and career goals. Our students place a special focus on STEM and achieve academic excellence through rigorous learning and a culture of hard work.",
                  color: "bg-gold",
                  glow: "hover:shadow-[0_0_28px_rgba(184,137,60,0.15)] hover:border-gold/30",
                },
                {
                  icon: Handshake,
                  title: "Respect",
                  desc: "We encourage our students to value diversity and practise politeness and respect with one another, while appreciating and taking diligent care of the environment.",
                  color: "bg-scholarly-light",
                  glow: "hover:shadow-[0_0_28px_rgba(45,79,122,0.15)] hover:border-scholarly-light/30",
                },
                {
                  icon: Lightbulb,
                  title: "Creativity",
                  desc: "We foster critical thinking, and our students are willing and able to challenge the status quo and embody an entrepreneurial spirit that feeds innovation and problem solving.",
                  color: "bg-accent",
                  glow: "hover:shadow-[0_0_28px_rgba(166,110,63,0.15)] hover:border-accent/30",
                },
                {
                  icon: ShieldCheck,
                  title: "Responsibility",
                  desc: "We always lead by example and expect our students to take responsibility for their own learning, achievements and shortcomings and demonstrate responsible citizenship.",
                  color: "bg-success",
                  glow: "hover:shadow-[0_0_28px_rgba(46,125,87,0.15)] hover:border-success/30",
                },
              ].map((value, idx) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.07 }}
                    whileHover={{ y: -4 }}
                    className={`flex flex-col gap-5 p-7 rounded-[22px] border border-border bg-background shadow-sm transition-all duration-200 ${value.glow}`}
                  >
                    <div className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold text-foreground mb-2">{value.title}</h4>
                      <p className="text-muted text-sm md:text-base leading-relaxed">{value.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
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
                        Pharo School Assosa
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
                        About Pharo School Assosa
                      </h2>
                      <p className="text-white/75 text-sm mt-2">Unlocking Africa&apos;s potential through education</p>
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
                      Pharo School Assosa, established in 2020, is located on the western edge
                      of Ethiopia — in the capital of BGRS state. Offering primary and secondary
                      education, the school strives to provide access to high-quality education
                      for the local community and to become a centre of excellence across the region.
                      We are committed to a holistic approach that fosters the intellectual, social,
                      emotional, and ethical development of every learner.
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
                      To provide a locally relevant and globally competitive, high-quality learning
                      experience — empowering students to become lifelong learners and productive
                      global citizens. We focus on students&apos; holistic development to discover their
                      own talent and instil them with the passion to realise their future goals.
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
