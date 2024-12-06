import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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
        {autoPlay ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="48" height="48" strokeWidth="2"> <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path> <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path> </svg>  : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="48" height="48" strokeWidth="2"> <path d="M7 4v16l13 -8z"></path> </svg> }
      </Button>
    </div>
  );
};