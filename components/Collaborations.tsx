"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowRightLeft } from "lucide-react";

interface Collaboration {
  id: string;
  partner: string;
  year: string;
  role: string;
  description: string;
  image: string;
  concept: string;
}

const collabs: Collaboration[] = [
  {
    id: "collab-1",
    partner: "Para-Noise",
    year: "2019",
    role: "BRUTALIST ARCHITECTURE",
    description: "paranoise is a collection of shoes collaboration between Nike and Peaceminusone, style streetwear for iconic shoes AF1",
    image: "/images/paranoise.jpg",
    concept: "Para-Noise",
  },
  {
    id: "collab-2",
    partner: "Kwondo",
    year: "2022",
    role: "AEROSPACE METALLURGY",
    description: "Kwondo -1 is a collection of shoes collaboration between Nike and Peaceminusone, style streetwear for iconic shoes K-01",
    image: "/images/kwondo.jpg",
    concept: "Kwondo",
  },
  {
    id: "collab-3",
    partner: "World Cup Series",
    year: "2026",
    role: "AMBIENT SOUND LABS",
    description: "Cryoshot is a collection of shoes collaboration between Nike and Peaceminusone, style streetwear  iconic shoes CTR360",
    image: "/images/cryoshot.jpg",
    concept: "Cryoshot",
  },
];

export default function Collaborations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setScrollWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  return (
    <section id="collaborations" className="py-28 bg-background border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-muted uppercase">
              05 // SHOES COLLABORATION
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mt-2 text-foreground">
              Nike X Peaceminusone <span className="italic font-normal">Collaborations</span>
            </h2>
          </div>
          
          {/* Navigation and Interaction Guidelines */}
          <div className="flex items-center gap-4">
            <span className="hidden md:flex items-center gap-2 font-mono text-[9px] text-muted-foreground uppercase tracking-widest">
              <ArrowRightLeft className="w-3.5 h-3.5" /> DRAG OR SCRATCH TO MOVE
            </span>
            <div className="flex gap-2">
              <button
                onClick={handleScrollLeft}
                className="p-2 border border-border bg-card hover:border-foreground/50 transition-colors"
                aria-label="Scroll Left"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleScrollRight}
                className="p-2 border border-border bg-card hover:border-foreground/50 transition-colors"
                aria-label="Scroll Right"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Drag Container Track */}
        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-8 cursor-grab active:cursor-grabbing"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {collabs.map((collab, index) => (
            <motion.div
              key={collab.id}
              className="min-w-[300px] md:min-w-[450px] bg-card border border-border p-6 flex flex-col justify-between flex-shrink-0 group relative overflow-hidden"
              style={{ scrollSnapAlign: "start" }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Overlay Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 mb-6">
                <Image
                  src={collab.image}
                  alt={collab.partner}
                  fill
                  sizes="(max-w-768px) 300px, 450px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                
                {/* Meta details tag inside panel */}
                <div className="absolute top-4 left-4 font-mono text-[8px] tracking-widest text-white bg-black/60 px-2 py-0.5 backdrop-blur-sm">
                  {collab.concept}
                </div>
              </div>

              {/* Collaboration Info */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl text-foreground">
                      NIKE X {collab.partner}
                    </h3>
                    <span className="font-mono text-[9px] text-muted tracking-widest uppercase block mt-1">
                      {collab.role}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-foreground">
                    [{collab.year}]
                  </span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {collab.description}
                </p>

                <div className="border-t border-border/40 pt-4 flex justify-between items-center text-[9px] font-mono text-muted">
                  <span>PROJECT // COLLAB-{index + 1}</span>
                  <span className="group-hover:text-foreground transition-colors uppercase">
                    VIEW REPORT
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
