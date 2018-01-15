import React, { Component } from 'react';
import PropsTypes from 'prop-types';

var Stat = (props) => {
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

Stat.propsTypes = {
  totalplayer: PropsTypes.array.isRequired,
}

var Header = (props) => {
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

Header.propsTypes = {
  title: PropsTypes.string.isRequired,
  initialplayers: PropsTypes.array.isRequired,
};

var Counter = (props) => {
    return(
        <div className="player_score">
            <button onClick = {() => props.onChange(-1)}>-</button>
            <span>{props.score}</span>
            <button onClick = {() => props.onChange(1)}>+</button>
        </div>
    );
};

Counter.propsTypes = {
  score: PropsTypes.number.isRequired,
  onChange:PropsTypes.func.isRequired,
};

var Player = (props) => {
    return(
         <div className="player-container">
           <div className="player">
                  <div className="player_name">{props.name}</div>
                  <div className="player_score">
                      <Counter score = {props.score} onChange = { props.onScorechange }/>
                  </div>
          </div>
        </div>
    );
};

Player.propsTypes = {
  name: PropsTypes.string.isRequired,
  score: PropsTypes.number.isRequired,
  key: PropsTypes.number.isRequired,
  onScorechange : PropsTypes.func.isRequired
};


class AddPlayer extends Component{
  state = {
    name: " ",
  }

  nameChange = (e) => {
    this.setState ({
      name: e.target.value ,
    })
  }

  

  onSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state.name);
  }

  render(){
    return (
      <div className="AddPlayerForm">
        <form>
          <input type="text" name="" placeholder="Add new player" value={ this.state.name } onChange = { this.nameChange }/>
          <input type="submit" name="" value ="Add Player" onClick = { this.onSubmit } />
        </form>
    </div>
    );
  }
}

AddPlayer.propsTypes = {
  add: PropsTypes.func.isRequired,
}


 class App extends Component {
  state = {
      players: [
        {
            name: "Adebola Aladesuru" ,
            score: 50,
        },
        {
            name: "Samuel Olugbemi" ,
            score: 60,
        },
        {
            name: "Kwame Mintah" ,
            score: 70,
        },
        {
            name: "Jordan Rails" ,
            score: 90,
        },
        {
            name: "Anthony wrigth" ,
            score: 40
        }
    ]
  };

  propsTypes = {
    title: PropsTypes.string.isRequired,
    players: PropsTypes.array.isRequired,
  };

  onScorechange = (indexTochange , delta) => {
    this.setState({
      players: this.state.players.map((player , index) => {
        if (index === indexTochange) {
          return {
            ...player,
            score : player.score + delta
          }
        }
        return player ;
      })
    })
  };

 AddPlayer = (newplayer) => {
  this.state.players.pop({name: newplayer ,score: 0 });
  // this.setState({
  //    this.state.players
  // })

 }

  render() {
    return (
    <div className="App">
     <Header  title = {this.props.title} initialplayers = { this.state.players } />
      {
          this.state.players.map((player , index) => 
          <Player 
            name = {player.name} 
            score = {player.score} 
            key = { index } 
            onScorechange = {(delta) => this.onScorechange(index , delta)}/> 
          )
      }
      <AddPlayer  add = { this.AddPlayer } />
    </div>
    );

  };
};

App.defaultProps = {
    title: "SCOREBOARD",
  };

export default App;
