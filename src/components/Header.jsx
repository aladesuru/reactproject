import React from 'react';
import PropTypes from 'prop-types';
import Stat from './Stat';
import Stopwatch from './Stopwatch';

const Header = (props) => {
  return(
    <div className="header">
     <Stat totalplayer = { props.players } />
      <h1> { props.title } </h1>
        <Stopwatch />
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired,
};


export default Header;