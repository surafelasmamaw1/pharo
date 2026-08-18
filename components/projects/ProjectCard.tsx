"use client";

import { motion } from "framer-motion";
import { CalendarDays, ArrowRight, Tag as TagIcon } from "lucide-react";
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
  const tagStyle = categoryStyles[project.category];
  const imageStyle = categoryImageStyles[project.category];

  return (
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
        {/* Replace with next/image when real photo available */}
        <div className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.85), transparent 55%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.3), transparent 55%)",
          }}
        />
        {/* Image label + category */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3 z-10">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase ${tagStyle} shadow-sm`}
          >
            <TagIcon className="w-3 h-3" strokeWidth={2.2} />
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-foreground text-[11px] font-bold shadow-sm border border-white/60 backdrop-blur">
            <CalendarDays className="w-3.5 h-3.5 text-scholarly" strokeWidth={1.8} />
            {project.date}
          </span>
        </div>
        {/* Bottom image caption chip */}
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
          <Button
            href={project.link ?? "#news-events"}
            size="sm"
            variant="outline"
          >
            Read More <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
