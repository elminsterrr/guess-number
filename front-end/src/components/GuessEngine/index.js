import _ from 'lodash';
import axios from 'axios';
import React, { Component } from 'react';

import Error from '../Error';
import GuessItem from '../GuessItem';
import Success from '../Success';

class GuessEngine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      number: null,
      guesses: [],
      error: null,
      serverStatus: null,
    };
  }

  componentDidMount() {
    const initialGuess = 0;
    axios
      .get('http://localhost:3001/')
      .then(response => {
        const { serverStatus } = response.data;
        this.setState({ number: initialGuess, serverStatus });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { number, result, guesses } = this.state;

    if (number !== prevState.number || prevState.number === 0) {
      if (result !== 'success') {
        if (result === 'lower') {
          const newNumber = number - 1;
          axios
            .post('http://localhost:3001/number', {
              isNumber: newNumber,
            })
            .then(response => {
              const { resultCode } = response.data;
              this.setState({
                result: resultCode,
                number: newNumber,
                guesses: [...guesses, { newNumber, resultCode }],
              });
            });
        } else {
          const newNumber = number + 100;
          axios
            .post('http://localhost:3001/number', {
              isNumber: newNumber,
            })
            .then(response => {
              const { resultCode } = response.data;
              this.setState({
                result: resultCode,
                number: newNumber,
                guesses: [...guesses, { newNumber, resultCode }],
              });
            });
        }
      } else if (result === 'success') {
        console.log(`Success! The secret number is ${number}!`);
      } else {
        console.log(`Sorry! An unexpected error occurred!`);
      }
    }
  }

  render() {
    const { number, result, guesses, error } = this.state;

    return (
      <div>
        {error && <Error error={error} />}
        {!error &&
          guesses.map(guess => (
            <GuessItem
              key={_.uniqueId('id_')}
              resultCode={guess.resultCode}
              newNumber={guess.newNumber}
            />
          ))}
        {!error && result === 'success' && <Success secretNumber={number} />}
      </div>
    );
  }
}

export default GuessEngine;
