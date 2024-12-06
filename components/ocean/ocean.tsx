import {FC} from "react";
import AlguesToxiques from "./alguesToxiques"; 
import Circulation from "./circulation";
import Estomac from "./estomac";
import Pollution from "./pollution";
import Poumons from "./poumons";
import Temperature from "./temperature";

interface OceanProps {
    step: number;
}

export const Ocean: FC<OceanProps> = ({ step }) => {
        switch (step) {
            case 0:
                return <Temperature></Temperature>
            case 1:
                return <Circulation></Circulation>
            case 2:
                return <Estomac></Estomac>
            case 3:
                return <Poumons></Poumons>
            case 4:
                return <AlguesToxiques></AlguesToxiques>
            case 5:
                return <Pollution></Pollution>
            default:
                break;
        }
}