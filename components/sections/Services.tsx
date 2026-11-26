"use client";

import type { LucideIcon } from "lucide-react";
import {
  Award,
  UserCheck,
  Lightbulb,
  Sprout,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { siteConfig } from "@/lib/siteConfig";

type WhyCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const cardIcons = [Award, UserCheck, Lightbulb, Sprout, ShieldCheck, UsersRound];

const cards: WhyCard[] = siteConfig.services.map((s, i) => ({
  icon: cardIcons[i],
  title: s.title,
  description: s.description,
}));

export default function Services() {
  return (
    <section
      id="why-choose"
      className="py-16 md:py-24 bg-slate-50/70 border-y border-border/60"
    >
      <Container>
        <div className="text-left max-w-2xl mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold mb-3">
            Our Approach
          </p>
          <SectionHeading className="text-left">Why Families Choose Pharo</SectionHeading>
          <p className="mt-4 text-muted leading-relaxed text-base md:text-lg">
            Six practical commitments that shape daily teaching and student life at our Assosa campus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className="p-6 md:p-7 rounded-xl border border-border bg-white shadow-sm hover:border-scholarly/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="w-10 h-10 rounded-lg bg-scholarly-pale text-scholarly flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground leading-snug">
                    {c.title}
                  </h3>
                </div>
                <p className="text-muted leading-relaxed text-sm md:text-[15px]">
                  {c.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
