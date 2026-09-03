"use client";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { Clock, Users } from "lucide-react";

const dailyRoutine = [
  { time: "07:30 – 08:00", title: "Arrival & Morning Assembly", desc: "Scholars arrive on campus, raise the national flag, sing the anthem, and receive morning announcements." },
  { time: "08:00 – 10:15", title: "Morning Core Academic Periods", desc: "Rigorous instruction in Mathematics, Physics, Chemistry, Biology, and English language arts." },
  { time: "10:15 – 10:40", title: "Mid-Morning Break & Refreshment", desc: "Rest, peer discussions in the courtyard, teacher check-ins, and library book loans." },
  { time: "10:40 – 12:30", title: "Laboratory Science & Computing", desc: "Hands-on experiments in dedicated science laboratories and practical IT programming classes." },
  { time: "12:30 – 13:30", title: "Lunch & Midday Fellowship", desc: "Nutritious campus meal, open library reading, and recreational games with friends." },
  { time: "13:30 – 15:30", title: "Afternoon Humanities & Languages", desc: "Social studies, citizenship education, Amharic/regional languages, and collaborative group projects." },
  { time: "15:45 – 17:00", title: "Co-Curricular Clubs & Athletics", desc: "Inter-house football, track athletics, volleyball, debate society, robotics club, or tutorial support." },
  { time: "17:00", title: "Campus Dismissal & Safe Departure", desc: "End of the instructional day; scholars depart safely for home with guided study assignments." },
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
          <SectionHeading className="text-left">A Structured, Inspiring Day School</SectionHeading>
          <p className="mt-4 text-slate-700 leading-relaxed text-base md:text-lg">
            Education extends far beyond textbooks. At Pharo School Assosa, our scholars learn and grow in a disciplined, supportive day-school environment designed to instill habits of excellence, resilience, and ethical leadership.
          </p>
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
            {dailyRoutine.map((item) => (
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
