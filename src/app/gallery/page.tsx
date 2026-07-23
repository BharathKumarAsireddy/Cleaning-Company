import type { Metadata } from "next";
import { ImageIcon } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse before & after transformations from Precision Cleaning Services across residential, commercial, and specialty cleaning projects.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        icon={ImageIcon}
        title="See the"
        highlight="Precision difference"
        description="A look at real transformations from our residential, commercial, and specialty cleaning projects."
        crumb="Gallery"
      />

      <section className="relative bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <GalleryGrid items={galleryItems} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
