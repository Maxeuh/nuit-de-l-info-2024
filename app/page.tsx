"use client";

import { useState } from "react";
import { SliderGroup } from "@/components/slider/SliderGroup";
import { HeaderBar } from "@/components/header/HeaderBar";
import { DrawerGame } from "@/components/drawer/DrawerGame";
import { Human } from "@/components/human/human";

export default function Home() {
  const [state, setState] = useState(0);
  const stateLimit = 7;

  return (
    <div className="h-full">
        <div className={"absolute z-10 w-full"}>
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
        </div>
      <div className="max-h-screen">
        <Human
          toggleTete={true}
          toggleBrasD={true}
          toggleBrasG={true}
          poumon={true}
          rein={true}
          jambe={true}
        />
      </div>
      <DrawerGame state={state} />
    </div>
  );
}
