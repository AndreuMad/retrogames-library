import Immutable from 'immutable';

import {
    GET_GAMES_SUCCESS,
    GET_GAMES_FAILURE,
    DELETE_GAME_SUCCESS,
    DELETE_GAME_FAILURE,
    SET_SEARCH_STRING,
    SHOW_SELECTED_GAME
} from '../constants/games';

// The initial state is just an empty Map
const initialState = Immutable.Map();

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_GAMES_SUCCESS:
        case DELETE_GAME_SUCCESS:
            // GET_GAMES_SUCCESS case return a new state with the fetched games in the state
            return state.merge({ list: action.games });

        case GET_GAMES_FAILURE:
        case DELETE_GAME_FAILURE:
            // In case of failure it simplies returned a new empty state
            return state.clear();

        case SET_SEARCH_STRING:
            return state.merge({ searchString: action.keyword });

        case SHOW_SELECTED_GAME:
            return state.merge({ selectedGame: action.game });

        default:
            return state;
    }
}
