"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, Maximize2 } from "lucide-react";

interface LookbookItem {
  id: string;
  image: string;
  title: string;
  location: string;
  colSpan: string;
  heightClass: string;
}

const lookbookItems: LookbookItem[] = [
  {
    id: "look-1",
    image: "/images/airforce.jpg",
    title: "Para-Noise 1.0",
    location: "Shoes // Nike",
    colSpan: "md:col-span-2",
    heightClass: "aspect-[4/3] md:aspect-auto md:h-[450px]",
  },
  {
    id: "look-2",
    image: "/images/peace_1.jpg",
    title: "Long-Sleeve Peaceminusone X Nike",
    location: "Clothes // Nike",
    colSpan: "md:col-span-1",
    heightClass: "aspect-[3/4] md:aspect-auto md:h-[450px]",
  },
  {
    id: "look-3",
    image: "/images/peace_2.jpg",
    title: "PMO Varsity Jacket",
    location: "Varsity Jacket // Peaceminusone",
    colSpan: "md:col-span-1",
    heightClass: "aspect-[3/4] md:aspect-auto md:h-[550px]",
  },
  {
    id: "look-4",
    image: "/images/jacob_co.jpg",
    title: "Jacob&Co. X Peaceminusone",
    location: "Watch // Jacob&Co.",
    colSpan: "md:col-span-2",
    heightClass: "aspect-[4/3] md:aspect-auto md:h-[550px]",
  },
  {
    id: "look-5",
    image: "/images/peace_3.jpg",
    title: "PMO QUILTED JACKET",
    location: "Jacket // Peacminusone",
    colSpan: "md:col-span-1",
    heightClass: "aspect-[3/4] md:aspect-auto md:h-[400px]",
  },
  {
    id: "look-6",
    image: "/images/hat.jpg",
    title: "Verdy X Peaceminusone",
    location: "Hat // Verdy X PMO",
    colSpan: "md:col-span-2",
    heightClass: "aspect-[16/9] md:aspect-auto md:h-[400px]",
  },
];

export default function Lookbook() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIdx(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx + 1) % lookbookItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx - 1 + lookbookItems.length) % lookbookItems.length);
    }
  };

  return (
    <section id="lookbook" className="py-28 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-muted uppercase">
              06 // Another From Peaceminusone
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mt-2 text-foreground">
              Collection <span className="italic font-normal">Peaceminusone</span>
            </h2>
          </div>
          <p className="max-w-md text-xs font-mono text-muted-foreground uppercase tracking-wider">
            // Another From Peaceminusone          </p>
        </div>

        {/* Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lookbookItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
              onClick={() => openLightbox(idx)}
              className={`${item.colSpan} ${item.heightClass} relative bg-neutral-900 border border-border overflow-hidden cursor-pointer group shadow-lg`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-w-768px) 100vw, 400px"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-750 ease-out group-hover:scale-103"
              />
              
              {/* Dark Hover Mask overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6" />

              {/* Hover content: bottom text & top icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0 text-white">
                <Maximize2 className="w-5 h-5" />
              </div>
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[10px] group-hover:translate-y-0 text-white space-y-1">
                <span className="font-mono text-[9px] tracking-widest block opacity-70">
                  {item.location}
                </span>
                <h3 className="font-serif text-lg font-light">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Top Bar Navigation */}
            <div className="absolute top-6 left-0 w-full px-6 flex justify-between items-center text-white z-10">
              <span className="font-mono text-xs tracking-widest">
                LOOKBOOK // {lightboxIdx + 1} OF {lookbookItems.length}
              </span>
              <button
                onClick={closeLightbox}
                className="p-2 border border-white/20 rounded-full bg-black/40 hover:bg-white hover:text-black transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Slider Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-6 p-3 border border-white/20 rounded-full bg-black/40 hover:bg-white hover:text-black transition-colors text-white z-10"
              aria-label="Previous image"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-6 p-3 border border-white/20 rounded-full bg-black/40 hover:bg-white hover:text-black transition-colors text-white z-10"
              aria-label="Next image"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Central Animated Image Container */}
            <div className="relative w-full max-w-4xl aspect-[3/4] md:aspect-[16/10] bg-neutral-900 border border-white/10 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIdx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={lookbookItems[lightboxIdx].image}
                    alt={lookbookItems[lightboxIdx].title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                  
                  {/* Title labels overlay */}
                  <div className="absolute bottom-6 left-6 text-white font-mono z-10 select-none">
                    <span className="text-[10px] tracking-widest block opacity-60">
                      {lookbookItems[lightboxIdx].location}
                    </span>
                    <span className="font-serif text-lg tracking-wide block mt-1">
                      {lookbookItems[lightboxIdx].title}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
