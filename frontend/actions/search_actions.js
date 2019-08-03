export const SEARCH = "SEARCH"

export const search = movie_titles => {
    return ({
        type: SEARCH,
        movie_titles
    })
};

export const filterContent = movie_titles => dispatch => {
    return (
        dispatch(search(movie_titles))
    )
}