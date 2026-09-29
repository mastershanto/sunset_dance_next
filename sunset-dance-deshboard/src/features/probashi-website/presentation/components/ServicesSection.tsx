import React from "react";
import { BarChart3, Building2, RotateCw } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: BarChart3,
      title: "Investment Consultation",
      description:
        "Professional guidance for resort share purchase and investment opportunities with transparent returns.",
      color: "text-amber-500 bg-amber-500/10",
    },
    {
      icon: Building2,
      title: "Corporate Office Support",
      description:
        "Visit our Dhaka office for project details, booking assistance, deed documentation, and customer support.",
      color: "text-emerald-500 bg-emerald-500/10",
    },
    {
      icon: RotateCw,
      title: "Project Updates",
      description:
        "Regular construction progress and riverside development updates shared directly with shareholders.",
      color: "text-blue-500 bg-blue-500/10",
    },
  ];

  return (
    <section id="services" className="py-16 px-6 sm:px-12 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
            Our Services
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Built for comfort, convenience &amp; community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-zinc-50 dark:bg-zinc-900/60 hover:border-amber-500/50 transition-all hover:-translate-y-1 shadow-sm"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
