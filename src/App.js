import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {


    return (
       <div className="App">
        <div className="header">
        	<div className="totalpoint">
        		<p>PLAYER: <span> 2</span></p>
        		<p> TOTAL POINT:<span> 108 </span></p>
        	</div>
        	<h1>SCOREBOARD</h1>
        	<div className="stopwatch">
        		<p>STOPWATCH</p>
        		<p><span>1</span></p>
        		<button className="stop-btn">STOP</button>
        		<button className="reset-btn">RESET</button>
        	</div>
        </div>
        <div className="player-container">
        	<div className="player">
        		<div className="player_name">Adebola</div>
        		<div className="player_score">
        			<button>-</button><span>34</span><button>+</button>
        		</div>
        	</div>
        </div>

        <div className="player-container">
        	<div className="player">
        		<div className="player_name">Kwame</div>
        		<div className="player_score">
        			<button>-</button><span>34</span><button>+</button>
        		</div>
        	</div>
        </div>
        
      </div>
    );
  }
}


// var user = {
//   firstName: "Adebola",
//   lastName: "ALADESURU"
// };

// function formatName(user)
// {
//   return (user.firstName + " " + user.lastName)
// }

// const App = <h1> Hello , {formatName(user)}</h1> ;

export default App;
