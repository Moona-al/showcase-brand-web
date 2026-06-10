"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: string;
  name: string;
  category: "outerwear" | "apparel" | "footwear";
  collectionName: string;
  year: string;
  image: string;
  details: string;
}

const products: Product[] = [
  {
    id: "prod-1",
    name: "PMO® X NIKE CLUB VENICE TOP",
    category: "apparel",
    collectionName: "ESSENTIALS",
    year: "2026",
    image: "/images/baju_1.jpg",
    details: "TOP NECK / OVERSIZED FIT",
  },
  {
    id: "prod-2",
    name: "PMO® X NIKE CLUB PUFFER JACKET",
    category: "outerwear",
    collectionName: "PUFFER JACKET",
    year: "2026",
    image: "/images/outwear_1.jpg",
    details: "Puffer Jacket / nylon-blend vibran",
  },
  {
    id: "prod-3",
    name: "PMO® X NIKE CRYOSHOT CTR 360",
    category: "footwear",
    collectionName: "FOOTWEAR",
    year: "2026",
    image: "/images/sepatu_collection.jpg",
    details: "Daisy Signature / Crinkle Leather Build",
  },
  {
    id: "prod-4",
    name: "PMO® X NIKE ANTHEM JACKET",
    category: "outerwear",
    collectionName: "JACKET PRA-MATCH",
    year: "2026",
    image: "/images/outwear_2.jpg",
    details: "Unstructured Silhouette / High-Collar Styling",
  },
  {
    id: "prod-5",
    name: "PMO® X NIKE EL CHINO PANTS",
    category: "apparel",
    collectionName: "ESSENTIALS",
    year: "2026",
    image: "/images/celana_1.jpg",
    details:  "Loose Fit Silhouette / Cotton-Twill Construction",
  },
  {
    id: "prod-6",
    name: "PMO® X NIKE SHORT FOOTBALL TOP",
    category: "apparel",
    collectionName: "ESSENTIALS",
    year: "2026",
    image: "/images/kaos_1.png",
    details: "soft and sweat wicking top",
  },
];

type CategoryFilter = "ALL" | "OUTERWEAR" | "APPAREL" | "FOOTWEAR";

export default function Collections() {
  const [filter, setFilter] = useState<CategoryFilter>("ALL");

  const filteredProducts = products.filter((product) => {
    if (filter === "ALL") return true;
    return product.category === filter.toLowerCase();
  });

  return (
    <section id="collections" className="py-28 bg-card border-t border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-muted uppercase">
              02 // NEW COLLECTION
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mt-2 text-foreground">
              New <span className="italic font-normal">Collaboration With KFA</span>
            </h2>
          </div>

          {/* Filtering Categories */}
          <div className="flex flex-wrap gap-2 border-b border-border pb-2 md:border-none md:pb-0">
            {(["ALL", "OUTERWEAR", "APPAREL", "FOOTWEAR"] as CategoryFilter[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 relative ${
                  filter === cat
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
                {filter === cat && (
                  <motion.span
                    layoutId="activeFilterBorder"
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-foreground"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                key={product.id}
                className="group relative flex flex-col justify-between border border-border/80 bg-background/50 hover:border-foreground/40 transition-colors duration-500 overflow-hidden"
              >
                {/* Product Image Panel */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 33vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Floating Metadata Tag */}
                  <span className="absolute top-4 left-4 font-mono text-[9px] text-white tracking-widest bg-black/80 px-2.5 py-1 backdrop-blur-sm">
                    {product.year} // {product.collectionName}
                  </span>
                </div>

                {/* Product Info Panel */}
                <div className="p-6 border-t border-border flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-lg font-light text-foreground group-hover:text-muted-foreground transition-colors mb-1">
                      {product.name}
                    </h3>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-4">
                      {product.details}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-border/40 pt-4 mt-auto">
                    <span className="text-[10px] font-mono text-muted uppercase">
                      CATALOG // {product.id.toUpperCase()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
