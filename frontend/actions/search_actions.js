export const SEARCH = "SEARCH"
export const ADD_SEARCH = "ADD_SEARCH"

export const search = movie_titles => {
    return ({
        type: SEARCH,
        movie_titles
    })
};

export const addSearch = search => {
    return ({
        type: ADD_SEARCH,
        current_search: search
    })
}

export const filterContent = movie_titles => dispatch => {
    return (
        dispatch(search(movie_titles))
    )
}

export const currentSearch = search => dispatch => {
    return (
        dispatch(addSearch(search))
    )
}