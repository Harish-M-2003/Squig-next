"use client";
import { Hero } from "@/components/main/Hero";
import { Introduction } from "@/components/main/About/Introduction";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import Alpha from "@/components/main/About/Alpha";
import KeyFeatures from "@/components/main/About/KeyFeatures";
import { DownloadSection } from "@/components/main/Download";
import Link from "next/link";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";
import EvolutionSection from "@/components/main/About/Evolution";
import { Footer } from "@/components/main/Footer";
import { Mode } from "@/components/Mode";
import { useTheme } from "next-themes";
import { Contributors } from "@/components/main/Contributors";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import Learn from "@/components/main/learn";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full p-0 m-0">
      <div className="relative w-full flex items-center justify-center">
        <Navbar className={`top-2`} />
      </div>
      <div
        className={`h-[40rem] relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md`}>
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="mt-[170px] sm:m-0">
          <Hero />
        </div>
      </div>
      <section id="introduction">
        <Introduction />
      </section>
      <section id="alpha">
        <Alpha />
      </section>
      <section id="key-features">
        <KeyFeatures />
      </section>
      <section id="evolution">
        <EvolutionSection />
      </section>
      <section>
        <Learn/>
      </section>
      <section id="download">
        <DownloadSection />
      </section>
      <section id="contributors">
        <Contributors />
      </section>
      <div className="mt-[170px] sm:m-0 sm:p-2 sm:mt-0 p-4">
        <Footer />
      </div>
    </main>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <div className={`rounded-[50px] flex flex-col sm:flex-row pt-4 pr-0 pl-0 border-b-[5px] border-blue-400`}>
        <Menu setActive={setActive}>
          <div className="sm:pr-[250px]">
            <Link href="/" onClick={() => setMenuOpen(!menuOpen)}>
              <Image src="/squig.png" alt="Description of your image" width={50} height={50} />
            </Link>
          </div>
          <div className="align-center hidden sm:flex flex-col sm:flex-row md:mt-4 sm:mt-0 justify-between gap-3">
            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-4 text-sm mt-4 sm:mt-0">
                <HoveredLink href="#introduction">Introduction</HoveredLink>
                <HoveredLink href="#alpha">Alpha Release Info</HoveredLink>
                <HoveredLink href="#key-features">Key Features</HoveredLink>
                <HoveredLink href="#evolution">Evolution of Squig</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Download">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="#download">Getting started</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Contributors">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="#contributors">Contributors section</HoveredLink>
              </div>
            </MenuItem>

            <div className="flex flex-col space-y-4 text-sm pl-2 mt-4 md:mt-[-10px] sm:flex sm:mt-0">
              <Mode />
            </div>
          </div>
        </Menu>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
            <button
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Close
            </button>
            <div className="flex flex-col space-y-4 text-sm mt-4">
              <HoveredLink href="#introduction">Introduction</HoveredLink>
              <HoveredLink href="#alpha">Alpha Release Info</HoveredLink>
              <HoveredLink href="#key-features">Key Features</HoveredLink>
              <HoveredLink href="#evolution">Evolution of Squig</HoveredLink>
              <HoveredLink href="#download">Getting started</HoveredLink>
              <HoveredLink href="#contributors">Contributors section</HoveredLink>
              <HoveredLink href="#contributors"><Mode /></HoveredLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
