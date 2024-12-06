import {FC} from "react";
import Image from "next/image";

import BG from "./bg-reverse.png"

interface BodyImageProps {
    src: string;
}


const BodyImage: FC<BodyImageProps> = ({src}) => {
    return (<img src={src} alt="Human Image"
                 className={"absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 max-h-screen pt-40 pb-16"}/>)
}

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
            <BodyImage src={"/human/base.png"}/>
            {toggleBrasD ? <BodyImage src={"/human/bras-d.png"}/> : <BodyImage src={"/human/base-bras-d.png"}/>}
            {toggleBrasG ? <BodyImage src={"/human/bras-g.png"}/> : <BodyImage src={"/human/base-bras-g.png"}/>}
            {jambe ? <BodyImage src={"/human/jambe.png"}/> : <BodyImage src={"/human/base-jambe.png"}/>}

            {(!poumon && !rein) && <BodyImage src={"/human/ventre.png"}/>}
            {rein && <BodyImage src={"/human/rein.png"}/>}
            {poumon && <BodyImage src={"/human/poumon.png"}/>}
            {toggleTete && <BodyImage src={"/human/tete.png"}/>}
        </div>
    )
}

