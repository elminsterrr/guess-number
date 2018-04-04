import _ from 'lodash';
import axios from 'axios';
import React, { Component } from 'react';

class GuessEngine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      number: null,
      guesses: [],
    };
  }

  componentDidMount() {
    const firstGuess = 0;
    axios
      .post('http://localhost:3001/number', {
        isNumber: firstGuess,
      })
      .then(response => {
        const { resultCode } = response.data;
        this.setState({ number: firstGuess });
        this.setState({ result: resultCode });
      })
      .catch(error => console.log(error));
  }

  componentDidUpdate() {
    if (this.state.result !== 'success') {
      if (this.state.result === 'lower') {
        const newNumber = this.state.number - 1;
        axios
          .post('http://localhost:3001/number', {
            isNumber: newNumber,
          })
          .then(response => {
            const { resultCode } = response.data;
            this.setState({
              result: resultCode,
              number: newNumber,
              guesses: [...this.state.guesses, { newNumber, resultCode }],
            });
          });
      } else if (this.state.result === 'higher') {
        const newNumber = this.state.number + 100;
        axios
          .post('http://localhost:3001/number', {
            isNumber: newNumber,
          })
          .then(response => {
            const { resultCode } = response.data;
            this.setState({
              result: resultCode,
              number: newNumber,
              guesses: [...this.state.guesses, { newNumber, resultCode }],
            });
          });
      }
    } else if (this.state.result === 'success') {
      console.log(`Success! The secret number is ${this.state.number}!`);
    } else {
      console.log(`Sorry! Some errors occured!`);
    }
  }

  render() {
    return (
      <div>
        {this.state.guesses.map(guess => (
          <div key={_.uniqueId('id_')}>
            Guess is {guess.newNumber} and the we must search for{' '}
            {guess.resultCode} number!
          </div>
        ))}
      </div>
    );
  }
}

export default GuessEngine;
