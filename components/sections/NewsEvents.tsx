"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, ChevronDown, ChevronUp, Layers } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import NewsCard from "../news/NewsCard";

export type NewsItem = {
  title: string;
  date: string;
  category: "School News" | "Events" | "Student Achievements" | "Announcements" | "Community";
  description: string;
  imageTag?: string;
  image?: string;
  link?: string;
};

const defaultItems: NewsItem[] = [
  {
    title: "Inter-School Football Championship",
    date: "August 10, 2026",
    category: "Events",
    description:
      "Our school football team took to the field in the inter-school championship, delivering an outstanding performance and bringing home a memorable result for the whole Pharo Foundation community.",
    imageTag: "Football",
    image: "/ronaldo.jpg",
    link: "#student-life",
  },
  {
    title: "Open House & Campus Tour Day",
    date: "September 20, 2026",
    category: "Events",
    description:
      "Families are invited to tour the campus, meet faculty, and experience a day in the life of our students. Registration is open — contact the admissions office to reserve your place.",
    imageTag: "Campus Visit",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80&auto=format&fit=crop",
    link: "#contact",
  },
  {
    title: "End-of-Term Celebration",
    date: "March 15, 2026",
    category: "School News",
    description:
      "A wrap-up of another outstanding term — highlights from student work, performances, sports, and community projects throughout the semester.",
    imageTag: "Term Highlights",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80&auto=format&fit=crop",
    link: "#news-events",
  },
  {
    title: "Students Recognised at Regional Competition",
    date: "February 8, 2026",
    category: "Student Achievements",
    description:
      "Pharo Foundation students earned top honours at the regional academic and creative competition, representing the school with excellence and pride.",
    imageTag: "Achievements",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=800&q=80&auto=format&fit=crop",
    link: "#news-events",
  },
  {
    title: "Enrollment Season Now Open",
    date: "January 5, 2026",
    category: "Announcements",
    description:
      "Applications for the 2026–27 academic year are now being accepted. Visit the Admissions section or contact our team to begin your family's journey.",
    imageTag: "Admissions",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80&auto=format&fit=crop",
    link: "#admissions",
  },
  {
    title: "Community Service Day",
    date: "November 22, 2025",
    category: "Community",
    description:
      "Students, teachers, and families came together for a day of community service — planting trees, supporting local charities, and giving back to the neighbourhood.",
    imageTag: "Service",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80&auto=format&fit=crop",
    link: "#news-events",
  },
  {
    title: "Performing Arts Showcase",
    date: "December 12, 2025",
    category: "Events",
    description:
      "An evening of music, theatre, and dance performed by our talented students — a celebration of creativity, hard work, and the joy of artistic expression.",
    imageTag: "Arts",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80&auto=format&fit=crop",
    link: "#news-events",
  },
];

const VISIBLE_COUNT = 6;

export default function NewsEvents() {
  const [showAll, setShowAll] = useState(false);
  const [items, setItems] = useState<NewsItem[]>(defaultItems);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news");
        const json = await res.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          const apiItems: NewsItem[] = json.data.map((item: any) => ({
            title: item.title,
            date: item.date || new Date(item.createdAt).toLocaleDateString(),
            category: item.category || "School News",
            description: item.snippet || item.content,
            imageTag: item.category,
            image: item.imageUrl || "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80&auto=format&fit=crop",
            link: "#news-events",
          }));
          setItems([...apiItems, ...defaultItems]);
        }
      } catch (err) {
        // Fall back to default items
      }
    };
    fetchNews();
  }, []);

  const visibleItems = showAll ? items : items.slice(0, VISIBLE_COUNT);
  const hiddenCount = items.length - VISIBLE_COUNT;
  const hasMore = items.length > VISIBLE_COUNT;

  return (
    <section
      id="news-events"
      className="py-section-sm md:py-section-md bg-foreground/[0.025] dark:bg-white/[0.02] relative"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10 text-left">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold-pale/70 mb-7">
                <CalendarDays className="w-4 h-4 text-gold" strokeWidth={1.8} />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold">
                  Latest Updates
                </span>
              </div>
              <SectionHeading className="text-left">News &amp; Events</SectionHeading>
              <p className="mt-6 text-muted leading-relaxed text-base md:text-lg">
                Stay connected with life at Pharo Foundation — campus events,
                announcements, student achievements, and stories from our community.
              </p>
            </div>

            {/* Hidden count badge — only shown when collapsed and there are hidden items */}
            {hasMore && !showAll && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-scholarly/20 bg-scholarly-pale/60"
              >
                <Layers className="w-4 h-4 text-scholarly" strokeWidth={1.8} />
                <span className="text-sm font-bold text-scholarly">
                  +{hiddenCount} more {hiddenCount === 1 ? "story" : "stories"} hidden
                </span>
              </motion.div>
            )}
          </div>

          {/* Grid */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {visibleItems.map((item, index) => (
              <NewsCard key={item.title} project={item} index={index} />
            ))}
          </div>

          {/* Fade + peek signal when collapsed */}
          {hasMore && !showAll && (
            <div className="relative mt-0">
              {/* Gradient fade hinting there's more below */}
              <div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-foreground/[0.025] dark:to-background/60 pointer-events-none" />
            </div>
          )}

          {/* View All / Show Less button */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-10 flex flex-col items-center gap-3"
            >
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-scholarly text-scholarly font-bold text-sm hover:bg-scholarly hover:text-white transition-all duration-200 shadow-sm hover:shadow-[0_0_24px_rgba(30,58,95,0.25)]"
              >
                {showAll ? (
                  <>
                    <ChevronUp className="w-4 h-4" strokeWidth={2.2} />
                    Show Less
                  </>
                ) : (
                  <>
                    View All {items.length} Stories
                    <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" strokeWidth={2.2} />
                  </>
                )}
              </button>
              {!showAll && (
                <p className="text-xs text-muted">
                  Showing {VISIBLE_COUNT} of {items.length} — {hiddenCount} more available
                </p>
              )}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
