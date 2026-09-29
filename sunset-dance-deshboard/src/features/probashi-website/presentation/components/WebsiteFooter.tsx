"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon } from "./SocialIcons";

export function WebsiteFooter() {
  const [modalType, setModalType] = useState<"terms" | "privacy" | null>(null);

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 px-6 sm:px-12 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <img
              src="https://probashihnr.com/image/logo/logo.png"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="font-bold text-white text-sm">
              Probashi Hotels &amp; Resorts
            </span>
          </div>
          <p className="leading-relaxed">
            Luxury residential projects with modern amenities and premium living experience along the Dhaleshwari river.
          </p>
        </div>

        <div>
          <h5 className="font-bold text-white uppercase tracking-wider mb-3 text-xs">
            Explore
          </h5>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-amber-400">About Us</a></li>
            <li><a href="#services" className="hover:text-amber-400">Services</a></li>
            <li><a href="#gallery" className="hover:text-amber-400">Gallery</a></li>
            <li><a href="#video" className="hover:text-amber-400">Project Video</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-white uppercase tracking-wider mb-3 text-xs">
            Legal &amp; Access
          </h5>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setModalType("privacy")}
                className="hover:text-amber-400"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => setModalType("terms")}
                className="hover:text-amber-400"
              >
                Terms &amp; Conditions
              </button>
            </li>
            <li>
              <a
                href="https://probashihnr.com/affiliate_login.php"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400"
              >
                Seller / Affiliate Login
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-white uppercase tracking-wider mb-3 text-xs">
            Connect With Us
          </h5>
          <p className="mb-2">Phone: 01635-603092</p>
          <p className="mb-3">Probashihotelresort@gmail.com</p>
          <div className="flex gap-2">
            <a
              href="https://www.facebook.com/share/1ZCSEc5yGK/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Page"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-amber-500 hover:text-zinc-950 transition-colors"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.facebook.com/share/1ZCSEc5yGK/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Page"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-amber-500 hover:text-zinc-950 transition-colors"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.facebook.com/share/1ZCSEc5yGK/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-amber-500 hover:text-zinc-950 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-amber-500 hover:text-zinc-950 transition-colors"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-zinc-900 text-center text-[11px] text-zinc-500">
        © {new Date().getFullYear()} Probashi Hotels &amp; Resorts Limited — All rights reserved.
      </div>

      {/* Terms & Privacy Modals */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setModalType(null)}
        >
          <div
            className="bg-white dark:bg-zinc-900 max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-3xl p-6 shadow-2xl border border-zinc-200 dark:border-zinc-800 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
              <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100">
                {modalType === "terms" ? "Terms & Conditions" : "Privacy Policy"}
              </h3>
              <button
                onClick={() => setModalType(null)}
                aria-label="Close Modal"
                className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400 space-y-3 leading-relaxed">
              <p>
                Welcome to Probashi Hotels &amp; Resorts Limited. By accessing this platform and investing in our properties, you agree to comply with our mutual agreements, deed certifications, and government regulatory compliance of Bangladesh.
              </p>
              <p>
                All project development timelines, deed delivery schedules, and dividend distributions are governed under our registered corporate articles of association.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
