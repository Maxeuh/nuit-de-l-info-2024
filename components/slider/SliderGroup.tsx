import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { IconPlayerPlay, IconPlayerPause } from "@tabler/icons-react"

interface SliderGroupProps {
  state: number;
  setState: (value: number) => void;
  stateLimit: number;
}

export const SliderGroup: React.FC<SliderGroupProps> = ({ state, setState, stateLimit }) => {
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        if (state > stateLimit) {
          setState(0);
        } else {
          setState(state++);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, setState, state, stateLimit]);

  return (
    <div className="flex gap-4 rounded-full bg-blue-500 px-3 py-1 text-white">
      <Slider value={[state]} onValueChange={ (value) => setState(value[0]) } max={stateLimit} />
      <Button variant="outline" size="icon" onClick={() => setAutoPlay(!autoPlay)} className="rounded-full border-none bg-blue-500 text-white hover:bg-white hover:text-blue-500">
        {autoPlay ? <IconPlayerPause /> : <IconPlayerPlay />}
      </Button>
    </div>
  );
};