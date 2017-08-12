import {
    GET_GAMES,
    GET_GAMES_SUCCESS,
    GET_GAMES_FAILURE,
    DELETE_GAME,
    DELETE_GAME_SUCCESS,
    DELETE_GAME_FAILURE,
    SET_SEARCH_STRING,
    SHOW_SELECTED_GAME
} from '../constants/games';

// GET_GAMES function will be dispatched within GamesContainer
const getGames = () => {
    return {
        type: GET_GAMES
    }
};

const getGamesSuccess = (games) => {
    return {
        type: GET_GAMES_SUCCESS,
        games
    }
};

const getGamesFailure = () => {
    return {
        type: GET_GAMES_FAILURE
    }
};

// This is called when a user clicks on the delete button
const deleteGame = (id) => {
    return {
        type: DELETE_GAME,
        id
    }
};

const deleteGameSuccess = (games) => {
    return {
        type: DELETE_GAME_SUCCESS,
        games
    }
};

const deleteGameFailure = () => {
    return {
        type: DELETE_GAME_FAILURE
    }
};

const setSearchString = (keyword) => {
    return {
        type: SET_SEARCH_STRING,
        keyword
    }
};

const showSelectedGame = (game) => {
    return {
        type: SHOW_SELECTED_GAME,
        game
    }
};

export {
    getGames,
    getGamesSuccess,
    getGamesFailure,

    deleteGame,
    deleteGameSuccess,
    deleteGameFailure,

    setSearchString,
    showSelectedGame
}
