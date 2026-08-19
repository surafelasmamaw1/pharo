"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  X,
  ArrowRight,
  Building2,
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

type Vacancy = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  posted: string;
  deadline: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  typeColor: string;
};

const vacancies: Vacancy[] = [
  {
    id: 1,
    title: "Primary School Teacher",
    department: "Academics",
    location: "Pharo Foundation Campus",
    type: "Full-time",
    posted: "August 1, 2026",
    deadline: "September 15, 2026",
    description:
      "We are looking for a passionate and experienced Primary School Teacher to join our academic team. The successful candidate will deliver engaging, inclusive, and rigorous instruction to students in Grades 1–6.",
    responsibilities: [
      "Plan and deliver high-quality lessons aligned with the curriculum",
      "Monitor and assess student progress regularly",
      "Communicate effectively with parents and guardians",
      "Collaborate with colleagues on cross-curricular projects",
      "Contribute to the wider school community",
    ],
    requirements: [
      "Bachelor's degree in Education or related field",
      "Minimum 2 years of classroom teaching experience",
      "Strong communication and interpersonal skills",
      "Commitment to inclusive and child-centred learning",
    ],
    typeColor: "bg-scholarly text-white",
  },
  {
    id: 2,
    title: "STEM & Robotics Instructor",
    department: "STEM",
    location: "Pharo Foundation Campus",
    type: "Full-time",
    posted: "August 5, 2026",
    deadline: "September 20, 2026",
    description:
      "Join our growing STEM department as a Robotics and Technology Instructor. You will design and deliver hands-on STEM programmes for students across all year groups, inspiring the next generation of innovators.",
    responsibilities: [
      "Design and deliver STEM and robotics curriculum",
      "Manage and maintain the school's technology lab and maker space",
      "Coordinate inter-school STEM competitions",
      "Mentor students on coding, engineering, and design projects",
      "Stay current with emerging technologies and pedagogical approaches",
    ],
    requirements: [
      "Degree in Engineering, Computer Science, or related field",
      "Experience teaching STEM subjects to school-age students",
      "Proficiency in programming languages (Python, Scratch, etc.)",
      "Ability to inspire curiosity and creative problem-solving",
    ],
    typeColor: "bg-success text-white",
  },
  {
    id: 3,
    title: "School Librarian",
    department: "Library & Resources",
    location: "Pharo Foundation Campus",
    type: "Full-time",
    posted: "August 10, 2026",
    deadline: "September 30, 2026",
    description:
      "We are seeking a dedicated and organised School Librarian to manage our library resources, promote a love of reading, and support student research across all year groups.",
    responsibilities: [
      "Manage and develop the school's print and digital collections",
      "Support students and staff with research and information literacy",
      "Organise reading programmes, author visits, and book events",
      "Maintain library systems, cataloguing, and borrowing records",
      "Collaborate with teachers to integrate library resources into lessons",
    ],
    requirements: [
      "Degree or diploma in Library and Information Science",
      "Experience in a school or educational library setting",
      "Strong organisational and communication skills",
      "Passion for literacy and promoting reading culture",
    ],
    typeColor: "bg-gold text-white",
  },
  {
    id: 4,
    title: "Administrative Assistant",
    department: "Administration",
    location: "Pharo Foundation Campus",
    type: "Full-time",
    posted: "August 12, 2026",
    deadline: "October 1, 2026",
    description:
      "We are hiring a proactive and organised Administrative Assistant to support the school's day-to-day operations, admissions process, and front office functions.",
    responsibilities: [
      "Manage front office reception and communication",
      "Support the admissions team with enquiries and documentation",
      "Maintain student records and administrative databases",
      "Coordinate meetings, schedules, and school correspondence",
      "Assist with school events and parent communications",
    ],
    requirements: [
      "Diploma or degree in Business Administration or related field",
      "Strong computer skills (MS Office, Google Workspace)",
      "Excellent organisational and communication abilities",
      "Prior experience in a school or office environment preferred",
    ],
    typeColor: "bg-scholarly-light text-white",
  },
];

function VacancyModal({ vacancy, onClose }: { vacancy: Vacancy; onClose: () => void }) {
  return (
    <AnimatePresence>
      <>
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 pointer-events-none"
        >
          <div className="relative w-full max-w-2xl bg-background rounded-[28px] border border-border shadow-2xl overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col">

            {/* Header */}
            <div className="relative p-7 md:p-8 bg-gradient-to-br from-scholarly-pale/80 via-background to-background border-b border-border flex-shrink-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-scholarly flex items-center justify-center shadow-md flex-shrink-0">
                    <Briefcase className="w-7 h-7 text-white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.16em] uppercase ${vacancy.typeColor} shadow-sm mb-2`}>
                      {vacancy.type}
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight">
                      {vacancy.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted font-medium">
                      <span className="flex items-center gap-1"><Building2 className="w-3.5 h-3.5" />{vacancy.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{vacancy.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />Deadline: {vacancy.deadline}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-foreground/8 border border-border flex items-center justify-center text-muted hover:text-foreground hover:bg-foreground/12 transition-colors flex-shrink-0"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-7 md:p-8 overflow-y-auto space-y-6">
              <div>
                <h3 className="font-semibold text-foreground text-base mb-2">About the Role</h3>
                <p className="text-muted leading-relaxed text-sm md:text-base">{vacancy.description}</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-base mb-3">Responsibilities</h3>
                <ul className="space-y-2">
                  {vacancy.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-scholarly mt-2 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-base mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {vacancy.requirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-muted">Posted: {vacancy.posted} · Deadline: {vacancy.deadline}</p>
                <Button href="#contact" variant="secondary" size="sm" onClick={onClose}>
                  Apply Now <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </>
    </AnimatePresence>
  );
}

const VISIBLE_COUNT = 3;

export default function Vacancy() {
  const [selected, setSelected] = useState<Vacancy | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? vacancies : vacancies.slice(0, VISIBLE_COUNT);
  const hiddenCount = vacancies.length - VISIBLE_COUNT;

  return (
    <section id="vacancy" className="py-section-sm md:py-section-md relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-scholarly/15 bg-scholarly-pale/70 mb-7">
                <Briefcase className="w-4 h-4 text-scholarly" strokeWidth={1.8} />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-scholarly">
                  Join Our Team
                </span>
              </div>
              <SectionHeading className="text-left">Vacancies</SectionHeading>
              <p className="mt-6 text-muted leading-relaxed text-base md:text-lg">
                Be part of a team dedicated to unlocking Africa&apos;s potential. We are always
                looking for talented, passionate individuals to join Pharo Foundation.
              </p>
            </div>
            {hiddenCount > 0 && !showAll && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-scholarly/20 bg-scholarly-pale/60"
              >
                <Briefcase className="w-4 h-4 text-scholarly" strokeWidth={1.8} />
                <span className="text-sm font-bold text-scholarly">
                  +{hiddenCount} more {hiddenCount === 1 ? "vacancy" : "vacancies"}
                </span>
              </motion.div>
            )}
          </div>

          {/* Vacancy cards */}
          <div className="mt-12 md:mt-16 flex flex-col gap-4">
            {visible.map((v, idx) => (
              <motion.article
                key={v.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                whileHover={{ y: -3 }}
                onClick={() => setSelected(v)}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-5 p-6 md:p-7 rounded-[20px] border border-border bg-background shadow-sm hover:shadow-[0_0_28px_rgba(30,58,95,0.14)] hover:border-scholarly/30 cursor-pointer transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-scholarly flex items-center justify-center shadow-sm flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="font-semibold text-foreground text-base md:text-lg leading-snug">
                        {v.title}
                      </h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-[0.14em] uppercase ${v.typeColor}`}>
                        {v.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                      <span className="flex items-center gap-1"><Building2 className="w-3.5 h-3.5" />{v.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{v.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />Deadline: {v.deadline}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 flex items-center gap-2 text-sm font-bold text-scholarly dark:text-scholarly-light group-hover:gap-3 transition-all ml-16 sm:ml-0">
                  View Details
                  <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                </div>
              </motion.article>
            ))}
          </div>

          {/* Show more / less */}
          {vacancies.length > VISIBLE_COUNT && (
            <div className="mt-8 flex flex-col items-center gap-3">
              <button
                onClick={() => setShowAll((p) => !p)}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-scholarly text-scholarly font-bold text-sm hover:bg-scholarly hover:text-white transition-all duration-200 shadow-sm hover:shadow-[0_0_24px_rgba(30,58,95,0.25)]"
              >
                {showAll ? (
                  <><ChevronUp className="w-4 h-4" strokeWidth={2.2} /> Show Less</>
                ) : (
                  <>View All {vacancies.length} Vacancies <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" strokeWidth={2.2} /></>
                )}
              </button>
              {!showAll && (
                <p className="text-xs text-muted">Showing {VISIBLE_COUNT} of {vacancies.length} — {hiddenCount} more available</p>
              )}
            </div>
          )}
        </motion.div>
      </Container>

      {selected && <VacancyModal vacancy={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
