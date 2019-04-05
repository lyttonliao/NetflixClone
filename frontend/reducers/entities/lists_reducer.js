import { RECEIVE_LIST } from '../../actions/list_actions';

const listsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_LIST: 
            return action.list;
        default:
            return state;
    };
};

export default listsReducer;