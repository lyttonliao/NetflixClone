import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_LIST_MOVIE, REMOVE_LIST_MOVIE } from '../../actions/list_movie_actions';
const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_LIST_MOVIE:
            Object.values(newState)[0].list_movie_ids.push(action.list_movie.id)
            Object.values(newState)[0].movie_ids.push(action.list_movie.movie_id);
            return newState;
        case REMOVE_LIST_MOVIE:
            const lmIndex = Object.values(newState)[0].list_movie_ids.indexOf(action.id);
            const mIndex = Object.values(newState)[0].movie_ids.indexOf(action.movie_id);
            Object.values(newState)[0].list_movie_ids.splice(lmIndex, 1);
            Object.values(newState)[0].movie_ids.splice(mIndex, 1);
            return newState;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        default:
            return state;
    };
};

export default usersReducer;