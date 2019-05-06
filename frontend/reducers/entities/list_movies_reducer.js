import { RECEIVE_LIST_MOVIES,
        RECEIVE_LIST_MOVIE,
        REMOVE_LIST_MOVIE,
} from '../../actions/list_movie_actions';

import { RECEIVE_LIST } from '../../actions/list_actions'

const listMoviesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_LIST:
            if (action.data.list_movies === undefined) {
                return state;
            }
            return action.data.list_movies;
        case RECEIVE_LIST_MOVIES:
            if (action.list_movies === undefined) {
                return state;
            }
            return action.list_movies;
        case RECEIVE_LIST_MOVIE:
            return Object.assign({}, state, { [action.list_movie.id]: action.list_movie })
        case REMOVE_LIST_MOVIE:
            let newState = Object.assign({}, state);
            debugger
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}

export default listMoviesReducer;