'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const POKEMONS_FILE = '/pokemons.json';

const QRImage = dynamic(() => import('react-qrbtf').then((mod) => mod.QRImage), {
  ssr: false,
});

const QrCodeComponent = () => {
  const [randomEntry, setRandomEntry] = useState(null);

  useEffect(() => {
    // Charger le fichier JSON
    const fetchData = async () => {
      try {
        const response = await fetch(POKEMONS_FILE);
        const data = await response.json();

        // Sélectionner une entrée aléatoire
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomEntry(data[randomIndex]);
      } catch (error) {
        console.error('Erreur lors du chargement du JSON:', error);
      }
    };

    fetchData();
  }, []);

  if (!randomEntry) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="w-52 h-52 flex flex-col items-center justify-center text-center">
      <QRImage 
        value={`${window.location.origin}/pokemons/${randomEntry.id}`}
        image={`/${randomEntry.image}`}
        type="round"
        size={150}
      />
    </div>
  );
};

export default QrCodeComponent;
