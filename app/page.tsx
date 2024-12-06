"use client"

import { useState } from "react";
import { SliderGroup } from "@/components/slider/SliderGroup";
import { HeaderBar } from "@/components/header/HeaderBar";
import { DrawerGame } from "@/components/drawer/DrawerGame";


export default function Home() {

  const [state, setState] = useState(0);
  const stateLimit = 7;

  return (
    <div className="h-full p-4">
      <HeaderBar logo="/logo/logo.png" name="/logo/logo-text.png" links={["/podcasts","/credits"]}/>
      <SliderGroup state={state} setState={setState} stateLimit={stateLimit} />
      Statut du jeu : {state}
      <DrawerGame  state={state}/>
    </div>
  );
}
