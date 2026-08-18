"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  category: "Campus" | "Classrooms" | "Students" | "Events" | "Sports" | "Library";
};

const galleryItems: GalleryItem[] = [
  { id: 1, src: "/pharo-school.png",  alt: "Pharo School Assosa campus",  category: "Campus" },
  { id: 2, src: "/about-photo.png",   alt: "Students at Pharo School",     category: "Students" },
  { id: 3, src: "/classrooms.png",    alt: "Pharo School classrooms",      category: "Classrooms" },
  { id: 4, src: "/library.png",       alt: "Pharo School library",         category: "Library" },
  { id: 5, src: "/computer-labs.png", alt: "Computer labs",                category: "Classrooms" },
  { id: 6, src: "/ronaldo.jpg",       alt: "Football championship",        category: "Sports" },
];

const categories = ["All", "Campus", "Students", "Classrooms", "Library", "Sports", "Events"] as const;
type Category = typeof categories[number];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((i) => i.category === activeCategory);

  const currentIdx = lightbox !== null ? filtered.findIndex((i) => i.id === lightbox) : -1;
  const currentItem = currentIdx >= 0 ? filtered[currentIdx] : null;

  const prev = () => setLightbox(filtered[currentIdx > 0 ? currentIdx - 1 : filtered.length - 1].id);
  const next = () => setLightbox(filtered[currentIdx < filtered.length - 1 ? currentIdx + 1 : 0].id);

  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground min-h-screen">

        {/* Minimal header */}
        <div className="pt-28 pb-8 border-b border-border/50">
          <Container>
            <div className="flex items-center justify-between gap-6">
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-scholarly hover:gap-3 transition-all group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
                Back to Home
              </Link>
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Gallery</h1>
              <span className="text-sm text-muted">{filtered.length} photos</span>
            </div>
          </Container>
        </div>

        <Container>
          <div className="py-8 md:py-10">

            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => {
                const count = cat === "All" ? galleryItems.length : galleryItems.filter(i => i.category === cat).length;
                if (cat !== "All" && count === 0) return null;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-scholarly text-white border-scholarly shadow-md"
                        : "border-border text-muted hover:text-foreground hover:border-scholarly/40"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Pure image grid — no text */}
            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              <AnimatePresence mode="popLayout">
                {filtered.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setLightbox(item.id)}
                    className="group relative aspect-square rounded-[14px] overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </Container>
      </main>

      {/* Lightbox — image only, no text */}
      <AnimatePresence>
        {lightbox !== null && currentItem && (
          <>
            <motion.div
              key="lb-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95"
              onClick={() => setLightbox(null)}
            />
            <motion.div
              key="lb-content"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="relative pointer-events-auto max-w-5xl w-full">
                {/* Close */}
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" strokeWidth={2} />
                </button>

                {/* Image only */}
                <img
                  src={currentItem.src}
                  alt={currentItem.alt}
                  className="w-full max-h-[85vh] object-contain rounded-[16px]"
                />

                {/* Counter */}
                <p className="text-white/40 text-xs text-center mt-3">{currentIdx + 1} / {filtered.length}</p>

                {/* Prev / Next */}
                {filtered.length > 1 && (
                  <>
                    <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/25 transition-colors">
                      <ChevronLeft className="w-5 h-5" strokeWidth={2} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/25 transition-colors">
                      <ChevronRight className="w-5 h-5" strokeWidth={2} />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
