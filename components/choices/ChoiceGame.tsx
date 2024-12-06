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
        <Button variant="outline" size="icon" className="rounded-full border-none bg-blue-500 text-white hover:bg-white text-wrap hover:text-blue-500 w-1/2" 
        onClick={() => {
            if (props.globalstate.tete || props.globalstate.brasD || props.globalstate.brasG || props.globalstate.jambe || props.globalstate.poumon || props.globalstate.rein) {
                props.setState({step:props.state,tete: false, brasD: false, brasG: false, jambe: false, poumon: false, rein: false});
            }
            switch (props.state) {
                case 0:
                    props.setState({...props.globalstate, tete: false});
                    break;
                case 1:
                    props.setState({...props.globalstate, brasD: true});
                    break;
                case 2:
                    props.setState({...props.globalstate, jambe: false});
                    break;
                case 3:
                    props.setState({...props.globalstate, brasG: false});
                    break;
                case 4:
                    props.setState({...props.globalstate, poumon: true});
                    break;
                case 5:
                    props.setState({...props.globalstate, rein: false});
                    break;
                default:
                    break;
            }
        }}>
            {Data[props.state].choix1}
        </Button>
        <Button variant="outline" size="icon" className="rounded-full border-none bg-blue-500 text-white hover:bg-white hover:text-blue-500 w-1/2 text-wrap"
        onClick={() => {
            if (props.globalstate.tete || props.globalstate.brasD || props.globalstate.brasG || props.globalstate.jambe || props.globalstate.poumon || props.globalstate.rein) {
                props.setState({step:props.state,tete: false, brasD: false, brasG: false, jambe: false, poumon: false, rein: false});
            }
            switch (props.state) {
                case 0:
                    props.setState({...props.globalstate, tete: true});
                    break;
                case 1:
                    props.setState({...props.globalstate, brasD: false});
                    break;
                case 2:
                    props.setState({...props.globalstate, jambe: false});
                    break;
                case 3:
                    props.setState({...props.globalstate, brasG: true});
                    break;
                case 4:
                    props.setState({...props.globalstate, poumon: false});
                    break;
                case 5:
                    props.setState({...props.globalstate, rein: false});
                    break;
                default:
                    break;
            }
        }}>
            {Data[props.state].choix2}
        </Button>
        </div>
    );
}
