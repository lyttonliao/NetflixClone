export const fetchListMovies = () => {
    return $.ajax ({
        method: "GET",
        url: "/api/list_movies"
    })
}

export const fetchListMovie = id => {
    return $.ajax ({
        method: "GET",
        url: `/api/list_movies/${id}`,
        // error: err => console.log(err)
    })
}

export const createListMovie = movie => {
    debugger
    return $.ajax ({
        method: "POST",
        url: `/api/list_movies`,
        data: { movie }
    })
}

export const deleteListMovie = id => {
    return $.ajax ({
        method: "DELETE",
        url: `/api/list_movies/${id}`
    })
}