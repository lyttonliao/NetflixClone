export const SEARCH = "SEARCH"

export const search = movie_titles => {
    debugger
    return ({
        type: SEARCH,
        movie_titles
    })
};

export const filterContent = movie_titles => dispatch => {
    debugger
    return (
        dispatch(search(movie_titles))
    )
}