"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background"
    >
      {/* Dynamic Grid Background - Technical/Streetwear Aesthetic */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Blueprint Markers */}
      <div className="absolute top-[20%] left-[5%] font-mono text-[9px] text-muted-foreground/30 hidden md:block select-none">
        [SYS_COORD_A // 45.10.92]
      </div>
      <div className="absolute bottom-[20%] right-[5%] font-mono text-[9px] text-muted-foreground/30 hidden md:block select-none">
        [SYS_COORD_B // 12.88.04]
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        {/* Editorial Text Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-[10px] font-mono tracking-[0.4em] text-muted uppercase">
              TIGER OF ASIA
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl font-light tracking-tight leading-[1.05] mb-6 text-foreground"
          >
            NIKE X KFA
            <br />
            <span className="italic font-normal">PEACEMINUSONE</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-lg text-sm md:text-base text-muted font-sans leading-relaxed mb-8"
          >
            When many gathered to beat the drum, an overwhelming wave always rose.

The Tigers of Asia by PEACEMINUSONE celebrates when ancient devotion and one of football’s most revered fandoms become ONE PULSE.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button
              onClick={() => handleScrollTo("#collections")}
              className="px-8 py-3.5 border border-foreground bg-foreground text-background font-mono text-xs tracking-widest uppercase hover:bg-transparent hover:text-foreground transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              Explore Collection
            </button>
            <button
              onClick={() => handleScrollTo("#about")}
              className="px-8 py-3.5 border border-border bg-transparent text-foreground font-mono text-xs tracking-widest uppercase hover:border-foreground transition-all duration-300 cursor-pointer"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Large Image Frame with Overlay Labels */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative w-full max-w-[400px] aspect-[3/4] bg-neutral-900 border border-border overflow-hidden shadow-2xl group"
          >
            <Image
              src="/images/hero.png"
              alt="AETHER Minimalist Streetwear Model"
              fill
              priority
              sizes="(max-w-768px) 100vw, 400px"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
            />
            {/* Dark gradient mapping overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Label in Image */}
            <div className="absolute bottom-6 left-6 text-white font-mono text-[10px] tracking-widest uppercase pointer-events-none">
              DROP_08 // CORE SILHOUETTE
            </div>
          </motion.div>

          {/* Accent Borders */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-muted-foreground/30 pointer-events-none hidden lg:block" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-muted-foreground/30 pointer-events-none hidden lg:block" />
        </div>
      </div>

      {/* Smooth scroll down indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => handleScrollTo("#about")}
      >
        <span className="text-[9px] font-mono tracking-widest text-muted-foreground uppercase">
          SCROLL TO EXPLORE
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
