"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "What is Probashi Hotels & Resorts Limited?",
    a: "Probashi Hotels & Resorts Limited is an registered hospitality real-estate organization dedicated to developing premium resorts in Bangladesh, offering sustainable profit-sharing and ownership deeds to esteemed investors.",
  },
  {
    q: "Where is the flagship Dhaleshwari Royal Resort located?",
    a: "The resort is situated right along the serene riverside of the Dhaleshwari River, easily accessible from the Dhaka expressway within convenient driving distance.",
  },
  {
    q: "How can I collect my Deed of Agreement?",
    a: "Clients with completed registration and installments can collect their original Deed of Agreement in person by visiting our Aftabnagar corporate office during working hours.",
  },
  {
    q: "Can expatriate Bangladeshis (Probashi) purchase shares?",
    a: "Yes! Our services are specifically designed to facilitate overseas remittance and easy ownership management for expatriates worldwide.",
  },
];

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 px-6 sm:px-12 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Find quick answers to the most common queries
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/60 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 hover:text-amber-500 transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-amber-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-zinc-400 shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-sm text-zinc-600 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
