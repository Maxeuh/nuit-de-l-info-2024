"use client";

import { useState } from "react";
import { SliderGroup } from "@/components/slider/SliderGroup";
import { HeaderBar } from "@/components/header/HeaderBar";
import { DrawerGame } from "@/components/drawer/DrawerGame";
import { Human } from "@/components/human/human";
import { ChoiceGame } from "@/components/choices/ChoiceGame";

export default function Home() {
  const [state, setState] = useState(0);
  const [globalState, setGlobalState] = useState({
    step: 0,
    tete: false,
    brasD: false,
    brasG: false,
    poumon: false,
    rein: false,
    jambe: false,
  });
  const stateLimit = 7;

  return (
    <div className="h-full">
      <div className={"absolute w-full z-10"}>
          <HeaderBar
          logo="/logo/logo.png"
          name="/logo/logo-text.png"
          links={["/podcasts", "/credits"]}
            />
          <SliderGroup
              state={state}
              setState={setState}
              stateLimit={stateLimit}
          />
          <ChoiceGame state={state} globalstate={globalState} setState={setGlobalState} />
      </div>
      <div className="max-h-screen">
        <Human
          toggleTete={globalState.tete}
          toggleBrasD={globalState.brasD}
          toggleBrasG={globalState.brasG}
          poumon={globalState.poumon}
          rein={globalState.rein}
          jambe={globalState.jambe}
        />
      </div>
      <DrawerGame state={state}/>
    </div>
  );
}
