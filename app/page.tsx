"use client"

import { useState } from "react";
import { SliderGroup } from "@/components/slider/SliderGroup";
import { DrawerGame } from "@/components/drawer/DrawerGame";

export default function Home() {

  const [state, setState] = useState(0);
  const stateLimit = 5;

  return (
    <div className="h-full p-4">
      <SliderGroup state={state} setState={setState} stateLimit={stateLimit} />
      Statut du jeu : {state}
      <DrawerGame />
    </div>
  );
}
