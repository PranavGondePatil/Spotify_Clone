import React from 'react';
import './Body.css';

function Body() {
  const sampleTracks = [
    { name: "Song 1", artist: "Artist 1", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { name: "Song 2", artist: "Artist 2", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    // Add more songs here
  ];

  return (
    <div className="body">
      <div className="body__header">
        <h1>Playlist</h1>
      </div>
      <div className="body__tracklist">
        {sampleTracks.map((track, index) => (
          <div key={index} className="body__track">
            <h2>{track.name}</h2>
            <p>{track.artist}</p>
            <button>Play</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
