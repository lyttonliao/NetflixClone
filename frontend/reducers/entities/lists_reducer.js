import { RECEIVE_LIST } from '../../actions/list_actions';
import { RECEIVE_LIST_MOVIE } from '../../actions/list_movie_actions';

const listsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_LIST: 
        debugger
            return Object.assign({}, state, { [action.data.list.id]: action.data.list });
        default:
            return state;
    };
};

export default listsReducer;