import React from "react";

export function NoticeMarquee() {
  return (
    <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2.5 flex items-center gap-3 text-xs overflow-hidden">
      <span className="bg-amber-500 text-zinc-950 font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider shrink-0 animate-pulse">
        নোটিশ
      </span>
      <div className="overflow-hidden whitespace-nowrap w-full">
        <div className="animate-marquee hover:[animation-play-state:paused] text-amber-800 dark:text-amber-300 font-medium">
          📢 সম্মানিত গ্রাহকবৃন্দ, যাদের ডিড অব এগ্রিমেন্ট সম্পন্ন হয়েছে কিন্তু এখনও ডিট অব এগ্রিমেন্ট গ্রহণ করা হয়নি, তাদেরকে চলতি মাসের ইনস্টলমেন্ট পরিশোধের সময় ডিট অব এগ্রিমেন্ট সংগ্রহ করার জন্য বিশেষভাবে অনুরোধ করা যাচ্ছে। — প্রবাসী হোটেলস এন্ড রিসোর্টস লিমিটেড
        </div>
      </div>
    </div>
  );
}
