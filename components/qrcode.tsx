'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import pokemons from '@/app/data/pokemons.json';

const QRImage = dynamic(() => import('react-qrbtf').then((mod) => mod.QRImage), {
  ssr: false,
});

interface Pokemon {
    id: string;
    image: string;
    message: string;
    source: string;
}
  
const QrCodeComponent = () => {
    const [randomEntry, setRandomEntry] = useState<Pokemon | null>(null);
  
    useEffect(() => {
      // Sélectionner une entrée aléatoire
      const randomIndex = Math.floor(Math.random() * pokemons.length);
      setRandomEntry(pokemons[randomIndex]);
    }, []);

  if (!randomEntry) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="w-24 h-24 flex flex-col items-center justify-center text-center">
      <QRImage 
        value={`${window.location.origin}/pokemons/${randomEntry.id}`}
        image={`/${randomEntry.image}`}
        type="round"
        size={125}
        level="L"
      />
    </div>
  );
};

export default QrCodeComponent;
