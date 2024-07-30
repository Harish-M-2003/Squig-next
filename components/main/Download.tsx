"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function DownloadSection() {
  const words = [
    {
      text: "Download",
      className:"text-xl sm:text-[40px]",
    },
    {
      text: "the latest",
      className:"text-xl sm:text-[40px]",
    },
    {
      text: "version",
      className:"text-xl sm:text-[40px]",
    },
    {
      text: "of Squig",
      className:"text-xl sm:text-[40px]",
    },
    {
      text: "now",
      className: "text-xl sm:text-[50px] text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[20rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xl sm:text-[50px] m-4">
        Explore the simplicity and efficiency of Squig
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Download now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
