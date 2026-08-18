"use client";

import { motion } from "framer-motion";
import { Quote, UserCircle, Heart } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Tag from "../ui/Tag";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  type: "Parent" | "Student" | "Teacher";
};

const testimonials: Testimonial[] = [
  {
    type: "Parent",
    quote:
      "[PLACEHOLDER — Parent testimonial] From the very first visit, we felt a genuine sense of care. Teachers truly know each child individually, and the community has warmly welcomed our family. Our child looks forward to school every day, and we see growth — academically and personally — every term.",
    name: "[Parent Name]",
    role: "Parent of a [Grade Level] student",
  },
  {
    type: "Student",
    quote:
      "[PLACEHOLDER — Student testimonial] I love coming to school because of my friends and teachers. The classes are interesting and the activities are fun. I feel like I can be myself here, and I want to keep learning and trying new things.",
    name: "[Student Name]",
    role: "Class of [Year] — Student",
  },
  {
    type: "Teacher",
    quote:
      "[PLACEHOLDER — Teacher testimonial] Teaching at Pharo Foundation means being part of a community that trusts teachers and values depth, not just speed. The collegiality is real, the students are inspiring, and families are true partners in learning. It is a very special place.",
    name: "[Teacher Name]",
    role: "[Subject / Department] — Faculty",
  },
];

const typeTagStyle: Record<Testimonial["type"], string> = {
  Parent: "!bg-gold !text-white !border-gold",
  Student: "!bg-scholarly-light !text-white !border-scholarly-light",
  Teacher: "!bg-scholarly !text-white !border-scholarly",
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-section-sm md:py-section-md bg-foreground/[0.025] dark:bg-white/[0.02] relative overflow-hidden"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="max-w-3xl text-left mb-14 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold-pale/70 mb-7">
              <Heart className="w-4 h-4 text-gold" strokeWidth={1.8} />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold">
                Voices of Pharo
              </span>
            </div>
            <SectionHeading className="text-left">What Our Community Says</SectionHeading>
            <p className="mt-6 text-muted leading-relaxed text-base md:text-lg">
              Parents, students, and teachers share their perspectives on life
              and learning at Pharo Foundation. (All content below is placeholder
              — replace with official testimonials when available.)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {testimonials.map((t, idx) => (
              <motion.figure
                key={`${t.type}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                whileHover={{ y: -6, scale: 1.018 }}
                className="relative flex flex-col h-full p-7 md:p-8 rounded-[26px] border border-border bg-background shadow-sm hover:shadow-[0_0_34px_rgba(30,58,95,0.16)] dark:hover:bg-white/5 dark:hover:border-scholarly/40 transition-all duration-300 overflow-hidden"
              >
                <Quote className="w-10 h-10 text-scholarly/25 absolute top-5 right-5" strokeWidth={1} />

                <div className="mb-5">
                  <Tag size="sm" className={typeTagStyle[t.type]}>
                    {t.type}
                  </Tag>
                </div>

                <blockquote className="relative text-foreground leading-relaxed text-sm md:text-[15px] whitespace-pre-line mb-8 flex-1">
                  <span className="sr-only">Testimonial from {t.name}: </span>
                  {t.quote}
                </blockquote>

                <figcaption className="flex items-center gap-3 pt-5 border-t border-border/60 mt-auto">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-scholarly-pale dark:bg-scholarly-pale/60 border border-scholarly/15 flex items-center justify-center flex-shrink-0">
                    <UserCircle className="w-6 h-6 md:w-7 md:h-7 text-scholarly" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-foreground truncate text-sm md:text-base">
                      {t.name}
                    </div>
                    <div className="text-muted text-xs md:text-sm truncate">
                      {t.role}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
