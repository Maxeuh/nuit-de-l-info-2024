"use client";

import React, { useRef, useState } from "react";

interface AudioPlayerProps {
  title: string;
  audioSrc: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <button
        onClick={togglePlay}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "#007BFF",
          color: "white",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {isPlaying ? "❚❚" : "▶"}
      </button>
      <div style={{ marginLeft: "10px", flexGrow: 1 }}>
        <p style={{ margin: "0", fontSize: "14px", color: "#007BFF" }}>{title}</p>
      </div>
      <audio ref={audioRef} src={audioSrc}></audio>
    </div>
  );
};

export default AudioPlayer;
