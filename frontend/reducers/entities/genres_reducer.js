import { RECEIVE_ALL_GENRES, RECEIVE_GENRE } from '../../actions/genre_actions';
import { RECEIVE_ALL_MOVIES } from '../../actions/movie_actions';
import { RECEIVE_LIST } from '../../actions/list_actions'

const genresReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger
    switch(action.type) {
        case RECEIVE_ALL_MOVIES:
            return action.data.genres;
        case RECEIVE_ALL_GENRES:
            return action.genres
        case RECEIVE_GENRE:
            return Object.assign({}, state, { [action.genre.id]: action.genre });
        default:
            return state;
    }
};

export default genresReducer;