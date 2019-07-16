import * as PlayersActionTypes from '../actiontypes/players.js';

const initialState =  [ 
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
        name: "Jordan Southam-Singh" ,
        score: 90,
    },
    {
        name: "Anthony wrigth" ,
        score: 40
    }
]

const  players = (state=initialState , action) => {
    switch(action.type){
        case PlayersActionTypes.ADD_PLAYERS: 
        return [
            ...state,
            {
                name: action.name,
                score: 0
            }
        ];
        case PlayersActionTypes.REMOVE_PLAYER:
        return [
            ...state.slice(0 , action.index),
            ...state.slice(action.index + 1)
        ];
        case PlayersActionTypes.UPDATE_PLAYER_SCORE:
        return state.map((player , index) => {
            if(index === action.index){
                return {
                    ...player,
                    score: player.score + action.score
                }
            }
            return player;
        });

        default: 
        return state;
    }
}

export default players;