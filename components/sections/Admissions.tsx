"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Compass as ExploreIcon,
  ClipboardList as ApplyIcon,
  UsersRound as ConnectIcon,
  GraduationCap as JoinIcon,
  BadgePercent,
  ArrowRight,
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  { num: "01", icon: ExploreIcon, title: "Explore", description: "Discover the community, curriculum, and the promise of a Pharo Foundation education.", accent: "bg-scholarly text-white", iconBg: "bg-scholarly", glow: "hover:shadow-[0_0_36px_rgba(30,58,95,0.2)]", borderGlow: "dark:hover:border-scholarly/50" },
  { num: "02", icon: ApplyIcon, title: "Apply", description: "Submit your child's report card. A 70% average and an 'A' conduct grade are required.", accent: "bg-gold text-white", iconBg: "bg-gold", glow: "hover:shadow-[0_0_36px_rgba(184,137,60,0.2)]", borderGlow: "dark:hover:border-gold/50" },
  { num: "03", icon: ConnectIcon, title: "Connect", description: "Our team guides families through campus visits, conversations, and next steps.", accent: "bg-scholarly-light text-white", iconBg: "bg-scholarly-light", glow: "hover:shadow-[0_0_36px_rgba(45,79,122,0.2)]", borderGlow: "dark:hover:border-scholarly-light/50" },
  { num: "04", icon: JoinIcon, title: "Join", description: "Enrol, attend orientation, and step into a place where your child can thrive.", accent: "bg-success text-white", iconBg: "bg-success", glow: "hover:shadow-[0_0_36px_rgba(46,125,87,0.2)]", borderGlow: "dark:hover:border-success/50" },
];

export default function Admissions() {
  const [feeText, setFeeText] = useState("ETB 9,700");

  useEffect(() => {
    async function loadSettings() {
      try {
        const res = await fetch("/api/settings");
        const json = await res.json();
        if (json.success && json.data?.tuitionFeeText) {
          setFeeText(json.data.tuitionFeeText);
        }
      } catch (e) {
        // use fallback
      }
    }
    loadSettings();
  }, []);

  return (
    <section id="admissions" className="py-section-sm md:py-section-md relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-scholarly-pale/60 via-transparent to-gold-pale/40 dark:from-scholarly-pale dark:via-transparent dark:to-gold-pale/40" />

      <Container>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}>

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-scholarly/15 bg-scholarly-pale/60 mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-scholarly" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-scholarly">Admissions</span>
              </div>
              <SectionHeading className="text-left">Start Your Journey With Us</SectionHeading>
              <p className="mt-4 text-muted leading-relaxed text-base md:text-lg">
                Our programmes are 70% subsidised — families pay an average of only <strong className="text-foreground">{feeText}</strong> for the full programme.
              </p>
            </div>
            <Link
              href="/admissions"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-scholarly text-white font-bold text-sm hover:bg-scholarly-light transition-all duration-200 shadow-sm hover:shadow-[0_0_24px_rgba(30,58,95,0.3)] group"
            >
              View Full Admissions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </Link>
          </div>

          {/* 4-step teaser */}
          <div className="relative">
            <div className="hidden md:block absolute top-[72px] left-[8%] right-[8%] h-px bg-gradient-to-r from-scholarly/30 via-gold/30 to-success/30" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
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

          {/* Subsidy mini-banner */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 p-6 md:p-8 rounded-[24px] bg-gradient-to-br from-scholarly via-scholarly-light to-scholarly text-white relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.4),transparent_55%)]" />
            <div className="relative flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0">
                <BadgePercent className="w-7 h-7 text-white" strokeWidth={1.6} />
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold mb-1">Pharo Foundation Subsidy</div>
                <p className="text-white font-semibold text-base md:text-lg">
                  70% subsidised — families pay only <span className="text-gold font-bold">ETB 9,700</span> on average
                </p>
              </div>
            </div>
            <Link
              href="/admissions"
              className="relative flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-scholarly font-bold text-sm hover:bg-gold hover:text-white transition-all duration-200 shadow-md"
            >
              Full Details <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}
