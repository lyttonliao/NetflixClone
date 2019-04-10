import { RECEIVE_LIST_MOVIES,
        RECEIVE_LIST_MOVIE,
        REMOVE_LIST_MOVIE,
} from '../../actions/list_movie_actions';

const listMoviesReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger
    switch(action.type) {
        case RECEIVE_LIST_MOVIES:
            return action.list_movies;
        case RECEIVE_LIST_MOVIE:
            return Object.assign({}, state, { [action.list_movie.id]: action.list_movie })
        case REMOVE_LIST_MOVIE:
            let newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}

export default listMoviesReducer;