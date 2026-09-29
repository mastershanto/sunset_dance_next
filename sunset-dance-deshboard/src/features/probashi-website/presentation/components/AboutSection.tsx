import React from "react";
import { CheckCircle2, Mail } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-6 sm:px-12 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative group overflow-hidden rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800">
          <img
            src="https://probashihnr.com/image/media/6a6ae5d6a2f00.webp"
            alt="About Probashi Hotels & Resorts"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-xs uppercase tracking-widest font-semibold text-amber-400">
              Flagship Project
            </p>
            <p className="text-lg font-bold">Dhaleshwari Royal Resort</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
            About Us
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Probashi Hotels & Resorts Limited
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Probashi Hotels & Resorts Limited is a visionary company committed to contributing to the development of Bangladesh&apos;s hotel and resort industry. Through quality projects, sustainable planning, and long-term investment opportunities, we aim to create destinations that add value to tourism, local communities, and the national economy.
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Our flagship project, <strong>Dhaleshwari Royal Resort</strong>, is currently under development on the bank of the Dhaleshwari River. The project is designed to become a modern riverside resort offering quality facilities while creating new employment opportunities and supporting regional economic growth.
          </p>

          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Contributing to the growth of Bangladesh&apos;s hotel and resort sector.</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Fully operational corporate office in Dhaka offering investment assistance.</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold px-6 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-amber-500/20"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
