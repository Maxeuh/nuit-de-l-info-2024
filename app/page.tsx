"use client"

import { useState } from "react";
import { SliderGroup } from "@/components/slider/SliderGroup"

export default function Home() {
  const [state, setState] = useState(0);
  const stateLimit = 5;

  return (
    <div className="p-4">
      <SliderGroup state={state} setState={setState} stateLimit={stateLimit} />
      Statut du jeu : {state}
    </div>
  );
}
