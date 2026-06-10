"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

/* ── SVG Icons ── */
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.8"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="w-8 h-8"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M2 12h20" />
  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
</svg>
);

interface ArticleLink {
  label: string;
  title: string;
  source: string;
  date: string;
  url: string;
  tag: string;
}

const articles: ArticleLink[] = [
  {
    label: "01",
    title: "G-Dragon x Nike 2026: Tigers of Asia Full Campaign Review",
    source: "Nike.com",
    date: " 2026",
    url: "https://www.nike.com/id/launch/t/south-korea-peaceminusone-collection-static",
    tag: "SNKRS ",
  },
  {
    label: "02",
    title: "Paranoise On Marketplace",
    source: "Kick Avenue",
    date: " 2026",
    url: "https://kickavenue.com/sneakers/nike/nike-air-force-1-low-g-dragon-peaceminusone-para-noise-20-dd3223-100-ka/15031?from=search&gad_source=1&gad_campaignid=16168490804&gbraid=0AAAAABdsbzBV-QpV4VVAvUCi0f48y-JEV&gclid=Cj0KCQjwlqTRBhCBARIsANrkrxg4Gx0wQ5qX9G3tSN8m2heXoEvxEgwfWCWwbyp3MaPkW7EWbm75q0AaAqx6EALw_wcB",
    tag: "Marketplace",
  },
  {
    label: "03",
    title: "Kolaborasi G-DRAGON PEACEMINUSONE x Nike Rilis Koleksi Piala Dunia 'Tigers of Asia'",
    source: "HyperBeast",
    date: "OCT 2026",
    url: "https://hypebeast.com/id/2026/5/g-dragon-peaceminus-one-nike-cryoshot-2026-fifa-world-cup-korea-national-team-kits-collaboration-campaign-release-info",
    tag: "ARTICLE",
  },
  {
    label: "04",
    title: "Kwondo On Marketplace",
    source: "Kick Avenue",
    date: "2026",
    url: "https://kickavenue.com/sneakers/nike/nike-kwondo-1-g-dragon-peaceminusone-panda-dh2482-101-ka/58594?from=search",
    tag: "Marketplace",
  },
];

const handleScrollToTop = (e: React.MouseEvent) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Contact() {
  return (
    <section id="contact" className="pt-28 pb-12 bg-card border-t border-border relative overflow-hidden">
      {/* Ambient grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-muted uppercase">
              09 // Social Media
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mt-2 text-foreground">
            Gei in Touch On <span className="italic font-normal">Social Media</span>
            </h2>
          </div>
          <p className="max-w-md text-xs font-mono text-muted-foreground uppercase tracking-wider">
            / For more Informationx 
          </p>
        </div>

        {/* ── Social Cards Row ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/peaceminusonedotcom?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="group relative border border-border bg-background/60 p-10 flex flex-col justify-between overflow-hidden min-h-[280px] hover:border-foreground/40 transition-all duration-500"
          >
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex justify-between items-start">
              <div className="p-3 border border-border/60 bg-card text-foreground group-hover:border-foreground/30 transition-colors duration-300">
                <InstagramIcon />
              </div>
              <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                <span className="font-mono text-[9px] tracking-widest uppercase">FOLLOW</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="relative z-10 space-y-2 mt-8">
              <span className="font-serif text-5xl font-light text-foreground block">1,1M</span>
              <p className="font-mono text-xs tracking-widest uppercase text-foreground font-bold">Instagram</p>
              <p className="font-mono text-[10px] tracking-wider text-muted-foreground">@peaceminusonedotcom</p>
              <p className="text-xs text-muted leading-relaxed pt-1 max-w-xs">
                Life, art, fashion 
              </p>
            </div>
          </motion.a>

          {/* YouTube */}
          <motion.a
            href="https://share.google/g2dWuYSNoKJ2Zhi7w"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative border border-border bg-background/60 p-10 flex flex-col justify-between overflow-hidden min-h-[280px] hover:border-foreground/40 transition-all duration-500"
          >
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-red-800/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex justify-between items-start">
              <div className="p-3 border border-border/60 bg-card text-foreground group-hover:border-foreground/30 transition-colors duration-300">
                <YouTubeIcon />
              </div>
              <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                <span className="font-mono text-[9px] tracking-widest uppercase">Direct link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="relative z-10 space-y-2 mt-8">
              <span className="font-serif text-5xl font-light text-foreground block">Website</span>
              <p className="font-mono text-xs tracking-widest uppercase text-foreground font-bold">www.peaceminusone.com</p>
              <p className="font-mono text-[10px] tracking-wider text-muted-foreground">Official Website</p>
              <p className="text-xs text-muted leading-relaxed pt-1 max-w-xs">
                Music videos, mini-docs, and exclusive PEACEMINUSONE x Nike campaign films.
              </p>
            </div>
          </motion.a>
        </div>

        {/* ── Article Link Cards ── */}
        <div className="space-y-0 mb-16 border border-border divide-y divide-border">

          {/* Header label */}
          <div className="px-6 py-4 bg-card/30 flex items-center justify-between">
            <span className="font-mono text-[9px] tracking-[0.4em] text-muted-foreground uppercase">
              READ MORE
            </span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground uppercase">
              DIRECT LINKS
            </span>
          </div>

          {articles.map((article, idx) => (
            <motion.a
              key={article.label}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group flex items-center gap-6 px-6 py-5 bg-background/40 hover:bg-card/60 transition-all duration-300"
            >
              {/* Number */}
              <span className="font-mono text-xs text-muted-foreground shrink-0 w-6">
                {article.label}
              </span>

              {/* Tag badge */}
              <span className="hidden sm:block font-mono text-[8px] tracking-widest uppercase border border-border px-2.5 py-1 text-muted-foreground shrink-0 group-hover:border-foreground/30 group-hover:text-foreground transition-colors duration-300">
                {article.tag}
              </span>

              {/* Title */}
              <p className="flex-1 font-sans text-sm text-muted group-hover:text-foreground transition-colors duration-300 leading-snug">
                {article.title}
              </p>

              {/* Source + Date */}
              <div className="hidden md:flex flex-col items-end shrink-0 gap-0.5">
                <span className="font-mono text-[9px] tracking-widest uppercase text-foreground">
                  {article.source}
                </span>
                <span className="font-mono text-[8px] text-muted-foreground uppercase">
                  {article.date}
                </span>
              </div>

              {/* Arrow */}
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
            </motion.a>
          ))}
        </div>

        {/* Quote Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-10 flex flex-col md:flex-row items-center justify-center gap-4 border-b border-border text-center mb-10"
        >
          <span className="font-mono text-[9px] tracking-[0.5em] text-muted-foreground uppercase">✿ — KWON JI-YONG</span>
          <span className="font-serif text-lg italic font-light text-foreground">
            "Don't be afraid. There is no right answer in fashion."
          </span>
          <span className="font-mono text-[9px] tracking-[0.5em] text-muted-foreground uppercase">G-DRAGON — ✿</span>
        </motion.div>

        {/* Footer Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#hero"
            onClick={handleScrollToTop}
            className="font-serif text-xl tracking-[0.2em] font-semibold text-foreground hover:opacity-70 transition-opacity"
          >
            PEACEMINUSONE
          </a>
          <div className="flex flex-wrap justify-center gap-8 font-mono text-[9px] tracking-widest text-muted">
            <a href="#about" className="hover:text-foreground transition-colors uppercase">About</a>
            <a href="#collections" className="hover:text-foreground transition-colors uppercase">Collections</a>
            <a href="#signature" className="hover:text-foreground transition-colors uppercase">Signature</a>
            <a href="#identity" className="hover:text-foreground transition-colors uppercase">Founder</a>
            <a href="#lookbook" className="hover:text-foreground transition-colors uppercase">Lookbook</a>
            <a href="#news" className="hover:text-foreground transition-colors uppercase">Campaign</a>
          </div>
          <span className="font-mono text-[9px] text-muted-foreground tracking-wider uppercase select-none">
            © 2026 PEACEMINUSONE. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </section>
  );
}
