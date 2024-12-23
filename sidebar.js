import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar__logo">Spotify</h2>
      <div className="sidebar__menu">
        <p>Home</p>
        <p>Search</p>
        <p>Your Library</p>
      </div>
    </div>
  );
}

export default Sidebar;
