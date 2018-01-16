import React from 'react';
import PropTypes from 'prop-types';

const Stat = (props) => {
  var totalPlayer = props.totalplayer.length ;
  var totalPoint = props.totalplayer.reduce((total , player) => {
    return total + player.score;
  } , 0);

return(
  <div className="totalpoint">
    <div>
      <p>PLAYER: <span> { totalPlayer }</span></p>
        <p> TOTAL POINT:<span> {totalPoint} </span></p>
    </div>
  </div>
    );
}

Stat.propTypes = {
  totalplayer: PropTypes.array.isRequired,
}

export default Stat;