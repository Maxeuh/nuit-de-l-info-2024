"use client";

import React, { useRef, useState, useEffect } from "react";

interface AudioPlayerProps {
  title: string;
  audioSrc: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // Progression en secondes
  const [duration, setDuration] = useState(0); // Durée totale en secondes
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fonction pour démarrer/arrêter la lecture
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Met à jour la progression
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
    }
  };

  // Définit la durée totale lors du chargement des métadonnées
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Permet de naviguer dans l'audio via la barre de progression
  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
      setProgress(audioRef.current.currentTime);
    }
  };

  // Formater les secondes en "minutes:secondes"
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="flex flex-col items-center mb-4">
      {/* Bouton Play/Pause */}
      <button
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center text-xl"
      >
        {isPlaying ? "❚❚" : "▶"}
      </button>
      <p className="text-blue-900 text-m mt-2">{title}</p>

      {/* Barre de progression avec timing */}
      <div className="w-full mt-2 flex items-center">
        <span className="text-s text-blue-900 mr-2">{formatTime(progress)}</span>
        <input
          type="range"
          min="0"
          max={duration.toString()}
          value={progress}
          onChange={handleSeek}
          className="w-full"
        />
        <span className="text-s text-blue-900 ml-2">{formatTime(duration)}</span>
      </div>

      {/* Élément audio caché */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      ></audio>
    </div>
  );
};

export default AudioPlayer;
