"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2019",
    title: "Nike Air Force 1 'Para-Noise'",
    description: "The first collaboration between PEACEMINUSONE and Nike. Featuring a black Air Force 1 with a unique wear-away paint layer that reveals hidden artwork created by G-Dragon as the shoe is worn. The iconic PEACEMINUSONE daisy logo was introduced, making it an instant cultural phenomenon.",
  },
  {
    year: "2021-2023",
    title: "Nike 'KWONDO'",
    description: "A completely new silhouette designed in collaboration with G-Dragon. The name 'kwondo' Kwon (G-Dragon's surname), Taekwondo, and Nike's philosophy. The shoe blends elements of dress shoes, golf footwear, and sneakers into a unique fashion statement.",
  },
  {
    year: "2026",
    title: "PEACEMINUSONE x Nike 2026: Tigers of Asia",
    description: "Celebrating the spirit of Korean football and creative expression, the 2026 PEACEMINUSONE x Nike collection reimagines national team heritage through G-Dragon's artistic vision. Featuring the Cryoshot CTR360 and a full range of apparel, the collection blends football culture, streetwear aesthetics, and the iconic daisy symbol into a bold statement for a new generation.",
  },

];

export default function About() {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  return (
    <section id="about" className="py-28 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-muted uppercase">
              01 // ABOUT A COLLAB
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mt-2 text-foreground">
              Story of <span className="italic font-normal">PEACEMINUSONE</span>
            </h2>
          </div>
          <p className="max-w-md text-xs font-mono text-muted-foreground uppercase tracking-wider">
            / AN ARCHITECTURAL INQUIRY INTO MODERN APPAREL DEVELOPMENT.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Column 1: Brand Story & Mission */}
          <div className="lg:col-span-6 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-base leading-relaxed text-muted font-sans">
                Peaceminusone (stylized as PEACEMINUSONE) is a Korean fashion line founded by G-Dragon and Gee Eun in October 2016. The label produces clothing items such as jackets, tops, hats and shoes, as well as accessories and headphones
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                PEACEMINUSONE x Nike is one of the most influential collaborations, bridging K-pop culture with the global sneaker scene.
              </p>
            </motion.div>

            {/* Vision & Mission Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-b border-border py-8">
              <div>
                <h4 className="text-xs font-mono tracking-widest uppercase text-foreground mb-3">
                  OUR MISSION
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  "Redefining fashion through creativity, individuality, and the beauty of imperfection."
                </p>
              </div>
              <div>
                <h4 className="text-xs font-mono tracking-widest uppercase text-foreground mb-3">
                  OUR VISION
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                 "To merge art, culture, and streetwear into unique experiences that inspire self-expression worldwide."
                </p>
              </div>
            </div>

            {/* Founder Message Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass p-8 border border-border/80 flex flex-col justify-between"
            >
              <blockquote className="font-serif text-lg italic text-foreground leading-relaxed mb-6">
                "Don't be afraid. There is no right answer in fashion."
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono tracking-widest uppercase text-foreground">
                    G-DRAGON
                  </p>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase">
                    Founder / Creative Director
                  </p>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase">
                  PEACEMINUSONE // SEOUL
                </span>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Image and Journey Timeline */}
          <div className="lg:col-span-6 space-y-12">
            {/* Editorial Image */}
            <div className="relative aspect-[16/10] bg-neutral-900 border border-border overflow-hidden group">
              <Image
                src="/images/about.jpg"
                alt="Aether Premium Fabric Detail"
                fill
                sizes="(max-w-768px) 100vw, 600px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
              <div className="absolute bottom-4 right-4 font-mono text-[9px] text-white tracking-widest bg-black/60 px-3 py-1 backdrop-blur-sm">
                NIKE X PEACEMINUSONE X KFA 
              </div>
            </div>

            {/* Timeline Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-mono tracking-widest uppercase text-foreground mb-4">
                  HISTORY COLLABORATIONS
                </h3>
                <p className="text-xs text-muted-foreground mb-6">
                  NIKE X PEACEMINUSONE
                </p>
              </div>

              {/* Vertical Timeline Items */}
              <div className="relative border-l border-border pl-6 space-y-6">
                {timelineEvents.map((event, index) => {
                  const isHovered = activeEvent === index;
                  return (
                    <div
                      key={event.year}
                      className="relative cursor-pointer group"
                      onMouseEnter={() => setActiveEvent(index)}
                      onMouseLeave={() => setActiveEvent(null)}
                    >
                      {/* Timeline Dot Indicator */}
                      <span
                        className={`absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border border-background transition-all duration-300 ${
                          isHovered
                            ? "bg-foreground scale-125 shadow-md"
                            : "bg-border"
                        }`}
                      />

                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-mono tracking-wider font-bold text-foreground">
                            {event.year}
                          </span>
                          <span className="text-xs font-mono tracking-widest text-muted group-hover:text-foreground transition-colors">
                            {event.title}
                          </span>
                        </div>
                        {/* Smooth reveal animation for timeline card detail */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: isHovered ? "auto" : 0,
                            opacity: isHovered ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs text-muted-foreground leading-relaxed mt-2 pr-4 bg-muted/10 p-3 border-l border-foreground/30">
                            {event.description}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
