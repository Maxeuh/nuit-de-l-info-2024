import React from 'react';
import { notFound } from 'next/navigation';
import pokemons from '@/app/data/pokemons.json';

export default async function PokemonsPage(
  props: {
    params: Promise<{ id: string }>;
  }
) {
  const params = await props.params;
  const { id } = params;

  // Lire le fichier JSON pour récupérer les données
  //const filePath = path.join(process.cwd(), 'public', POKEMONS_FILE);
  //const fileContents = await fs.readFile(filePath, 'utf-8');
  //const data = JSON.parse(fileContents);
  const pokemon = pokemons[parseInt(id)];
  // Vérifier si l'ID est valide
  //const pokemon = data[parseInt(id)];
  if (!pokemon) {
    notFound(); // Renvoie une erreur 404 si l'ID n'existe pas
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 flex justify-center items-center p-6">
      <div className="max-w-sm w-full bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="relative">
          <img 
            src={`/${pokemon.image}`} 
            alt="Pokémon" 
            className="w-full h-48 object-contain bg-gradient-to-t from-blue-700 to-blue-500"
          />
          <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
            Message de sensibilisation
          </h2>
          <p className="text-gray-600 text-justify leading-relaxed mb-4">
            {pokemon.message}
          </p>
          <a 
            href={pokemon.source} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-center text-blue-600 font-semibold hover:underline"
          >
            En savoir plus →
          </a>
        </div>

        <div className="bg-blue-100 p-4 text-center text-sm text-gray-700">
          <p>Chaque geste compte pour sauver nos océans 🌊.</p>
        </div>
      </div>
    </div>
  );
};

//export default PokemonsPage;
