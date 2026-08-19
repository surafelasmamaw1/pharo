"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Compass as ExploreIcon,
  ClipboardList as ApplyIcon,
  UsersRound as ConnectIcon,
  GraduationCap as JoinIcon,
  BadgePercent,
  FileText,
  TrendingUp,
  Star,
  ArrowLeft,
  ClipboardList,
} from "lucide-react";
import Container from "@/components/ui/Container";

const steps = [
  {
    num: "01",
    icon: ExploreIcon,
    title: "Explore",
    description: "Learn about the school and academic programmes. Discover the community, the curriculum, and the promise of a Pharo Foundation education.",
    accent: "bg-scholarly text-white",
    iconBg: "bg-scholarly",
    glow: "hover:shadow-[0_0_36px_rgba(30,58,95,0.2)]",
    borderGlow: "dark:hover:border-scholarly/50",
  },
  {
    num: "02",
    icon: ApplyIcon,
    title: "Apply",
    description: "Submit your child's report card to apply for a vacant place. Students (except those from Kindergarten) must have at least a 70% average and an 'A' conduct grade.",
    accent: "bg-gold text-white",
    iconBg: "bg-gold",
    glow: "hover:shadow-[0_0_36px_rgba(184,137,60,0.2)]",
    borderGlow: "dark:hover:border-gold/50",
  },
  {
    num: "03",
    icon: ConnectIcon,
    title: "Connect",
    description: "The admissions team guides families through the next steps — campus visits, conversations, and any additional reviews or assessments.",
    accent: "bg-scholarly-light text-white",
    iconBg: "bg-scholarly-light",
    glow: "hover:shadow-[0_0_36px_rgba(45,79,122,0.2)]",
    borderGlow: "dark:hover:border-scholarly-light/50",
  },
  {
    num: "04",
    icon: JoinIcon,
    title: "Join",
    description: "Begin your journey as part of the Pharo Foundation community. Enrol, attend orientation, and step into a place where your child can thrive.",
    accent: "bg-success text-white",
    iconBg: "bg-success",
    glow: "hover:shadow-[0_0_36px_rgba(46,125,87,0.2)]",
    borderGlow: "dark:hover:border-success/50",
  },
];

const requirements = [
  {
    icon: FileText,
    title: "Report Card",
    desc: "Submit a copy of your child's most recent school report card when applying for a vacant place.",
    color: "bg-scholarly",
  },
  {
    icon: TrendingUp,
    title: "70% Average",
    desc: "Students (except those joining from Kindergarten) must have achieved at least a 70% average in their previous grade.",
    color: "bg-scholarly-light",
  },
  {
    icon: Star,
    title: "'A' Conduct Grade",
    desc: "The student's conduct must be assessed as an 'A' in their previous school year.",
    color: "bg-gold",
  },
  {
    icon: BadgePercent,
    title: "70% Subsidised",
    desc: "Our programmes are 70% subsidised by Pharo Foundation. Families pay only 30% — an average of ETB 9,700 for the full programme.",
    color: "bg-success",
  },
];

const supportingDocs = [
  "Birth certificate of the child",
  "Copy of ID from parents / guardian",
  "Four passport-sized photos of the student and one photo of guardians",
  "Academic report card from the previous school",
  "Fully completed enrolment form",
  "Signed agreement to comply with the school's policies and procedures",
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero banner */}
      <div className="relative pt-28 pb-16 md:pb-20 overflow-hidden bg-gradient-to-br from-scholarly-pale via-background to-gold-pale/40">
        <div className="absolute inset-0 -z-10 opacity-[0.07] bg-[radial-gradient(circle_at_20%_30%,rgba(30,58,95,0.8),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(184,137,60,0.6),transparent_60%)]" />
        <Container>
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <Link href="/#admissions" className="inline-flex items-center gap-2 text-sm font-semibold text-scholarly hover:gap-3 transition-all mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
              Back to Home
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-scholarly/15 bg-scholarly-pale/70 mb-6">
              <ClipboardList className="w-4 h-4 text-scholarly" strokeWidth={1.8} />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-scholarly">Admissions</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 max-w-3xl">
              Start Your Journey<br /><span className="text-scholarly">With Pharo Foundation</span>
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl">
              Our admissions process is thoughtful, personal, and designed to help families and the school find the right fit together.
            </p>
          </motion.div>
        </Container>
      </div>

      <Container>
        <div className="py-16 md:py-20 space-y-20">

          {/* 4-step process */}
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">How to Apply</h2>
            <p className="text-muted text-base md:text-lg mb-10">Follow these four steps to join the Pharo Foundation community.</p>
            <div className="relative">
              <div className="hidden md:block absolute top-[72px] left-[8%] right-[8%] h-px bg-gradient-to-r from-scholarly/30 via-gold/30 to-success/30" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <motion.article
                      key={s.num}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: idx * 0.08 }}
                      whileHover={{ y: -7, scale: 1.018 }}
                      className={`relative group p-7 md:p-8 rounded-[26px] border border-border bg-background overflow-hidden shadow-sm transition-all duration-300 ${s.glow} dark:hover:bg-white/5 ${s.borderGlow}`}
                    >
                      <div className={`absolute top-5 right-5 w-11 h-11 rounded-2xl ${s.accent} flex items-center justify-center shadow-sm font-bold text-sm`}>{s.num}</div>
                      <div className={`relative mb-6 w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl ${s.iconBg} flex items-center justify-center shadow-md`}>
                        <Icon className="w-8 h-8 md:w-9 md:h-9 text-white" strokeWidth={1.8} />
                      </div>
                      <h3 className="text-xl md:text-[22px] font-semibold text-foreground mb-3 leading-snug">{s.title}</h3>
                      <p className="text-muted leading-relaxed text-sm md:text-base">{s.description}</p>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Requirements & Fees */}
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Requirements & Fees</h2>
            <p className="text-muted text-base md:text-lg mb-10">What you need to know before applying.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {requirements.map((r, idx) => {
                const Icon = r.icon;
                return (
                  <motion.div key={r.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.07 }} className="flex flex-col gap-4 p-6 rounded-[20px] border border-border bg-background shadow-sm hover:shadow-[0_0_24px_rgba(30,58,95,0.1)] transition-all duration-200">
                    <div className={`w-12 h-12 rounded-xl ${r.color} flex items-center justify-center shadow-sm`}>
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-base mb-1.5">{r.title}</h4>
                      <p className="text-muted text-sm leading-relaxed">{r.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Subsidy banner */}
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-8 p-6 md:p-10 rounded-[24px] bg-gradient-to-br from-scholarly via-scholarly-light to-scholarly border border-scholarly/20 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.4),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(212,167,94,0.4),transparent_55%)]" />
              <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-2xl bg-white/15 border border-white/20">
                  <BadgePercent className="w-10 h-10 text-white" strokeWidth={1.6} />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold mb-2">Pharo Foundation Subsidy</div>
                  <h4 className="font-serif text-2xl md:text-3xl font-bold leading-tight mb-2">70% Subsidised by Pharo Foundation</h4>
                  <p className="text-white/85 text-base md:text-lg leading-relaxed">
                    Families pay only <strong className="text-white">30% of tuition costs</strong> — an average of <strong className="text-gold">ETB 9,700</strong> for the full programme. The remaining 70% is covered by Pharo Foundation.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Supporting Documents + photo */}
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Supporting Documents</h2>
            <p className="text-muted text-base md:text-lg mb-10">Please have the following documents ready when applying.</p>
            <div className="rounded-[28px] overflow-hidden border border-border shadow-lg grid grid-cols-1 md:grid-cols-2">
              <div className="bg-scholarly p-8 md:p-10 flex flex-col justify-between gap-8">
                <ul className="space-y-3.5">
                  {supportingDocs.map((doc) => (
                    <li key={doc} className="flex items-start gap-2.5 text-white/85 text-sm md:text-base leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
                <div>
                  <a href="/student-registration-form.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-scholarly font-bold text-sm hover:bg-gold hover:text-white transition-all duration-200 shadow-md uppercase tracking-[0.14em]">
                    Enrolment Form
                  </a>
                </div>
              </div>
              <div className="relative min-h-[280px] md:min-h-0">
                <Image src="/classrooms.png" alt="Students in classroom" fill className="object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Fee structure & term dates */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="pb-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Fee Structure & Term Dates</h2>
            <div className="space-y-2 text-base md:text-lg text-muted">
              <p>The full fee structure can be found <a href="/assosa-fee-structure.pdf" target="_blank" rel="noopener noreferrer" className="text-scholarly font-semibold underline underline-offset-4 hover:text-gold transition-colors">here</a></p>
              <p>Term dates can be found <a href="/pharo-assosa-dates.pdf" target="_blank" rel="noopener noreferrer" className="text-scholarly font-semibold underline underline-offset-4 hover:text-gold transition-colors">here</a></p>
            </div>
          </motion.div>

        </div>
      </Container>
    </>
  );
}
