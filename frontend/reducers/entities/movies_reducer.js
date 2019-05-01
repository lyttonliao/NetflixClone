import { RECEIVE_ALL_MOVIES, RECEIVE_MOVIE } from '../../actions/movie_actions';
import { RECEIVE_LIST } from '../../actions/list_actions';
import { RECEIVE_LIST_MOVIE, REMOVE_LIST_MOVIE } from '../../actions/list_movie_actions';

const moviesReducer = (state = {}, action) => {
    const newState = Object.assign({}, state);
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_LIST_MOVIE: 
            Object.values(newState)[0].list_movie_ids.push(action.list_movie.id);
            return newState;
        case REMOVE_LIST_MOVIE:
            debugger
            const lmIndex = Object.values(newState)[0].list_movie_ids.indexOf(action.id);
            Object.values(newState)[0].list_movie_ids.splice(lmIndex, 1);
            return newState;
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
