import SEARCH from '../../actions/search_actions'

const searchReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case SEARCH:
            return action.movie_titles
        default:
            return state
    }
}

export default searchReducer