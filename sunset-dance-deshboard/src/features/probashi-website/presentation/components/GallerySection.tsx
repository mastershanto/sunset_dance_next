"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

const GALLERY_IMAGES = [
  "https://probashihnr.com/image/media/69e8d89ed0137.webp",
  "https://probashihnr.com/image/media/69e8d8b1d3d47.webp",
  "https://probashihnr.com/image/media/69e8d928c0773.webp",
  "https://probashihnr.com/image/media/69e8d93c1f19e.webp",
  "https://probashihnr.com/image/media/69e8d943d01bb.webp",
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 px-6 sm:px-12 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
            Our Project Photos
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Find your best smart real estate &amp; resort vision
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img)}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 cursor-pointer shadow-sm"
            >
              <img
                src={img}
                alt={`Project Gallery ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-xs font-semibold text-white bg-black/60 px-3 py-1.5 rounded-full">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close Lightbox"
              className="absolute -top-12 right-0 text-white hover:text-amber-400 p-2"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged Project Photo"
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
