"use client";

import React from "react";
import AudioPlayer from "../../components/Audio/AudioPlayer";

const Home: React.FC = () => {
  return (
    <div className="p-6 max-w-md mx-auto mt-8">
      {/* Section supérieure */}
      <div className="relative bg-gradient-to-b from-blue-500 to-blue-700 text-white rounded-lg p-8 mb-8">
        {/* Microphone */}
        <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full p-3 shadow-lg">
          <img
            src="../../assets/micro.png"
            alt="Microphone"
            className="w-8 h-8"
          />
        </div>

        {/* Titre et sous-titres */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-2">Plongez avec nous</h2>
          <h3 className="text-lg font-medium mb-4">
            pour une expérience éclaboussante
          </h3>
        </div>

        {/* Texte */}
        <p className="text-sm leading-relaxed text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor
          congue hendrerit. Etiam non imperdiet lectus. Suspendisse venenatis
          ligula nulla, eget consectetur urna lacinia in.
        </p>
      </div>

      {/* Liste des audios */}
      <h1 className="text-center text-blue-600 text-xl font-bold mb-4">
        Mes Audios
      </h1>
      <div className="space-y-4">
        <AudioPlayer
          title="Lorem ipsum dolor sit amet, consectetur sffgdsf"
          audioSrc="/audio/sample-audio1.mp3"
        />
        <AudioPlayer
          title="Lorem ipsum dolor sit amet, consectetur sffgdsf"
          audioSrc="/audio/sample-audio2.mp3"
        />
        <AudioPlayer
          title="Lorem ipsum dolor sit amet, consectetur sffgdsf"
          audioSrc="/audio/sample-audio3.mp3"
        />
      </div>
    </div>
  );
};

export default Home;
