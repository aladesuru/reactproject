import * as PlayersActionTypes from '../actiontypes/players.js';

export const addPlayer = (name) => {
    return {
        type: PlayersActionTypes.ADD_PLAYERS,
        name
    }
};

export const removePlayer = (index) => {
    return {
        type: PlayersActionTypes.REMOVE_PLAYER,
        index
    }
};

export const updatePlayerScore = (score , index) => {
    return {
        type: PlayersActionTypes.UPDATE_PLAYER_SCORE,
        score,
        index
    }
};