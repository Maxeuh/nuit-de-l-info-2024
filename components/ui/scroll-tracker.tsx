"use client";

import React, { useRef } from "react";

export function ScrollTracker({ onScroll }: { onScroll: (progress: number) => void }) {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (scrollAreaRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollAreaRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      onScroll(progress); // Appeler le callback avec le pourcentage
    }
  };

  return (
    <div>
      <p className="mb-4">Faites défiler pour avancer.</p>
      <div
        ref={scrollAreaRef}
        onScroll={handleScroll}
        className="w-96 whitespace-nowrap rounded-md border flex overflow-x-auto p-4 space-x-4"
      >
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="text-sm flex-shrink-0">
            {i} an
          </div>
        ))}
      </div>
    </div>
  );
}