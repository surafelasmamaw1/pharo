"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Testimonial = {
  id?: string;
  quote: string;
  name: string;
  role: string;
  type?: "Parent" | "Student" | "Teacher";
};

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "From the first years through the later grades, the standard stays high. The teachers, including those who lecture at university, give families real confidence.",
    name: "Kaleb Akalu",
    role: "Parent",
  },
  {
    quote:
      "Pharo is more than a classroom. The campus, the buses, and the community around the school make the daily journey easier for our family.",
    name: "Eba Dagne",
    role: "Parent",
  },
  {
    quote:
      "What stands out for us is how Pharo opens doors. Our children are not only taught well, they are given room to grow, compete, and take on opportunities beyond the school.",
    name: "Biruk Habte",
    role: "Parent",
  },
  {
    quote:
      "We chose Pharo because the teaching is serious and the school has been part of Assosa for many years. Our children are known here, and that matters.",
    name: "Dejen Achenef",
    role: "Parent",
  },
  {
    quote:
      "The discipline, academic rigour, and caring teachers at Pharo School Assosa have transformed our child's confidence and national examination performance.",
    name: "Amina Tesfaye",
    role: "Parent",
  },
  {
    quote:
      "The science laboratories and computer resources gave me the hands-on practice I needed. The teachers are dedicated and always available during after-school tutorials.",
    name: "Daniel Bekele",
    role: "Scholar",
  },
  {
    quote:
      "Teaching at Pharo School Assosa means shaping determined young minds who are committed to solving real challenges in Ethiopia through science and ethics.",
    name: "Sara Woldemichael",
    role: "Faculty Head",
  },
];

function getInitials(name: string): string {
  if (!name) return "PS";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Testimonials() {
  const [items, setItems] = useState<Testimonial[]>(defaultTestimonials);

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const res = await fetch("/api/testimonials");
        const json = await res.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          // Merge API testimonials with the defaults so the marquee is rich and full
          const apiItems: Testimonial[] = json.data;
          const merged = [...apiItems, ...defaultTestimonials.filter(d => !apiItems.some(a => a.name.toLowerCase() === d.name.toLowerCase()))];
          setItems(merged);
        }
      } catch (e) {
        // Fall back gracefully to default curated testimonials
      }
    }
    loadTestimonials();
  }, []);

  // Duplicate items to create a continuous seamless infinite horizontal scroll
  const marqueeItems = [...items, ...items];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-[#E9EBEF]/60 dark:bg-[#0E121A] relative overflow-hidden border-y border-border/40"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#B8893C] block mb-2">
            VOICES
          </span>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] font-bold text-[#1E3A5F] dark:text-white tracking-tight leading-tight">
            What families say, in their own words.
          </h2>

          {/* Two-tone accent underline: gold + navy */}
          <div className="flex items-center justify-center gap-1.5 mt-3.5 mb-4">
            <span className="w-6 h-[3px] rounded-full bg-[#B8893C]" />
            <span className="w-10 h-[3px] rounded-full bg-[#1E3A5F] dark:bg-white/80" />
          </div>

          {/* Subtitle */}
          <p className="text-muted text-sm md:text-[15px] max-w-xl mx-auto leading-relaxed">
            Parents on why they chose Pharo, and why they stay.
          </p>
        </motion.div>
      </div>

      {/* Infinite Horizontal Marquee Carousel */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 bg-gradient-to-r from-[#E9EBEF]/90 dark:from-[#0E121A] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 bg-gradient-to-l from-[#E9EBEF]/90 dark:from-[#0E121A] to-transparent pointer-events-none z-10" />

        {/* Scrolling track */}
        <div className="flex gap-5 sm:gap-6 animate-marquee py-3 px-4">
          {marqueeItems.map((item, idx) => (
            <article
              key={`${item.name}-${idx}`}
              className="w-[300px] sm:w-[350px] md:w-[380px] flex-shrink-0 bg-white dark:bg-[#151D2A] rounded-[22px] border border-black/[0.06] dark:border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(30,58,95,0.09)] transition-all duration-200 p-6 sm:p-7 flex flex-col justify-between"
            >
              {/* Quote */}
              <p className="text-slate-700 dark:text-slate-200 text-[13px] sm:text-[13.5px] md:text-sm leading-relaxed mb-6 font-normal">
                {item.quote}
              </p>

              {/* Author badge + details */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/5 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#DCE1E7] dark:bg-white/10 text-[#1E3A5F] dark:text-slate-200 font-bold text-xs flex items-center justify-center flex-shrink-0 tracking-wider">
                  {getInitials(item.name)}
                </div>
                <div className="min-w-0 flex flex-col">
                  <span className="font-semibold text-sm text-[#1E3A5F] dark:text-white leading-snug truncate">
                    {item.name}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                    {item.role}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
