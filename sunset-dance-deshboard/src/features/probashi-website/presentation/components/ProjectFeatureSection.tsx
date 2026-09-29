import React from "react";

export function ProjectFeatureSection() {
  return (
    <section id="features" className="py-16 px-6 sm:px-12 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
            Probashi Hotel And Resort Is Your Best Choice
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Prime riverside location with top architectural engineering and high future appreciation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <img
              src="https://probashihnr.com/image/media/69e8de2eed7ec.webp"
              alt="Project Feature"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Eco-Friendly Waterfront Living &amp; Entertainment
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Dhaleshwari Royal Resort combines serene natural tranquility with 5-star hospitality infrastructure. Featuring private suites, swimming pools, recreational waterways, and culinary delights, it is tailored for both local relaxation and international vacationers.
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              With close proximity to the capital city Dhaka, our guests enjoy seamless connectivity while investors gain a dependable, lifetime revenue sharing avenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
