import React from 'react';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Player from './components/Player';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Body />
      <Player />
    </div>
  );
}

export default App;
