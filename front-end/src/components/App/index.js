import React from 'react';
import './style.css';

import GuessEngine from '../GuessEngine';

const App = () => (
  <div className="App-container">
    <p>The Secret Number Finder has started.</p>
    <GuessEngine />
  </div>
);

export default App;
