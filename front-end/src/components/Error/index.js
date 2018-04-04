import React from 'react';
import './style.css';

const Error = props => (
  <div>
    <p className="Error-message">Error message: {props.error.toString()}!</p>
  </div>
);

export default Error;
