"use client";

import React from "react";
import { TopBanner } from "../components/TopBanner";
import { WebsiteHeader } from "../components/WebsiteHeader";
import { NoticeMarquee } from "../components/NoticeMarquee";
import { HeroCarousel } from "../components/HeroCarousel";
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { ProjectFeatureSection } from "../components/ProjectFeatureSection";
import { GallerySection } from "../components/GallerySection";
import { VideoSection } from "../components/VideoSection";
import { FaqSection } from "../components/FaqSection";
import { ContactSection } from "../components/ContactSection";
import { WebsiteFooter } from "../components/WebsiteFooter";

/**
 * ProbashiWebsiteView - Orchestrator View Component
 * Refactored into autonomous, focused presentation components.
 */
export function ProbashiWebsiteView() {
  return (
    <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden shadow-2xl transition-all">
      {/* 1. Top Contact & Action Bar */}
      <TopBanner />

      {/* 2. Main Brand Header & Navigation */}
      <WebsiteHeader />

      {/* 3. Scrolling Notice Bar */}
      <NoticeMarquee />

      {/* 4. Hero Carousel Banner */}
      <HeroCarousel />

      {/* 5. Company & Project Overview */}
      <AboutSection />

      {/* 6. Core Services */}
      <ServicesSection />

      {/* 7. Key Features & Amenities */}
      <ProjectFeatureSection />

      {/* 8. Photo Gallery with Lightbox Modal */}
      <GallerySection />

      {/* 9. Video Tour & Drone Walkthrough */}
      <VideoSection />

      {/* 10. Frequently Asked Questions */}
      <FaqSection />

      {/* 11. Consultation Form & Google Map */}
      <ContactSection />

      {/* 12. Footer & Legal Modals */}
      <WebsiteFooter />
    </div>
  );
}
