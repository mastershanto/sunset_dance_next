import React from "react";

export function WebsiteHeader() {
  return (
    <header className="sticky top-0 z-30 bg-zinc-900/95 backdrop-blur-md text-white border-b border-zinc-800 px-6 py-3.5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="https://probashihnr.com/image/logo/logo.png"
          alt="Probashi Hotels & Resorts"
          className="w-10 h-10 object-contain rounded-lg bg-white/10 p-1"
        />
        <div>
          <h1 className="font-bold text-base leading-tight text-amber-400 tracking-tight">
            Probashi Hotels & Resorts Limited
          </h1>
          <p className="text-[11px] text-zinc-400 font-medium tracking-wide">
            For bright future
          </p>
        </div>
      </div>

      <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-300">
        <a href="#about" className="hover:text-amber-400 transition-colors">
          About
        </a>
        <a href="#services" className="hover:text-amber-400 transition-colors">
          Services
        </a>
        <a href="#features" className="hover:text-amber-400 transition-colors">
          Feature
        </a>
        <a href="#gallery" className="hover:text-amber-400 transition-colors">
          Gallery
        </a>
        <a href="#video" className="hover:text-amber-400 transition-colors">
          Video
        </a>
        <a href="#faq" className="hover:text-amber-400 transition-colors">
          FAQ
        </a>
        <a href="#contact" className="hover:text-amber-400 transition-colors">
          Contact Us
        </a>
        <a
          href="https://probashihnr.com/affiliate_login.php"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-500 hover:bg-amber-600 text-zinc-950 font-semibold px-4 py-1.5 rounded-xl text-xs transition-colors"
        >
          Seller Login
        </a>
      </nav>
    </header>
  );
}
