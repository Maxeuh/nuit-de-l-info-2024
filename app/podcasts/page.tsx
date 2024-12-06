"use client";

import React from "react";
import AudioPlayer from "../../components/Audio/AudioPlayer";

const Home: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen md:justify-center">
      {/* Image de fond */}
      
      {/* Contenu superposé */}
      <div className="absolute inset-0 flex flex-col items-center bg-no-repeat bg-contain md:w-1/3 text-white text-center space-y-8 z-10" style={{ backgroundImage: "url('bg/bg-reverse.png')" }}>/
        <img
          src="voice-assistant.png"
          alt="Microphone"
          className="w-12 h-12 mt-4"
        />
        <h1 className="text-xl font-bold">
          Plongez avec nous pour une expérience éclaboussante
        </h1>

        
        <div className="space-y-4">
          <AudioPlayer
            title="Podcast 1"
            audioSrc="/audio/Podcast 1.mp3"
          />
          <AudioPlayer
            title="Podcast 2"
            audioSrc="/audio/PODCAST-AUDIO-Frédéric Le Moigne.mp3"
          />
        </div>
      </div>
      </div>
  );
};

export default Home;