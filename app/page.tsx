"use client";

import { useState } from "react";
import { SliderGroup } from "@/components/slider/SliderGroup";
import { HeaderBar } from "@/components/header/HeaderBar";
import { DrawerGame } from "@/components/drawer/DrawerGame";
import { Human } from "@/components/human/human";
import { ChoiceGame } from "@/components/choices/ChoiceGame";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Ocean } from "@/components/ocean/ocean";

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
  const stateLimit = 5;

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
        <ChoiceGame
          state={state}
          globalstate={globalState}
          setState={setGlobalState}
        />
      </div>

      <div className="max-h-screen md:hidden">
        <Carousel>
          <CarouselPrevious
            onClick={() => {
              if (state > 0) {
                setState(state - 1);
              }
            }}
          >
            Previous
          </CarouselPrevious>
          <CarouselContent>
            <CarouselItem className="pr-0">
              <Human
                toggleTete={globalState.tete}
                toggleBrasD={globalState.brasD}
                toggleBrasG={globalState.brasG}
                poumon={globalState.poumon}
                rein={globalState.rein}
                jambe={globalState.jambe}
              />
            </CarouselItem>
            <CarouselItem className="pl-0">
              <Human
                toggleTete={globalState.tete}
                toggleBrasD={globalState.brasD}
                toggleBrasG={globalState.brasG}
                poumon={globalState.poumon}
                rein={globalState.rein}
                jambe={globalState.jambe}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext
            onClick={() => {
              if (state < 2) {
                setState(state + 1);
              }
            }}
          >
            Next
          </CarouselNext>
        </Carousel>
      </div>

      <div className="hidden md:grid max-h-screen grid-cols-[1fr_3fr]">
        <Human
          toggleTete={globalState.tete}
          toggleBrasD={globalState.brasD}
          toggleBrasG={globalState.brasG}
          poumon={globalState.poumon}
          rein={globalState.rein}
          jambe={globalState.jambe}
        />
        <Ocean step={state} />
      </div>

      <DrawerGame state={state} />
    </div>
  );
}
