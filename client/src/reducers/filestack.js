import Immutable from 'immutable';

import {
    UPLOAD_PICTURE_SUCCESS,
    UPLOAD_PICTURE_FAILURE
} from '../constants/filestack';

import {
    POST_GAME_SUCCESS,
    POST_GAME_FAILURE
} from '../constants/games';

// The initial state is just a Map
const initialState = Immutable.Map();

export default (state = initialState, action) => {
    switch(action.type) {
        // The url is saved in filestack.url
        case UPLOAD_PICTURE_SUCCESS: {
            return state.merge({ url: action.url });
        }
        // After a game was posted we want to clear the state from the picture url as well
        case UPLOAD_PICTURE_FAILURE:
        case POST_GAME_SUCCESS:
        case POST_GAME_FAILURE: {
            return state.clear();
        }
        default:
            return state;
    }
};
