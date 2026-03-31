"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { PortfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";

type GalleryStripProps = {
  data: PortfolioData;
};

export function GalleryStrip({ data }: GalleryStripProps) {
  const [selectedImage, setSelectedImage] = useState<PortfolioData["gallery"][number] | null>(null);

  return (
    <>
      <Reveal delay={0.14}>
        <section className="pt-6">
          <header className="mb-3 flex items-center justify-between">
            <h2 className="resume-title">Gallery</h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#4a5772]">
              Experience Highlights
            </p>
          </header>
          <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {data.gallery.map((item, index) => (
              <figure
                key={`${item.alt}-${index}`}
                className="overflow-hidden rounded-lg border border-[#1d263815] bg-[#edf1f8]"
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  aria-label={`Open full image: ${item.alt}`}
                  className="block w-full cursor-zoom-in"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={280}
                    className="h-24 w-full object-cover transition duration-300 hover:scale-105 lg:h-28"
                  />
                </button>
              </figure>
            ))}
          </div>
        </section>
      </Reveal>

      <AnimatePresence>
        {selectedImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[83] flex items-center justify-center bg-[#071022]/62 p-4 backdrop-blur-[2px]"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedImage.alt} full image`}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl rounded-2xl border border-[#cad5ea] bg-[#f7f9fd] p-2 shadow-[0_24px_50px_rgba(35,55,95,0.25)]"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#c7d2e5] bg-white text-[#334766]"
                aria-label="Close image preview"
              >
                <X size={14} />
              </button>

              <div className="overflow-hidden rounded-xl border border-[#d1dcee] bg-white">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1600}
                  height={1000}
                  className="max-h-[82vh] w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
