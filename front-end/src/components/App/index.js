import React from 'react';
import './style.css';

import GuessEngine from '../GuessEngine';

const App = () => (
  <div className="App-container">
    <h3>The Secret Number Finder</h3>
    <GuessEngine />
  </div>
);

export default App;
