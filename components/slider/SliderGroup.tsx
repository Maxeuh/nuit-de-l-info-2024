import { Slider } from "@/components/ui/slider";

interface SliderGroupProps {
  state: number;
  setState: (value: number) => void;
}

export const SliderGroup: React.FC<SliderGroupProps> = ({ state, setState }) => {
  return (
    <div className="flex gap-4">
      <Slider value={[state]} onValueChange={ (value) => setState(value[0]) }/>
    </div>
  );
};