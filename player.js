import React, { useState } from 'react';
import './Player.css';

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"));

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="player">
      <button onClick={handlePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <div className="player__controls">
        {/* Add more player controls here, like volume, skip buttons, etc. */}
      </div>
    </div>
  );
}

export default Player;
