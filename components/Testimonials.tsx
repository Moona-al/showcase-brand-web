"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PhotoCard {
  src: string;
  alt: string;
  label: string;
  year: string;
}

const photos: PhotoCard[] = [
  { src: "/images/cryoshot.jpg",       alt: "G-Dragon Campaign 2026",      label: "Cryoshot",   year: "2026" },
  { src: "/images/outwear_1.jpg",   alt: "G-Dragon Campaign 2026",        label: "Apparel",      year: "2026" },
  { src: "/images/kwondo.jpg",            alt: "Nike Kwondo",     label: "Kwondo 2.0",       year: "2022" },
  { src: "/images/paranoise.jpg",      alt: "Nike Paranoise",       label: "Para-Noise 1.0",     year: "2019" },
  { src: "/images/peace_1.jpg",      alt: "Lookbook Editorial Two",       label: "Apparel",     year: "2026" },
  { src: "/images/peace_3.jpg",      alt: "Collection Detail Shot",       label: "Apparel",      year: "2025" },
  { src: "/images/baju_1.jpg",   alt: "Collection Boot",              label: "Apparel",    year: "2025" },
  { src: "/images/peace_2.jpg", alt: "Collection Hoodie",            label: "Apparel",     year: "2025" },
];

// Duplicate for seamless loop
const loopPhotos = [...photos, ...photos];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 bg-background border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-muted uppercase">
              08 // GALLERY
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mt-2 text-foreground">
              Campaign <span className="italic font-normal">Gallery</span>
            </h2>
          </div>
          <p className="max-w-md text-xs font-mono text-muted-foreground uppercase tracking-wider">
            / VISUAL ARCHIVE FROM PEACEMINUSONE × NIKE CAMPAIGNS.
          </p>
        </div>
      </div>

      {/* ── Auto-loop marquee strip ── */}
      <div className="relative w-full">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
          {loopPhotos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % photos.length) * 0.06 }}
              className="group relative shrink-0 w-[240px] md:w-[280px] aspect-[3/4] overflow-hidden border border-border/60 bg-neutral-950 hover:border-foreground/40 transition-all duration-500"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="280px"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:from-black/50 transition-all duration-500" />

              {/* Year top-right */}
              <span className="absolute top-3 right-3 font-mono text-[8px] text-white/40 tracking-widest">
                {photo.year}
              </span>

              {/* Label bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-white/80">
                  {photo.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border border-border/60 px-6 py-4 bg-card/30"
        >
          <span className="font-mono text-[9px] tracking-[0.4em] text-muted-foreground uppercase">
            PEACEMINUSONE // VISUAL ARCHIVE
          </span>
          <span className="font-mono text-[9px] tracking-[0.4em] text-muted-foreground uppercase">
            2019 — 2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}
