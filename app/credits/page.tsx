"use client"

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import DefisJSON from "@/public/defis.json";
import { Defis } from "@/components/credits/defis";
import { Button } from "@/components/ui/button";

interface Contributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export default function Home() {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch("/api/contributors");
        const data: Contributor[] = await response.json();
        setContributors(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(err.message);
          setError(err.message || "Échec du chargement des contributeurs");
        } else if (typeof err === "string") {
          console.error(err);
          setError(err);
        }
      }
    };

    fetchContributors();
  }, []);

  return (
    <div className="p-6">
        <h2 className="p-4 text-center text-4xl font-bold">"🦆 Hunter" c'est nous</h2>
        <div className="m-auto w-3/4 p-4">
        {error ? (
            <p style={{ color: "red" }}>Erreur : {error}</p>
        ) : contributors.length === 0 ? (
            <p>Chargement des contributeurs...</p>
        ) : (
            <Carousel
            opts={{
                align: "center",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 3000,
                    stopOnMouseEnter: true
                }),
            ]}>
            <CarouselContent>
                {contributors.map((contributor) => (
                <CarouselItem key={contributor.id} style={{ textAlign: "center" }}>
                    <a
                    href={contributor.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                    >
                    <img
                        src={contributor.avatar_url}
                        alt={contributor.login}
                        style={{
                        width: "20vw",
                        height: "20vw",
                        borderRadius: "50%",
                        marginBottom: "10px",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        }}
                    />
                    <div style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                        {contributor.login}
                    </div>
                    <div style={{ fontSize: "0.8em", color: "gray" }}>
                        {contributor.contributions} contribution{contributor.contributions > 1 ? "s" : ""}
                    </div>
                    </a>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        )}
        </div>

        <h2 className="p-4 text-center text-4xl font-bold">Nos défis</h2>
        <div className="flex flex-col gap-4">
        {DefisJSON.map((defi) => (
            <Defis
                key={defi.id}
                titre={defi.titre}
                description={defi.description}
                entreprise={defi.entreprise}
                logo={defi.logo}
                lien={defi.lien}
            />
        ))}
        </div>

        <h2 className="p-4 text-center text-4xl font-bold">Merci à l'INSA</h2>
        <div className="max-h-[80vh] text-center">Un gros merci à notre école, l'INSA Centre Val de Loire, pour nous avoir aidé à organiser cette nuit, et pour la Red Bull, car franchement on aurait jamais tenu jusqu'au bout sans ça...</div>
    
        <div className="mt-12 text-center">
        <Button asChild className="">
        <a href={"https://github.com/Maxeuh/nuit-de-l-info-2024"} target="_blank" rel="noopener noreferrer">
            GitHub du projet
        </a>
        </Button>
        </div>
    </div>
  );
}