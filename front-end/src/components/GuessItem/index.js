import React, { Component } from 'react';
import './style.css';

class GuessItem extends Component {
  render() {
    const { newNumber, resultCode } = this.props;

    if (resultCode === 'success') {
      return <div />;
    }

    return (
      <div>
        Guess is <span className="GuessItem-span">{newNumber}</span> and we must
        search for the <span className="GuessItem-span">{resultCode}</span>{' '}
        number!
      </div>
    );
  }
}

export default GuessItem;
