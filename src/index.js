import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var PLAYERS = [
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
            score: 40,
        }
];

ReactDOM.render(<App players = {PLAYERS} />, document.getElementById('root'));
registerServiceWorker();
