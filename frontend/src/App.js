import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import DogsAndPuppies from './DogsandPuppies.js'
import Cats from './Cats.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <DogsAndPuppies />
      <Cats />
    </div>
  );
}

export default App;
