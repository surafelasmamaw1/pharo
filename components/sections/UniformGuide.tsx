"use client";

import { useState } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { Shirt, CheckCircle2 } from "lucide-react";

export default function UniformGuide() {
  const [activeTab, setActiveTab] = useState<"academic" | "pe">("academic");

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

        {/* Tab Toggle */}
        <div className="flex items-center gap-3 mb-10 p-1.5 rounded-xl bg-slate-100 border border-slate-200 w-fit">
          <button
            onClick={() => setActiveTab("academic")}
            className={`px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
              activeTab === "academic"
                ? "bg-scholarly text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
            }`}
          >
            Academic Uniform (Monday – Thursday)
          </button>
          <button
            onClick={() => setActiveTab("pe")}
            className={`px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
              activeTab === "pe"
                ? "bg-scholarly text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
            }`}
          >
            PE &amp; Athletics Kit (Friday &amp; Sports)
          </button>
        </div>

        {/* Uniform Content Panels */}
        {activeTab === "academic" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Athletics Kit Card */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-left">
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">
                Physical Education &amp; Track Kit
              </h3>
              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Sports Tee:</strong> Gold and navy moisture-wicking athletic tee with house designation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Track Pants / Shorts:</strong> Breathable navy athletic track pants or sports shorts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Trainers:</strong> Supportive running shoes with rubber soles suitable for track and football pitch.</span>
                </li>
              </ul>
            </div>

            {/* House Colors */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-left">
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">
                Inter-House Sports Colors
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-white border border-slate-200">
                  <span className="font-bold text-scholarly block">Abay House</span>
                  <span className="text-slate-500">Royal Navy Blue</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200">
                  <span className="font-bold text-amber-600 block">Dabus House</span>
                  <span className="text-slate-500">Golden Amber</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200">
                  <span className="font-bold text-emerald-600 block">Bambasi House</span>
                  <span className="text-slate-500">Forest Green</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200">
                  <span className="font-bold text-rose-600 block">Kurmuk House</span>
                  <span className="text-slate-500">Crimson Red</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
