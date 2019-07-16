import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import * as playerActions from '../actions/players';
import {connect} from 'react-redux';
import Header from './Header' ;
import Player from './Player' ;
import AddPlayer from './Addplayer';

class Content extends Component {
  
  render() {
    const {dispatch , players}=this.props;

    const addplayers = bindActionCreators(playerActions.addPlayer , dispatch);
    const removePlayers = bindActionCreators(playerActions.removePlayer , dispatch);
    const updatePlayerScore = bindActionCreators(playerActions.updatePlayerScore , dispatch);

    const playerComponent = players.map((player , index ) => {
      return (
        <Player 
          index={index}
          name={player.name}
          score={player.score}
          key={index}
          updatePlayerScore={updatePlayerScore}
          removePlayers={removePlayers}
        />
      )
    })

    return (
      <div>
         <Header  title={this.props.title} players={ players } />
          {
            playerComponent
          }
          <AddPlayer  addplayers={addplayers} />
      </div>
    );

  };
};

Content.defaultProps = {
    title: "SCOREBOARD",
  };

const mapStateToProps = state => (
  {
    players: state
  }
);

export default connect(mapStateToProps) (Content);