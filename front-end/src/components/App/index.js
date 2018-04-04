import React, { Component } from 'react';
import GuessEngine from '../GuessEngine';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <h3>The Secret Number Finder</h3>
        <GuessEngine />
      </div>
    );
  }
}

export default App;
