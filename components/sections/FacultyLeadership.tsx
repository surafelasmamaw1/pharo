"use client";

import { useState, useEffect } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { GraduationCap, Award, UserCheck } from "lucide-react";
import Image from "next/image";

interface FacultyItem {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  expertise: string;
  imageUrl?: string | null;
  order: number;
}

export default function FacultyLeadership() {
  const [faculty, setFaculty] = useState<FacultyItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFaculty() {
      try {
        const res = await fetch("/api/faculty", { cache: "no-store" });
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setFaculty(json.data);
        }
      } catch (err) {
        console.error("Failed to load faculty:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadFaculty();
  }, []);

  if (!isLoading && faculty.length === 0) {
    return null;
  }

  return (
    <section id="faculty" className="py-20 bg-slate-50 border-b border-border/70">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded border border-scholarly/20 bg-scholarly-pale/60 mb-4">
            <GraduationCap className="w-4 h-4 text-scholarly" />
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-scholarly">
              Academic Leadership &amp; Faculty
            </span>
          </div>
          <SectionHeading className="text-left">Experienced Educators Inspiring Excellence</SectionHeading>
          <p className="mt-4 text-slate-700 leading-relaxed text-base md:text-lg">
            Our faculty brings together accomplished educators with advanced post-graduate credentials from leading universities in Ethiopia and abroad. Their shared commitment is to unlock each scholar's highest potential through rigor, mentorship, and personal care.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faculty.map((leader) => {
            const expertiseTags = leader.expertise
              ? leader.expertise.split(",").map((t) => t.trim()).filter(Boolean)
              : [];

            return (
              <div
                key={leader.id}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-slate-900 tracking-tight">
                        {leader.name}
                      </h3>
                      <p className="text-xs font-bold text-scholarly uppercase tracking-wider mt-0.5">
                        {leader.role}
                      </p>
                    </div>

                    {leader.imageUrl ? (
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-200 relative flex-shrink-0">
                        <Image
                          src={leader.imageUrl}
                          alt={leader.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-scholarly-pale text-scholarly flex items-center justify-center flex-shrink-0">
                        <UserCheck className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  <div className="text-xs font-medium text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200 mb-4">
                    {leader.credentials}
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                    {leader.bio}
                  </p>
                </div>

                {expertiseTags.length > 0 && (
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                    {expertiseTags.map((exp) => (
                      <span
                        key={exp}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Academic Faculty Benchmark Banner */}
        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-slate-900">100% Certified Secondary Faculty</h4>
              <p className="text-xs text-slate-600 mt-0.5 max-w-xl">
                All instructional staff hold specialized bachelor's degrees or higher in their respective academic fields, certified by the Ethiopian Ministry of Education.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-700 font-semibold flex-shrink-0">
            <div>
              <span className="text-xl font-bold font-serif text-scholarly block">1:18</span>
              <span className="text-slate-500 font-normal">Teacher-Student Ratio</span>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <span className="text-xl font-bold font-serif text-scholarly block">85%+</span>
              <span className="text-slate-500 font-normal">Hold Post-Graduate Degrees</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
