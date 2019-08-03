import { SEARCH } from '../../actions/search_actions'

const searchReducer = (state = [], action) => {
    Object.freeze(state);
    debugger
    switch(action.type) {
        case SEARCH:
            debugger
            return action.movie_titles
        default:
            return state
    }
}

export default searchReducer