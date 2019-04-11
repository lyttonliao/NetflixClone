import { RECEIVE_ALL_MOVIES, RECEIVE_MOVIE } from '../../actions/movie_actions';
import { RECEIVE_LIST } from '../../actions/list_actions';

const moviesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_LIST:
            return action.data.movies;
        case RECEIVE_ALL_MOVIES:
            return action.data.movies;
        case RECEIVE_MOVIE:
            return Object.assign({}, state, { [action.movie.id]: action.movie })
        default:
            return state;
    }
}

export default moviesReducer;
