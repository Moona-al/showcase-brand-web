"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Layers, Star, Wind } from "lucide-react";

interface SpecTab {
  title: string;
  value: string;
}

const specTabs: Record<string, SpecTab[]> = {
  UPPER: [
    { title: "Material", value: "Premium Crinkled Leather + Breathable Mesh Overlay" },
    { title: "Colorway", value: "Phantom / Team Red / Gum Yellow" },
    { title: "Signature Detail", value: "Embossed PEACEMINUSONE Daisy on Lateral Panel" },
  ],
  SOLE: [
    { title: "Midsole", value: "Nike React Foam — Lightweight Cushioning System" },
    { title: "Outsole", value: "Translucent Gum Rubber with Pivot Points" },
    { title: "Drop Height", value: "6mm Heel-to-Toe Offset" },
  ],
  DETAILS: [
    { title: "Lacing", value: "Flat Daisy-Print Laces + Lace Lock System" },
    { title: "Collar", value: "Padded Low-Cut Ankle with Floral Liner" },
    { title: "Insole", value: "Removable OrthoLite® Sockliner" },
  ],
};

const features = [
  {
    icon: <Star className="w-5 h-5" />,
    title: "Daisy Signature",
    desc: "The iconic PEACEMINUSONE daisy motif is embossed on the lateral panel — a symbol of peace, imperfection, and artistic identity.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "React Cushioning",
    desc: "Nike React foam delivers a smooth, responsive ride — engineered for all-day comfort without sacrificing street-ready aesthetics.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Crinkle Leather Build",
    desc: "The distressed crinkled leather upper is intentionally aged — a deliberate design choice echoing the brand's 'beauty of imperfection' philosophy.",
  },
  {
    icon: <Wind className="w-5 h-5" />,
    title: "Gum Translucent Sole",
    desc: "The icy gum outsole adds dimension and lightness while contrasting the deep red Swoosh and Nike crew sock colorway.",
  },
];

const colorways = [
  { name: "Phantom / Team Red", active: true },
  { name: "Triple Black", active: false },
  { name: "Sail / Daisy Yellow", active: false },
];

export default function Signature() {
  const [activeTab, setActiveTab] = useState<keyof typeof specTabs>("UPPER");
  const [activeColor, setActiveColor] = useState(0);

  return (
    <section id="signature" className="py-28 bg-background relative overflow-hidden">
      {/* Subtle ambient grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:60px_60px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-muted uppercase">
              03 // SIGNATURE SHOE PROFILE
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mt-2 text-foreground">
              Nike <span className="italic font-normal">Cryoshot</span>
            </h2>
          </div>
          <p className="max-w-md text-xs font-mono text-muted-foreground uppercase tracking-wider">
            / THE LATEST SIGNATURE SILHOUETTE FROM PEACEMINUSONE x NIKE.
          </p>
        </div>

        {/* Main 2-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT: Hero Photo */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full bg-neutral-950 border border-border overflow-hidden group"
            >
              <Image
                src="/images/sepatu.jpg"
                alt="Nike Cryoshot CTR360 x PEACEMINUSONE"
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Top-left label */}
              <div className="absolute top-4 left-4 bg-black/70 border border-white/10 backdrop-blur-sm px-3 py-1.5">
                <span className="font-mono text-[9px] tracking-[0.35em] text-white/80 uppercase">
                  PEACEMINUSONE × NIKE
                </span>
              </div>

              {/* Bottom info bar */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 flex justify-between items-end">
                <div>
                  <p className="font-serif text-xl italic font-light text-white">
                    Cryoshot CTR360
                  </p>
                  <p className="font-mono text-[10px] tracking-widest text-white/50 uppercase mt-0.5">
                    Phantom · Team Red · Gum
                  </p>
                </div>
                <span className="font-mono text-[9px] text-white/40 tracking-widest uppercase">
                  REF: PMO-CTR-2026
                </span>
              </div>
            </motion.div>

            {/* Colorway Selector */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-border/80 bg-card/40 p-5 space-y-3"
            >
              <h4 className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground">
                AVAILABLE COLORWAYS
              </h4>
              <div className="flex flex-wrap gap-3">
                {colorways.map((cw, i) => (
                  <button
                    key={cw.name}
                    onClick={() => setActiveColor(i)}
                    className={`font-mono text-[10px] tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
                      activeColor === i
                        ? "border-foreground text-foreground bg-foreground/5"
                        : "border-border text-muted-foreground hover:border-muted-foreground/50"
                    }`}
                  >
                    {cw.name}
                    {i > 0 && (
                      <span className="ml-2 text-[8px] opacity-50">
                        COMING SOON
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Info, Features, Specs */}
          <div className="lg:col-span-6 flex flex-col gap-10">

            {/* Title + Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="space-y-5"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground bg-border/40 px-3 py-1 uppercase">
                  2026 DROP // LIMITED RELEASE
                </span>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-tight">
                Nike Cryoshot CTR360<br />
                <span className="italic text-2xl font-normal text-muted-foreground">
                  × PEACEMINUSONE
                </span>
              </h3>

              <p className="text-sm leading-relaxed text-muted font-sans">
                The <span className="text-foreground font-semibold">Nike Cryoshot CTR360</span> is the latest
                signature silhouette born from the creative vision of G-Dragon and PEACEMINUSONE. Built on
                a low-profile court base, the shoe fuses distressed premium leather with a translucent gum
                outsole — finished with the brand's signature daisy symbol and the deep red Nike Swoosh that
                mirrors the crew sock colorway.
              </p>

              <p className="text-xs leading-relaxed text-muted-foreground">
                Daisy flowers blooming from the sole. Art meeting sport. A statement piece for a new generation —
                where streetwear, K-culture, and football aesthetics converge into a single silhouette.
              </p>
            </motion.div>

            {/* Feature Highlights */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono tracking-widest uppercase text-foreground border-b border-border pb-3">
                KEY FEATURES
              </h4>
              <div className="space-y-3">
                {features.map((f, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.07 }}
                    className="flex gap-4 items-start p-4 border border-border/60 bg-card/40 hover:bg-card/70 transition-colors duration-300"
                  >
                    <div className="p-2 border border-border/80 bg-background text-foreground shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                        {f.title}
                      </h5>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Spec Tabs */}
            <div className="space-y-4 border-t border-border pt-6">
              <div className="flex gap-6 border-b border-border/60 pb-2">
                {(Object.keys(specTabs) as Array<keyof typeof specTabs>).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`font-mono text-[10px] tracking-widest uppercase pb-1 relative transition-colors ${
                      activeTab === tab
                        ? "text-foreground font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.span
                        layoutId="specTabLine"
                        className="absolute bottom-[-9px] left-0 w-full h-[1.5px] bg-foreground"
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="min-h-[130px] py-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {specTabs[activeTab].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-start border-b border-border/40 pb-3 text-xs gap-4"
                      >
                        <span className="font-mono text-muted uppercase shrink-0">
                          {item.title}
                        </span>
                        <span className="font-sans text-foreground text-right">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between border border-border/60 px-6 py-4 bg-background/30"
            >
              <span className="font-mono text-[9px] tracking-[0.4em] text-muted-foreground uppercase">
                PEACEMINUSONE // NIKE // 2026
              </span>
              <span className="font-mono text-[9px] tracking-[0.4em] text-muted-foreground uppercase">
                CTR360 // CRYOSHOT
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
