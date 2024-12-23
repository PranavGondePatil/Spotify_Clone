import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1>Spotify Clone</h1>
      <div className="header__search">
        <input type="text" placeholder="Search for artists, songs, or podcasts" />
      </div>
    </div>
  );
}

export default Header;
