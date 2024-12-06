import { Button } from "@/components/ui/button"
import Data from "@/public/scenarios.json"

interface ChoiceProps {
    state: number;
    globalstate: {
        step: number;
        tete: boolean;
        brasD: boolean;
        brasG: boolean;
        poumon: boolean;
        rein: boolean;
        jambe: boolean;
    };
    setState: React.Dispatch<React.SetStateAction<{
        step: number;
        tete: boolean;
        brasD: boolean;
        brasG: boolean;
        poumon: boolean;
        rein: boolean;
        jambe: boolean;
    }>>;
}

export const ChoiceGame: React.FC<ChoiceProps> = (props) => {
    return (
        <div className="flex justify-center bg-blue-500">
        <Button variant="outline" size="icon" className="rounded-full border-none bg-blue-500 text-white hover:bg-white hover:text-blue-500 w-1/2" 
        onClick={() => {}}>
            {Data[props.state].choix1}
        </Button>
        <Button variant="outline" size="icon" className="rounded-full border-none bg-blue-500 text-white hover:bg-white hover:text-blue-500 w-1/2"
        onClick={() => {}}>
            {Data[props.state].choix2}
        </Button>
        </div>
    );
}
