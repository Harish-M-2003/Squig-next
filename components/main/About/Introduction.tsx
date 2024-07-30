"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useTheme } from "next-themes";

const words = `Squig, a programming language that goes beyond the ordinary, providing additional options in the realm of minimalism and performance exploration. Crafted with a modern mindset and a commitment to innovation, Squig acknowledges its unique position in the coding landscape.`;

export function Introduction() {
  const { theme } = useTheme();

  return (
    <div className={`p-8 bg-${theme === "light" ? "white" : "gray-950"} dark:bg-${theme === "light" ? "gray-950" : "gray-950"} rounded-lg shadow-md mx-auto`}>
      <h2 className={`text-2xl font-bold mb-4 text-${theme === "light" ? "blue-600" : "blue-400"} dark:text-${theme === "light" ? "blue-400" : "blue-600"}`}>Introduction</h2>
      <div className={`text-lg text-${theme === "light" ? "gray-700" : "gray-300"} dark:text-${theme === "light" ? "gray-300" : "gray-700"}`}>
        <TextGenerateEffect words={words} />
      </div>
    </div>
  );
}
