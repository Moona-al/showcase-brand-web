"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Milestone {
  year: string;
  event: string;
  detail: string;
}

const milestones: Milestone[] = [
  {
    year: "1988",
    event: "Born in Seoul, South Korea",
    detail: "Kwon Ji-yong was born on August 18, 1988, in Gangnam, Seoul — destined to reshape Korean pop culture.",
  },
  {
    year: "2006",
    event: "Debut with BIGBANG",
    detail: "Made his global debut as a member of BIGBANG under YG Entertainment, instantly capturing international attention.",
  },
  {
    year: "2009",
    event: "Solo Artist 'G-Dragon'",
    detail: "Released his debut solo album 'Heartbreaker', selling over 100,000 copies and cementing his identity as a fashion-forward artist.",
  },
  {
    year: "2016",
    event: "Founded PEACEMINUSONE",
    detail: "Co-founded PEACEMINUSONE with Gee Eun — a fashion label born from personal artistry, rebellion, and the beauty of imperfection.",
  },
  {
    year: "2019",
    event: "Nike Collaboration Debut",
    detail: "Launched the iconic Nike Air Force 1 'Para-Noise' — a globally sold-out drop that fused K-pop culture with sneaker culture.",
  },
  {
    year: "2026",
    event: "Tigers of Asia Collection",
    detail: "Released PEACEMINUSONE x Nike 2026 in partnership with KFA, celebrating Korean football through art, streetwear, and the daisy symbol.",
  },
];

const stats = [
  { label: "Years in Industry", value: "20+" },
  { label: "Nike Collaborations", value: "3" },
  { label: "Albums Released", value: "12+" },
  { label: "Global Followers", value: "30M+" },
];

export default function Identity() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="identity"
      className="py-28 bg-card border-t border-b border-border relative overflow-hidden"
    >
      {/* Ambient background texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-muted uppercase">
              04 // PROFILE FOUNDER
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mt-2 text-foreground">
              Meet the <span className="italic font-normal">Visionary</span>
            </h2>
          </div>
          <p className="max-w-md text-xs font-mono text-muted-foreground uppercase tracking-wider">
            / THE CREATIVE MIND BEHIND PEACEMINUSONE AND ITS GLOBAL LEGACY.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Column 1: Founder Photo + Quote + Stats */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            {/* Photo Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] bg-neutral-900 border border-border overflow-hidden group"
            >
              <Image
                src="/images/profile.jpg"
                alt="G-Dragon – Founder of PEACEMINUSONE"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-serif text-2xl italic font-light text-white leading-tight">
                  G-Dragon
                </p>
                <p className="font-mono text-[10px] tracking-[0.3em] text-white/60 uppercase mt-1">
                  Kwon Ji-yong · Born 1988, Seoul
                </p>
              </div>

              {/* Top badge */}
              <div className="absolute top-4 right-4 bg-black/60 border border-white/10 backdrop-blur-sm px-3 py-1">
                <span className="font-mono text-[9px] tracking-widest text-white/70 uppercase">
                  FOUNDER / CREATIVE DIRECTOR
                </span>
              </div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-px border border-border bg-border"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card px-5 py-5 flex flex-col justify-between gap-2"
                >
                  <span className="font-serif text-3xl font-light text-foreground">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="glass p-7 border border-border/80"
            >
              <span className="text-4xl font-serif text-foreground/20 leading-none block mb-3">"</span>
              <blockquote className="font-serif text-base italic text-foreground leading-relaxed -mt-5">
                Don't be afraid. There is no right answer in fashion. Create your
                own rules and live by them.
              </blockquote>
              <div className="mt-5 border-t border-border/50 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono tracking-widest uppercase text-foreground">
                    G-Dragon
                  </p>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase">
                    Founder · PEACEMINUSONE
                  </p>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase">
                  SEOUL // 2016
                </span>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Bio + Career Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-10">

            {/* Bio Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6 border border-border/80 bg-background/50 p-8"
            >
              <h3 className="font-mono text-xs tracking-widest text-muted uppercase border-b border-border/60 pb-3">
                BIOGRAPHY
              </h3>
              <p className="text-base leading-relaxed text-muted font-sans">
                <span className="text-foreground font-semibold">Kwon Ji-yong</span>, known globally as{" "}
                <span className="italic text-foreground">G-Dragon</span>, is a South Korean rapper,
                singer-songwriter, record producer, and fashion icon. As the frontman and creative
                director of BIGBANG, he revolutionized K-pop with his genre-defying sound and
                avant-garde aesthetics.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                In October 2016, G-Dragon co-founded{" "}
                <span className="text-foreground font-mono text-xs uppercase tracking-wide">
                  PEACEMINUSONE
                </span>{" "}
                alongside designer Gee Eun — a label that blurs boundaries between streetwear, high
                fashion, and personal artistry. The brand's signature daisy motif and philosophy of
                "peace through subtraction" have shaped global sneaker and streetwear culture.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                His collaborations with Nike — the Para-Noise Air Force 1, the KWONDO silhouette,
                and the 2026 Tigers of Asia collection — stand as landmark moments where music,
                sport, and fashion converged on a global stage.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Rapper", "Producer", "Fashion Designer", "Creative Director", "Visual Artist", "Cultural Icon"].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] tracking-widest uppercase border border-border px-3 py-1 text-muted-foreground hover:border-foreground/40 hover:text-foreground transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Career Timeline */}
            <div className="border border-border/80 bg-background/50 p-8 space-y-6">
              <h3 className="font-mono text-xs tracking-widest text-muted uppercase border-b border-border/60 pb-3">
                CAREER TIMELINE
              </h3>

              <div className="relative border-l border-border pl-6 space-y-5">
                {milestones.map((milestone, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="relative cursor-pointer group"
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      {/* Timeline dot */}
                      <span
                        className={`absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border border-background transition-all duration-300 ${
                          isActive
                            ? "bg-foreground scale-125 shadow-md"
                            : "bg-border"
                        }`}
                      />

                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-mono tracking-wider font-bold text-foreground">
                            {milestone.year}
                          </span>
                          <span className="text-xs font-mono tracking-widest text-muted group-hover:text-foreground transition-colors">
                            {milestone.event}
                          </span>
                        </div>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isActive ? "auto" : 0,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs text-muted-foreground leading-relaxed mt-2 pr-4 bg-muted/10 p-3 border-l border-foreground/30">
                            {milestone.detail}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Label Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between border border-border/60 px-6 py-4 bg-background/30"
            >
              <span className="font-mono text-[9px] tracking-[0.4em] text-muted-foreground uppercase">
                PEACEMINUSONE // EST. 2016 // SEOUL, KOREA
              </span>
              <span className="font-mono text-[9px] tracking-[0.4em] text-muted-foreground uppercase">
                CREATIVE DIR. // G-DRAGON
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
