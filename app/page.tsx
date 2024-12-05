"use client";

import Image from "next/image";
import { useState } from "react";
import { ScrollTracker } from "@/components/ui/scroll-tracker";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <ScrollTracker onScroll={(progress) => setScrollProgress(progress)} />

        <div className="relative">
          <Image
            src="/01.jpg"
            width={700}
            height={700}
            alt="Picture of the ocean"
          />
          {scrollProgress >= 50 && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-75 p-4 rounded-md">
              <p className="text-xl font-bold">Vous êtes à 50% !</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
