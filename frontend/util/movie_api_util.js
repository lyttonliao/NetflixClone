export const fetchMovies = () => {
    return $.ajax ({
        method: "GET",
        url: "/api/movies",
    })
}

export const fetchMovie = id => {
    return $.ajax({
        method: "GET",
        url: `/api/movies/${id}`,
    })
}

// export const createMovie = movie => {
//     return $.ajax({
//         method: "POST",
//         url: `/api/movies/${movie.id}`,
//         data: { movie }
//     })
// }

