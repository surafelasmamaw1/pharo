"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { Target, Eye, ArrowRight, Landmark } from "lucide-react";

export default function About() {
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
            {/* Image / visual card (4 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-[28px] overflow-hidden border border-border shadow-lg bg-gradient-to-br from-scholarly-pale via-gold-pale to-scholarly-pale group">
                  {/* Replace with official school image:
                    <Image src="/about-school.jpg" alt="About Pharo Foundation" fill className="object-cover" />
                  */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(30,58,95,0.18),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(184,137,60,0.2),transparent_55%)]" />

                  {/* Decorative icon stack */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-scholarly/10 flex items-center justify-center border border-white/40 backdrop-blur-sm shadow-inner">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/50 dark:bg-white/5 flex items-center justify-center border border-white/50">
                          <Landmark className="w-12 h-12 md:w-16 md:h-16 text-scholarly" strokeWidth={1.4} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Overlay caption */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 bg-gradient-to-t from-scholarly/90 via-scholarly/50 to-transparent text-white">
                    <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-gold mb-1.5">
                      [Official School Photo]
                    </div>
                    <div className="font-serif text-lg md:text-xl font-semibold leading-snug">
                      A Tradition of Excellence in Education
                    </div>
                  </div>
                </div>

                {/* Decorative accents */}
                <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 rounded-3xl bg-gold-pale dark:bg-gold-pale/60 -rotate-6" />
                <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 rounded-3xl bg-scholarly-pale dark:bg-scholarly-pale/60 rotate-6" />
              </div>
            </motion.div>

            {/* Intro + Heading text (8 cols) */}
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
                  [PLACEHOLDER — Official institutional introduction] Pharo
                  Foundation is an educational community dedicated to nurturing
                  the intellectual, personal, and moral growth of every student
                  in our care. For generations, families have trusted us with
                  the most important work there is: preparing young people for
                  lives of purpose, achievement, and contribution.
                </p>
                <p className="text-base md:text-lg text-muted leading-relaxed">
                  [PLACEHOLDER] We believe that a truly excellent education is
                  about the whole child — rigorous academics paired with
                  character formation, creative expression, meaningful
                  relationships, and active citizenship. Our students leave us
                  ready not only for the next step on their journey, but with
                  the confidence and curiosity to shape it.
                </p>
              </div>

              {/* Learn More CTA row */}
              <div className="mt-8 md:mt-10">
                <Button href="#why-choose" variant="outline" size="lg">
                  Learn More About Us <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision — two large side-by-side cards */}
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
                  [PLACEHOLDER — Official mission statement] The mission of Pharo
                  Foundation is to provide a rigorous, supportive, and inclusive
                  learning environment in which each student is known, valued,
                  and inspired to achieve academic excellence, develop strong
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
                <div className="inline-block px-3 py-1 rounded-full border border-gold/20 bg-gold/5 text-gold dark:text-gold text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
                  Our Vision
                </div>
                <h3 className="font-serif text-2xl md:text-[28px] font-bold text-foreground leading-tight mb-5">
                  To be a community where every learner thrives.
                </h3>
                <p className="text-muted leading-relaxed text-base md:text-[17px]">
                  [PLACEHOLDER — Official vision statement] Our vision is to be
                  recognized as a leading educational community — one known for
                  the strength of its scholarship, the warmth of its culture,
                  the depth of its character, and the positive impact of its
                  graduates on the communities they go on to serve.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
