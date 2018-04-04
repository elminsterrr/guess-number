import axios from 'axios';
import React, { Component } from 'react';

class GuessEngine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: null,
      result: null,
    };
  }

  componentDidMount() {
    const firstGuess = 5000;
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
            this.setState({ result: resultCode, number: newNumber });
          });
      } else if (this.state.result === 'higher') {
        const newNumber = this.state.number + 1;
        axios
          .post('http://localhost:3001/number', {
            isNumber: newNumber,
          })
          .then(response => {
            const { resultCode } = response.data;
            this.setState({ result: resultCode, number: newNumber });
          });
      }
    } else if (this.state.result === 'success') {
      console.log(`Success! The secret number is ${this.state.number}!`);
    } else {
      console.log(`Sorry! Some errors occured!`);
    }
  }

  render() {
    return <div>Test</div>;
  }
}

export default GuessEngine;
