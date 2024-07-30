import React from "react";
import Image from "next/image";
import { FlipWords } from "../ui/flip-words";

export function Hero() {
  const words = [
    "simplicity",
    "efficiency",
    "versatility",
    "innovation",
  ];

  return (
    <div className="m-[40px] sm:m-auto md:m-auto lg:m-auto h-[40rem] flex flex-col md:flex-row justify-center items-center px-4 space-y-4 md:space-y-0 md:space-x-8">
      <div className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Explore
        <FlipWords words={words} /> <br />
        with Squig Programming Language
      </div>
      <div className="w-[190px] sm:w-full md:w-1/3 flex justify-center items-center">
        <Image 
          src="/squig.png"
          alt="Squig Programming Language"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
    </div>
  );
}
