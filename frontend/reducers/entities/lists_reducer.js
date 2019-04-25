import { RECEIVE_LIST } from '../../actions/list_actions';
import { RECEIVE_LIST_MOVIE } from '../../actions/list_movie_actions';

const listsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        // case RECEIVE_LIST_MOVIE:
        //     oldList = Object.values(newState)[0].list_movie_ids;
        //     oldList.push(action.list_movie.id);
        //     return newState;
        case RECEIVE_LIST: 
            return Object.assign({}, state, { [action.data.list.id]: action.data.list });
        default:
            return state;
    };
};

export default listsReducer;