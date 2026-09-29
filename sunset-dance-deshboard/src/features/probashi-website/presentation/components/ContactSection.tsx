"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, MapPin, Phone, Mail } from "lucide-react";

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", mobile: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 px-6 sm:px-12 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form Card */}
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
          <div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Get a free consultation
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Leave your details and our sales representative will contact you within 24 hours.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Thank you! We have received your inquiry and will call you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full mt-1 rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2 text-sm text-zinc-900 focus:border-amber-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-100"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Mobile / Phone *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Mobile number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full mt-1 rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2 text-sm text-zinc-900 focus:border-amber-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-100"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full mt-1 rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2 text-sm text-zinc-900 focus:border-amber-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-100"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you are interested in..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full mt-1 rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2 text-sm text-zinc-900 focus:border-amber-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-100"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold py-2.5 rounded-xl text-sm transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Request Call
              </button>
            </form>
          )}
        </div>

        {/* Office Details & Google Map */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4">
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              Corporate Office
            </h4>
            <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Office: House # 11 (Lift:4A), Block # D, Aftabnagar, Dhaka-1212</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Phone: 01635-603092</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Email: Probashihotelresort@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md h-64">
            <iframe
              src="https://www.google.com/maps?q=23.765564249315688,90.43776765595682&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Office Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
