import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => {
  return(
  <div className="counter-container">
    <button onClick = {() => props.updatePlayerScore(-1 , props.index )}>-</button>
    <span>{props.score}</span>
    <button onClick = {() => props.updatePlayerScore(1 , props.index) }>+</button>
  </div>
  )
}

Counter.propTypes = {
  score: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  updatePlayerScore:PropTypes.func.isRequired,
};

export default Counter;