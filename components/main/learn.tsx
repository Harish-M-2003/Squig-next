'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Learn() {
  const { theme } = useTheme();

  return (
    <div className="mx-0 flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <h1
        className={`mx-10 text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-center p-4 md:p-6 rounded-lg ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-green-100 via-blue-100 to-aqua-blue-300 text-black rounded-lg' 
            : 'bg-gradient-to-r from-blue-800 via-purple-700 dark:text-white'
        }`}
      >
        Dive into the World of SQUIG: The Future of Programming Awaits!
      </h1>
      <button className="relative inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-3 overflow-hidden font-bold text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:bg-gradient-to-r dark:from-blue-900 dark:to-purple-900 dark:hover:from-blue-800 dark:hover:to-purple-800">
        <span className="absolute inset-0 w-full h-full border-4 border-white rounded-lg"></span>
        <span className="relative"><Link href={"/index.html"}>Learn</Link></span>
      </button>
    </div>
  );
}
