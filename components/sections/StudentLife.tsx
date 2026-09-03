"use client";

import { useState } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { Clock, ShieldCheck, Trophy, Users, HeartHandshake, Sparkles, BookOpen } from "lucide-react";

const dailyRoutine = [
  { time: "06:30", title: "Morning Rise & Breakfast", desc: "Boarding scholars awaken, prepare for the day, and enjoy breakfast in the campus dining hall." },
  { time: "07:30", title: "School Assembly & Flag Ceremony", desc: "The whole school gathers for the Ethiopian national anthem, notices, and morning reflections." },
  { time: "08:00 – 12:30", title: "Morning Academic Lessons", desc: "Intensive instruction in STEM, English, Natural and Social Sciences with hands-on laboratory work." },
  { time: "12:30 – 13:45", title: "Lunch & Midday Fellowship", desc: "Nutritious hot lunch prepared on campus, social time, and library access." },
  { time: "13:45 – 16:00", title: "Afternoon Labs & Humanities", desc: "Computer science, languages, project presentations, and remedial academic tutorials." },
  { time: "16:15 – 17:45", title: "Co-Curriculars & Athletics", desc: "Inter-house football, track athletics, volleyball, debate society, robotics, and choir." },
  { time: "19:15 – 21:00", title: "Supervised Evening Prep", desc: "Focused individual study and homework in classrooms guided by faculty duty teachers." },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "Residential Boarding & Welfare",
    desc: "Dedicated dormitories with 24/7 security, continuous clean water, solar-backed power, on-site campus nurse, and caring house parents.",
  },
  {
    icon: Trophy,
    title: "House System & Athletics",
    desc: "Scholars belong to competitive school houses fostering brotherhood, sisterhood, sportsmanship, and spirited annual sports day derbies.",
  },
  {
    icon: BookOpen,
    title: "STEM & Co-Curricular Societies",
    desc: "Active clubs including Coding & Robotics, Model UN, Science Discovery, English Writers' Guild, and Environmental Stewardship.",
  },
  {
    icon: HeartHandshake,
    title: "Leadership & Community Service",
    desc: "Scholars participate in community outreach, tree planting, and peer tutoring across the Assosa town and surrounding woredas.",
  },
];

export default function StudentLife() {
  return (
    <section id="student-life" className="py-20 bg-slate-50 border-b border-border/70">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded border border-scholarly/20 bg-scholarly-pale/60 mb-4">
            <Users className="w-4 h-4 text-scholarly" />
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-scholarly">
              Life at Pharo School Assosa
            </span>
          </div>
          <SectionHeading className="text-left">A Structured, Inspiring Community</SectionHeading>
          <p className="mt-4 text-slate-700 leading-relaxed text-base md:text-lg">
            Education extends far beyond textbooks. At Pharo School Assosa, our scholars live and learn in a disciplined, supportive environment designed to instill habits of excellence, resilience, and ethical leadership.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                <div className="w-11 h-11 rounded-lg bg-scholarly-pale text-scholarly flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Daily Schedule - Real School Timeline */}
        <div className="rounded-2xl bg-white border border-slate-200 p-8 md:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200">
            <Clock className="w-6 h-6 text-gold" />
            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">A Day in the Life of a Scholar</h3>
              <p className="text-xs text-slate-600">The daily operational timetable at Pharo School Assosa</p>
            </div>
          </div>

          <div className="space-y-4">
            {dailyRoutine.map((item, idx) => (
              <div
                key={item.time}
                className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
              >
                <div className="sm:w-44 flex-shrink-0">
                  <span className="font-mono text-xs font-bold text-scholarly px-2.5 py-1 rounded bg-scholarly-pale border border-scholarly/15">
                    {item.time}
                  </span>
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-sm text-slate-900 mb-0.5">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
