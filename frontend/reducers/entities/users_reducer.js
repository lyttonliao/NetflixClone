import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_LIST_MOVIE, REMOVE_LIST_MOVIE } from '../../actions/list_movie_actions';
import merge from "lodash/merge";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        default:
            return state;
    };
};

export default usersReducer;