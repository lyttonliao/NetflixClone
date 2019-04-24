import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_LIST_MOVIE, REMOVE_LIST_MOVIE } from '../../actions/list_movie_actions';
const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_LIST_MOVIE:
            debugger
            let newArr = Object.assign([], Object.values(newState)[0].list_movie_ids);
            newArr.push(action.list_movie.id);
            Object.values(newState)[0].list_movie_ids = newArr;
            debugger
            return newState;
        case REMOVE_LIST_MOVIE:
            debugger
            const index = Object.values(newState)[0].list_movie_ids.indexOf(action.id);
            delete Object.values(newState)[0].list_movie_ids[index];
            debugger
            return newState;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        default:
            return state;
    };
};

export default usersReducer;