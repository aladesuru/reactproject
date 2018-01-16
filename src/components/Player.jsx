import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

const Player = (props) => {
  return(
    <div className="player-container">
      <div className="player">
        <div className="player_name"><span onClick = { props.RemovePlayer }>&#10005;</span>{props.name}</div>
          <div className="player_score">
            <Counter score = {props.score} onChange = { props.onScorechange }/>
          </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onScorechange : PropTypes.func.isRequired
};

export default Player;