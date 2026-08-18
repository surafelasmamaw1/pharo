"use client";

import { motion } from "framer-motion";
import {
  Compass as ExploreIcon,
  ClipboardList as ApplyIcon,
  UsersRound as ConnectIcon,
  GraduationCap as JoinIcon,
  ArrowRight,
  Phone,
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

type Step = {
  num: string;
  icon: typeof ExploreIcon;
  title: string;
  description: string;
  accent: string;
  iconBg: string;
  glow: string;
  borderGlow: string;
};

const steps: Step[] = [
  {
    num: "01",
    icon: ExploreIcon,
    title: "Explore",
    description:
      "Learn about the school and academic programs. Discover the community, the curriculum, and the promise of a Pharo Foundation education.",
    accent: "bg-scholarly text-white",
    iconBg: "from-scholarly/30 to-scholarly-light/15 text-white",
    glow: "hover:shadow-[0_0_36px_rgba(30,58,95,0.2)]",
    borderGlow: "dark:hover:border-scholarly/50",
  },
  {
    num: "02",
    icon: ApplyIcon,
    title: "Apply",
    description:
      "Submit the required application information. Our admissions materials are designed to help us understand your child and your family.",
    accent: "bg-gold text-white",
    iconBg: "from-gold/30 to-amber-500/15 text-white",
    glow: "hover:shadow-[0_0_36px_rgba(184,137,60,0.2)]",
    borderGlow: "dark:hover:border-gold/50",
  },
  {
    num: "03",
    icon: ConnectIcon,
    title: "Connect",
    description:
      "The admissions team guides families through the next steps — campus visits, conversations, and any additional reviews or assessments.",
    accent: "bg-scholarly-light text-white",
    iconBg: "from-scholarly-light/30 to-cyan-500/15 text-white",
    glow: "hover:shadow-[0_0_36px_rgba(45,79,122,0.2)]",
    borderGlow: "dark:hover:border-scholarly-light/50",
  },
  {
    num: "04",
    icon: JoinIcon,
    title: "Join",
    description:
      "Begin your journey as part of the Pharo Foundation community. Enroll, attend orientation, and step into a place where your child can thrive.",
    accent: "bg-success text-white",
    iconBg: "from-success/30 to-emerald-500/15 text-white",
    glow: "hover:shadow-[0_0_36px_rgba(46,125,87,0.2)]",
    borderGlow: "dark:hover:border-success/50",
  },
];

export default function Resume() {
  return (
    <section
      id="admissions"
      className="py-section-sm md:py-section-md relative overflow-hidden"
    >
      {/* Background accent wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-scholarly-pale/60 via-transparent to-gold-pale/40 dark:from-scholarly-pale dark:via-transparent dark:to-gold-pale/40" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Section header */}
          <div className="max-w-3xl text-left mb-14 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-scholarly/15 bg-scholarly-pale/60 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-scholarly" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-scholarly">
                Admissions
              </span>
            </div>
            <SectionHeading className="text-left">Start Your Journey With Us</SectionHeading>
            <p className="mt-6 text-foreground leading-relaxed text-lg md:text-[20px] font-medium">
              Discover how your child can become part of the Pharo Foundation community.
            </p>
            <p className="mt-3 text-muted leading-relaxed text-base md:text-lg">
              Our admissions process is thoughtful, personal, and designed to help
              families and the school find the right fit together.
            </p>
          </div>

          {/* 4-step timeline */}
          <div className="relative">
            {/* Connecting line (desktop + tablet) */}
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
                    {/* Number chip top-right */}
                    <div
                      className={`absolute top-5 right-5 w-11 h-11 rounded-2xl ${s.accent} flex items-center justify-center shadow-sm font-bold text-sm`}
                    >
                      {s.num}
                    </div>

                    {/* Icon node — sits on the line visually on md+ */}
                    <div
                      className={`relative mb-6 w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl bg-gradient-to-br ${s.iconBg} flex items-center justify-center border border-white/10 shadow-md`}
                    >
                      <Icon
                        className="w-8 h-8 md:w-9 md:h-9 text-white"
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="text-xl md:text-[22px] font-semibold text-foreground mb-3 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-muted leading-relaxed text-sm md:text-base">
                      {s.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-14 md:mt-16 p-7 md:p-10 rounded-[28px] border border-border bg-gradient-to-br from-scholarly via-scholarly-light to-scholarly text-white overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.35),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(212,167,94,0.45),transparent_55%)]" />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7 lg:gap-10">
              <div className="max-w-2xl text-left">
                <h3 className="font-serif text-2xl md:text-3xl lg:text-[34px] font-bold leading-tight mb-3">
                  Ready to begin the conversation?
                </h3>
                <p className="text-white/85 text-base md:text-lg leading-relaxed">
                  Our admissions team is available to answer questions, schedule a
                  personal tour, and guide your family at every step.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:flex-shrink-0">
                <Button
                  href="#contact"
                  variant="outline"
                  size="lg"
                  className="!bg-white !text-scholarly !border-white hover:!bg-gold-pale"
                >
                  <Phone className="w-4.5 h-4.5" />
                  Contact Admissions
                </Button>
                <Button
                  href="#contact"
                  variant="outline"
                  size="lg"
                  className="!bg-gold !text-white !border-gold hover:!bg-amber-600"
                >
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
