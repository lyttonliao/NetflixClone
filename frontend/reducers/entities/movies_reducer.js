import { RECEIVE_ALL_MOVIES, RECEIVE_MOVIE } from '../../actions/movie_actions';

const moviesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_MOVIES:
            return action.movies;
        case RECEIVE_MOVIE:
            return Object.assign({}, state, { [action.movie.id]: action.movie })
        default:
            return state;
    }
}

export default moviesReducer;
