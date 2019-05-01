import { RECEIVE_LIST } from '../../actions/list_actions';
import { RECEIVE_LIST_MOVIE, REMOVE_LIST_MOVIE } from '../../actions/list_movie_actions';

const listsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_LIST_MOVIE:
            Object.values(newState)[0].list_movie_ids.push(action.list_movie.id);
            return newState;
        case REMOVE_LIST_MOVIE:
            const index = Object.values(newState)[0].list_movie_ids.indexOf(action.id);
            Object.values(newState)[0].list_movie_ids.splice(index, 1);
            return newState;
        case RECEIVE_LIST: 
            return Object.assign({}, state, { [action.data.list.id]: action.data.list });
        default:
            return state;
    };
};

export default listsReducer;