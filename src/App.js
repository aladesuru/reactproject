import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



var Header = (props) => {
    return(
    <div className="header">
        <div className="totalpoint">
            <p>PLAYER: <span> 2</span></p>
            <p> TOTAL POINT:<span> 108 </span></p>
        </div>

        <h1>{props.title}</h1>
        <div className="stopwatch">
            <p>STOPWATCH</p>
            <p><span>1</span></p>
            <button className="stop-btn">STOP</button>
            <button className="reset-btn">RESET</button>
        </div>
    </div>
    );
};

var Counter = (props) => {
    return(
        <div className="player_score">
            <button>-</button><span>{props.score}</span><button>+</button>
        </div>
    );
};

var Player = (props) => {
    return(
         <div className="player">
                <div className="player_name">{props.name}</div>
                <div className="player_score">
                     <Counter score = {props.score} />
                </div>
        </div>
    );
};

var Application = (props) => {
    return (
       <div className="App">
       <Header  title = {props.title} />
        {
            props.players.map((player) => {
           return(
                    <div className="player-container">
                        <Player name = {player.name} score = {player.score} />
                    </div>
                );
            })
        }

      </div>
    );
};


Application.defaultProps = {
    title: "SCOREBOARD",
};





// class App extends Component {
//   render() {
    
//   }
// }

export default Application;
