import {FC} from "react";
import Image from "next/image";

import BG from "./bg-reverse.png"

interface HumanProps {
    toggleTete: boolean;
    toggleBrasD: boolean;
    toggleBrasG: boolean;
    poumon: boolean;
    rein: boolean;
    jambe: boolean;
}

export const Human: FC<HumanProps> = ({toggleTete, toggleBrasD, toggleBrasG, poumon, rein, jambe}) => {
    return (
        <div className="relative h-screen bg-[#103565] ">
            <Image src={BG} alt="background" className={"absolute bottom-0 w-full"}/>
            <img src={"/human/base.png"} alt="Human Image" className={"absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"}/>
            {toggleBrasD ? <img src={"/human/bras-d.png"} alt="Human Image"
                                className={"absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"}/> :
                <img src={"/human/base-bras-d.png"} alt="Human Image"
                     className={"absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"}/>}
            {toggleBrasG ? <img src={"/human/bras-g.png"} alt="Human Image"
                                className={"absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"}/> :
                <img src={"/human/base-bras-g.png"} alt="Human Image"
                     className={"absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"}/>}

            {jambe ? <img src={"/human/jambe.png"} alt="Human Image"
                          className={"absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"}/> :
                <img src={"/human/base-jambe.png"} alt="Human Image"
                     className={"absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"}/>}

            {(!poumon && !rein) && <img src={"/human/base-ventre.png"} alt="Human Image"
                                        className={"absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"}/>}
            {rein && <img src={"/human/rein.png"} alt="Human Image"
                                        className={"absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"}/>}
            {poumon && <img src={"/human/poumon.png"} alt="Human Image"
                          className={"absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"}/>}

            {toggleTete && <img src={"/human/tete.png"} alt="Human Image"
                                className={"absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"}/>}
        </div>
    )
}