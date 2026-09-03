"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Images, ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

type PhotoItem = {
  src: string;
  alt: string;
  category: string;
};

const defaultPreviewPhotos: PhotoItem[] = [
  { src: "/pharo-school.png",   alt: "Pharo School campus",   category: "Campus" },
  { src: "/about-photo.png",    alt: "Students",               category: "Students" },
  { src: "/classrooms.png",     alt: "Classrooms",             category: "Classrooms" },
  { src: "/library.png",        alt: "Library",                category: "Library" },
  { src: "/computer-labs.png",  alt: "Computer labs",          category: "Technology" },
  { src: "/ronaldo.jpg",        alt: "Football event",         category: "Sports" },
];

export default function Gallery() {
  const [photos, setPhotos] = useState<PhotoItem[]>(defaultPreviewPhotos);

  useEffect(() => {
    async function loadGallery() {
      try {
        const res = await fetch("/api/gallery");
        const json = await res.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          const apiPhotos: PhotoItem[] = json.data.map((item: any) => ({
            src: item.imageUrl,
            alt: item.title,
            category: item.category,
          }));
          setPhotos([...apiPhotos, ...defaultPreviewPhotos]);
        }
      } catch (e) {
        // fallback
      }
    }
    loadGallery();
  }, []);
  return (
    <section id="gallery" className="py-section-sm md:py-section-md relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-scholarly/15 bg-scholarly-pale/70 mb-6">
                <Images className="w-4 h-4 text-scholarly" strokeWidth={1.8} />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-scholarly">Gallery</span>
              </div>
              <SectionHeading className="text-left">Life at Pharo School</SectionHeading>
              <p className="mt-4 text-muted leading-relaxed text-base md:text-lg">
                A glimpse into our campus, classrooms, students, and events.
              </p>
            </div>
            <Link
              href="/gallery"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-scholarly text-white font-bold text-sm hover:bg-scholarly-light transition-all duration-200 shadow-sm hover:shadow-[0_0_24px_rgba(30,58,95,0.3)] group"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </Link>
          </div>

          {/* Photo grid preview */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {photos.map((photo, idx) => (
              <motion.div
                key={`${photo.src}-${idx}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative aspect-[4/3] rounded-[16px] overflow-hidden border border-border shadow-sm cursor-pointer hover:shadow-[0_0_24px_rgba(30,58,95,0.18)] transition-all duration-300"
              >
                <Link href="/gallery">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-scholarly text-white text-[10px] font-bold tracking-[0.15em] uppercase shadow-sm">
                      {photo.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center">
                      <Images className="w-4 h-4 text-white" strokeWidth={1.8} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex items-center justify-center"
          >
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-scholarly dark:text-scholarly-light hover:gap-3 transition-all"
            >
              See all {photos.length}+ photos in the gallery
              <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
            </Link>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}
