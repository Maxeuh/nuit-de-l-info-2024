import { Button } from "@/components/ui/button";

interface DefisProps {
    titre: string;
    description: string;
    entreprise: string;
    logo: string;
    lien: string;
}

export const Defis: React.FC<DefisProps> = ({ titre, description, entreprise, logo, lien }) => {
    return (
        <div className="flex size-full flex-col items-center justify-center">
            <div className="flex size-3/4 flex-col items-center justify-center rounded-lg bg-white shadow-xl md:h-48 md:flex-row">
            <div className="flex size-full flex-col items-start justify-center p-4 md:w-1/2">
                <h1 className="text-2xl font-bold">{titre}</h1>
                <p className="text-justify text-sm">{description}</p>
                <Button asChild className="mt-2">
                <a href={lien} target="_blank" rel="noopener noreferrer">
                    Lien vers le défi de "{entreprise}"
                </a>
                </Button>
            </div>
            <div className="mt-4 flex w-full items-center justify-center md:mt-0 md:w-1/3">
                <img src={`/defis/${logo}`} alt="defi" className="mx-auto w-full rounded-r-lg md:w-1/2" />
            </div>
            </div>
        </div>
    );
}