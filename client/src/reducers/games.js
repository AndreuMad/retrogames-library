import Immutable from 'immutable';

import {
    GET_GAMES_SUCCESS,
    GET_GAMES_FAILURE
} from '../constants/games';

// The initial state is just an empty Map
const initialState = Immutable.Map();

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_GAMES_SUCCESS:
            // GET_GAMES_SUCCESS case return a new state with the fetched games in the state
            return state.merge({ list: action.games });
        case GET_GAMES_FAILURE:
            // In case of failure it simplies returned a new empty state
            return state.clear();
        default:
            return state;
    }
}
