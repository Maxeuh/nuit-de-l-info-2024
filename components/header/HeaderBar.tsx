import { HeaderButton } from "@/components/header/HeaderButton"

interface HeaderBarProps {
    logo: string;
    name: string;
    links: string[];
}

export const HeaderBar: React.FC<HeaderBarProps> = ({logo,name,links}) => {
    return (
        <div className="flex justify-between items-center p-4 w-full">
            <img src={logo} alt="Logo" className="h-8" />
            <img src={name} alt="Name" className="h-8" />
            <HeaderButton links={links} />
        </div>
    )
}