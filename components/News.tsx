"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CampaignCard {
  id: string;
  tag: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const campaigns: CampaignCard[] = [
  {
    id: "camp-1",
    tag: "Paranoise",
    year: "2019",
    title: "Para-Noise",
    subtitle: "Paranoise Exhibition",
    description:
      "Fashion icon, K-pop sensation and creative director—what can't G-Dragon do? Back again for another Nike collab, G-Dragon's PEACEMINUSONE label puts an artistic twist on the classic Air Force 1. This special-edition design comes dressed in supple black leather with pops of colour throughout, including differing Swoosh logos in New Emerald, Tour Yellow, Pinkfire and Blue Gale. G-Dragon adds a personal touch with his own artwork hidden beneath the wear-away upper, along with his famed daisy image on the tongue, hangtag and lace tips. Wrapped in special packaging, it comes complete with 2 sets of laces and collector pins so you can make it your own.",
    image: "/images/campaign_2.jpg",
  },
  {
    id: "camp-2",
    tag: "Kwondo",
    year: "2021",
    title: "KWONDO",
    subtitle: "Kwondo Exhibition",
    description:
      "Visionary artist G-Dragon delivers his signature style once again, this time in black and white. The Nike Kwondo 1 is a masterclass in contrast, harnessing a classic dress shoe aesthetic for the streets. The crafted wingtip upper sports intricate brogue detailing and a removable lace shroud. Embroidered daisies decorate the heel and signature branding pushes the look one step further.",
    image: "/images/campaign_1.jpg",
  },
  {
    id: "camp-3",
    tag: "Cryoshot",
    year: "2019",
    title: "World Cup Series",
    subtitle: "KFA World Cup Exhibition",
    description:
      "The Tigers of Asia by PEACEMINUSONE celebrates when ancient devotion and one of football’s most revered fandoms become ONE PULSE.",
    image: "/images/campaign_3.jpg",
  },
];

export default function News() {
  return (
    <section id="news" className="py-28 bg-card border-t border-b border-border relative overflow-hidden">
      {/* Ambient grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-muted uppercase">
              07 // CAMPAIGN
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mt-2 text-foreground">
              Shoes <span className="italic font-normal">Campaign</span>
            </h2>
          </div>
          <p className="max-w-md text-xs font-mono text-muted-foreground uppercase tracking-wider">
            / OFFICIAL VISUAL CAMPAIGNS FROM PEACEMINUSONE × NIKE.
          </p>
        </div>

        {/* 3 Campaign Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {campaigns.map((camp, idx) => (
            <motion.article
              key={camp.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
              className="group flex flex-col border border-border/80 bg-background/50 hover:border-foreground/40 transition-all duration-500 overflow-hidden"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-950">
                <Image
                  src={camp.image}
                  alt={camp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20 group-hover:from-black/50 transition-all duration-500" />

                {/* Top badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="font-mono text-[8px] tracking-[0.3em] uppercase bg-black/70 border border-white/10 backdrop-blur-sm px-2.5 py-1 text-white/80">
                    {camp.tag}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="font-mono text-[9px] text-white/40 tracking-widest">
                    {camp.year}
                  </span>
                </div>

                {/* Title overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-mono text-[8px] tracking-[0.3em] text-white/50 uppercase mb-1">
                    {camp.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl italic font-light text-white leading-tight">
                    {camp.title}
                  </h3>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {camp.description}
                </p>

                <div className="flex items-center justify-between border-t border-border/40 pt-4">
                  <span className="font-mono text-[9px] tracking-widest text-muted uppercase">
                    {camp.year}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex items-center justify-between border border-border/60 px-6 py-4 bg-background/30"
        >
          <span className="font-mono text-[9px] tracking-[0.4em] text-muted-foreground uppercase">
            PEACEMINUSONE // NIKE // OFFICIAL CAMPAIGNS
          </span>
          <span className="font-mono text-[9px] tracking-[0.4em] text-muted-foreground uppercase">
            2019 — 2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}
