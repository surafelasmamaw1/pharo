"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CallToAction() {
  return (
    <section id="cta" className="py-section-sm md:py-section-md relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Brand banner with educational background */}
          <div className="relative rounded-[32px] overflow-hidden border border-border bg-gradient-to-br from-scholarly via-scholarly-light to-scholarly text-white p-8 md:p-12 lg:p-14 shadow-xl">
            {/* Background image layer — replaceable with an official photo */}
            <div className="absolute inset-0 opacity-[0.22] dark:opacity-[0.28]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 15% 15%, rgba(255,255,255,0.5), transparent 55%), radial-gradient(circle at 85% 85%, rgba(212,167,94,0.55), transparent 55%)",
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.12),transparent_45%),radial-gradient(circle_at_10%_90%,rgba(184,137,60,0.28),transparent_45%)]" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/12 backdrop-blur border border-white/20 mb-7">
                  <Sparkles className="w-4 h-4 text-gold" strokeWidth={1.8} />
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/95">
                    Begin Your Family&apos;s Journey
                  </span>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight mb-5 text-balance">
                  Give Your Child the Opportunity to Thrive
                </h2>
                <p className="text-white/85 text-base md:text-lg lg:text-[19px] leading-relaxed max-w-2xl">
                  Discover an educational environment designed to inspire curiosity,
                  confidence, and lifelong learning.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 lg:gap-5 lg:items-end">
                <Button
                  href="#admissions"
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto lg:w-full !bg-white !text-scholarly !border-white hover:!bg-gold-pale"
                >
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  href="#contact"
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto lg:w-full !bg-transparent !text-white !border-white/60 hover:!bg-white/10"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
