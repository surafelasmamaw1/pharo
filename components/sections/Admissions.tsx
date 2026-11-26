"use client";

import { useState, useEffect } from "react";
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
    <section id="admissions" className="py-16 md:py-24 bg-slate-50/70 border-t border-border/60 relative overflow-hidden">
      <Container>
        <div>

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-scholarly mb-3">
                Admissions
              </p>
              <SectionHeading className="text-left">Start Your Journey With Us</SectionHeading>
              <p className="mt-4 text-muted leading-relaxed text-base md:text-lg">
                Our programmes are 70% subsidised, so families pay an average of <strong className="text-foreground">{feeText}</strong> for the full year.
              </p>
            </div>
            <Link
              href="/admissions"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-scholarly text-white font-bold text-sm hover:bg-scholarly-light transition-colors shadow-sm group"
            >
              View Full Admissions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </Link>
          </div>

          {/* 4-step teaser */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.num}
                  className="p-6 rounded-xl border border-border bg-white shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-lg ${s.iconBg} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                      </div>
                      <span className="font-serif text-lg font-bold text-muted">{s.num}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted leading-relaxed text-sm">{s.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Subsidy mini-banner */}
          <div className="mt-8 p-6 md:p-8 rounded-xl bg-scholarly text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                <BadgePercent className="w-6 h-6 text-gold" strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold mb-1">Pharo Foundation Subsidy</div>
                <p className="text-white font-semibold text-base md:text-lg">
                  70% subsidised. Families pay an average of <span className="text-gold font-bold">{feeText}</span>.
                </p>
              </div>
            </div>
            <Link
              href="/admissions"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-scholarly font-bold text-sm hover:bg-gold hover:text-white transition-colors shadow-sm"
            >
              Full Details <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}
