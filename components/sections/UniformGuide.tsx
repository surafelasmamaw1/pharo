"use client";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { Shirt, CheckCircle2 } from "lucide-react";

export default function UniformGuide() {
  return (
    <section id="uniform" className="py-20 bg-white border-b border-border/70">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded border border-scholarly/20 bg-scholarly-pale/60 mb-4">
            <Shirt className="w-4 h-4 text-scholarly" />
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-scholarly">
              Student Dress &amp; Appearance
            </span>
          </div>
          <SectionHeading className="text-left">School Uniform &amp; Decorum Guide</SectionHeading>
          <p className="mt-4 text-slate-700 leading-relaxed text-base md:text-lg">
            At Pharo School Assosa, our uniform reflects equality, discipline, and scholarly pride. Scholars wear their uniform with distinction, fostering a sense of shared purpose and community across all grades.
          </p>
        </div>

        {/* Uniform Cards (Boys & Girls) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Boys Card */}
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-left">
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-scholarly text-white flex items-center justify-center font-bold text-sm">
                B
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900">Boys' Academic Attire</h3>
                <p className="text-xs text-slate-500">Grades 7 through 12</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-scholarly flex-shrink-0 mt-0.5" />
                <span><strong>Shirt:</strong> Crisp sky-blue collared shirt with embroidered Pharo School crest on the left chest pocket.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-scholarly flex-shrink-0 mt-0.5" />
                <span><strong>Trousers:</strong> Tailored deep navy formal trousers with black leather belt.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-scholarly flex-shrink-0 mt-0.5" />
                <span><strong>Knitwear:</strong> Navy V-neck knit pullover with gold border accent for cooler mornings.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-scholarly flex-shrink-0 mt-0.5" />
                <span><strong>Footwear:</strong> Polished black leather dress shoes with plain black or navy socks.</span>
              </li>
            </ul>
          </div>

          {/* Girls Card */}
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-left">
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-gold text-slate-950 flex items-center justify-center font-bold text-sm">
                G
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900">Girls' Academic Attire</h3>
                <p className="text-xs text-slate-500">Grades 7 through 12</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
                <span><strong>Blouse:</strong> Crisp sky-blue collared blouse with embroidered Pharo School crest.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
                <span><strong>Skirt/Trousers:</strong> Pleated below-the-knee navy skirt or tailored navy trousers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
                <span><strong>Cardigan:</strong> Navy button-down knit cardigan featuring the school emblem.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
                <span><strong>Footwear:</strong> Polished flat black leather shoes with plain navy or white socks.</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
