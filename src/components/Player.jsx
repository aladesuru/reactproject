import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

const Player = (props) => {
  // console.log(props);
  return(
    <div className="player-container">
      <div className="player">
        <div className="player_name"><span onClick = {() => props.removePlayers(props.index)}>&#10005;</span>{props.name}</div>
          <div className="player_score">
            <Counter 
              index={props.index}
              score={props.score} 
              updatePlayerScore={props.updatePlayerScore}
              />
          </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  updatePlayerScore : PropTypes.func.isRequired,
  removePlayers: PropTypes.func.isRequired
};

export default Player;