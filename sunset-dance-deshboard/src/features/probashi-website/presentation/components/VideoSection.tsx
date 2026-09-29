import React from "react";

export function VideoSection() {
  return (
    <section id="video" className="py-16 px-6 sm:px-12 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
            Our Project Video
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Watch the latest drone footage and site walkthrough of ProbashiHolidayz
          </p>
        </div>

        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-black">
          <iframe
            src="https://www.youtube.com/embed/cWin-G5CN4Y"
            title="Probashi Hotels & Resorts Video"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
