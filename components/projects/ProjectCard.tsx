"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CalendarDays, ArrowRight, Tag as TagIcon, X } from "lucide-react";
import Button from "../ui/Button";
import type { NewsItem } from "../sections/Projects";

const categoryStyles: Record<NewsItem["category"], string> = {
  "School News": "bg-scholarly text-white",
  Events: "bg-gold text-white",
  "Student Achievements": "bg-success text-white",
  Announcements: "bg-scholarly-light text-white",
  Community: "bg-accent text-white",
};

const categoryImageStyles: Record<NewsItem["category"], string> = {
  "School News":
    "from-scholarly via-scholarly-light to-scholarly-pale dark:from-scholarly dark:via-scholarly-light dark:to-scholarly-pale",
  Events:
    "from-gold via-accent to-gold-pale dark:from-gold dark:via-accent dark:to-amber-950",
  "Student Achievements":
    "from-success via-emerald-500 to-emerald-200 dark:from-success dark:via-emerald-700 dark:to-emerald-950",
  Announcements:
    "from-scholarly-light via-blue-600 to-sky-300 dark:from-scholarly-light dark:via-blue-700 dark:to-blue-950",
  Community:
    "from-accent via-orange-500 to-amber-200 dark:from-accent dark:via-orange-700 dark:to-amber-950",
};

export default function ProjectCard({
  project,
  index,
}: {
  project: NewsItem;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const tagStyle = categoryStyles[project.category];
  const imageStyle = categoryImageStyles[project.category];

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: index * 0.07 }}
        whileHover={{ y: -7, scale: 1.018 }}
        className="group flex flex-col h-full rounded-[24px] overflow-hidden border border-border bg-background shadow-sm transition-all duration-300 hover:shadow-[0_0_32px_rgba(30,58,95,0.18)] dark:hover:bg-white/5 dark:hover:border-scholarly/40"
      >
        {/* Image / date / category area */}
        <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${imageStyle}`}>
          {/* Real photo if available */}
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          )}
          {/* Overlay — always present to ensure text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/50" />
          <div
            className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.85), transparent 55%)",
            }}
          />
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3 z-10">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase ${tagStyle} shadow-sm`}
            >
              <TagIcon className="w-3 h-3" strokeWidth={2.2} />
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-scholarly text-[11px] font-extrabold shadow-lg border-2 border-scholarly/20 whitespace-nowrap">
              <CalendarDays className="w-3.5 h-3.5 text-scholarly flex-shrink-0" strokeWidth={2} />
              {project.date}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur text-white text-[10px] font-bold tracking-[0.18em] uppercase border border-white/20">
              {project.imageTag ?? "News"}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-6 md:p-7">
          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 leading-snug group-hover:text-scholarly transition-colors">
            {project.title}
          </h3>
          <p className="text-muted leading-relaxed text-sm md:text-base mb-6 flex-1">
            {project.description}
          </p>
          <div className="mt-auto">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-semibold text-foreground hover:bg-scholarly hover:text-white hover:border-scholarly transition-all duration-200 group/btn"
            >
              Read More
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" strokeWidth={2} />
            </button>
          </div>
        </div>
      </motion.article>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal panel */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 pointer-events-none"
            >
              <div className="relative w-full max-w-3xl bg-background rounded-[28px] border border-border shadow-2xl overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col">
                {/* Modal image header */}
                <div className={`relative aspect-[16/9] bg-gradient-to-br ${imageStyle} flex-shrink-0`}>
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 600px"
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
                  <div
                    className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.85), transparent 55%)",
                    }}
                  />
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase ${tagStyle} shadow-sm`}>
                      <TagIcon className="w-3 h-3" strokeWidth={2.2} />
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-foreground text-[11px] font-bold shadow-md border border-white/80 whitespace-nowrap">
                      <CalendarDays className="w-3.5 h-3.5 text-scholarly flex-shrink-0" strokeWidth={1.8} />
                      {project.date}
                    </span>
                  </div>
                  {/* Close button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white hover:bg-white/35 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" strokeWidth={2} />
                  </button>
                </div>

                {/* Modal body */}
                <div className="p-8 md:p-10 overflow-y-auto">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-muted leading-relaxed text-base md:text-lg">
                    {project.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between gap-4">
                    <span className="text-xs text-muted font-medium">
                      {project.imageTag ?? "News"} · {project.date}
                    </span>
                    <Button
                      href={project.link ?? "#news-events"}
                      size="sm"
                      variant="secondary"
                      onClick={() => setIsOpen(false)}
                    >
                      Go to Section <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
