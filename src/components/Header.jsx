import React from 'react';
import PropTypes from 'prop-types';
import Stat from './Stat'

const Header = (props) => {
  return(
    <div className="header">
     <Stat totalplayer = { props.initialplayers } />
      <h1> { props.title } </h1>
        <div className="stopwatch">
          <p>STOPWATCH</p>
          <p><span>1</span></p>
          <button className="stop-btn">STOP</button>
          <button className="reset-btn">RESET</button>
        </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  initialplayers: PropTypes.array.isRequired,
};


export default Header;