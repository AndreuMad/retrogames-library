import {
    GET_GAMES,
    GET_GAMES_SUCCESS,
    GET_GAMES_FAILURE
} from '../constants/games';

// GET_GAMES function will be dispatched within GamesContainer
const getGames = () => {
    return {
        type: GET_GAMES
    };
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

export {
    getGames,
    getGamesSuccess,
    getGamesFailure
}
