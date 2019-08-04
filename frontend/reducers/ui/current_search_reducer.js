import { ADD_SEARCH } from '../../actions/search_actions'

const searchReducer = (state = "", action) => {
    Object.freeze(state);
    switch (action.type) {
        case ADD_SEARCH:
            return action.current_search
        default:
            return state
    }
}

export default searchReducer