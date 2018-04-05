import React from 'react';
import './style.css';

const Error = props => (
  <div>
    <p className="Error-message">We are sorry, but something went wrong.</p>
    <p className="Error-message">{props.error && props.error.toString()}!</p>
  </div>
);

export default Error;
