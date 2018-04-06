import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => (
  <div className="counter-container">
    <button onClick = {() => props.onChange(-1)}>-</button>
    <span>{props.score}</span>
    <button onClick = {() => props.onChange(1)}>+</button>
  </div>
);

Counter.propTypes = {
  score: PropTypes.number.isRequired,
  onChange:PropTypes.func.isRequired,
};

export default Counter;