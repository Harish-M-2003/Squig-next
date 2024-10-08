import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({weight : "300" , subsets : ["latin"]});

export const metadata: Metadata = {
  title: "Squig",
  description: "A Programming Language",
  // icons : "/squig.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
