import Image from "next/image";
import type { PortfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";

type GalleryStripProps = {
  data: PortfolioData;
};

export function GalleryStrip({ data }: GalleryStripProps) {
  return (
    <Reveal delay={0.14}>
      <section className="pt-6">
        <header className="mb-3 flex items-center justify-between">
          <h2 className="resume-title">Gallery</h2>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#4a5772]">
            Replace with real project photos
          </p>
        </header>
        <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {data.gallery.map((item) => (
            <figure key={item.src} className="overflow-hidden rounded-lg border border-[#1d263815] bg-[#edf1f8]">
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={280}
                className="h-24 w-full object-cover transition duration-300 hover:scale-105 lg:h-28"
              />
            </figure>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
