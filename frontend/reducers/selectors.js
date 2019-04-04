const genreSelector = (movies, genre, genreList) => {

    // const moviesWithGenreNames = movies.forEach(movie => {
    //     movie.genre_ids.map(id => {
    //         return genreList[id].name;
    // })});

    // const numMovies = Object.keys(movies).length
    
    // for(let j = 0; j < numMovies; j++) {
    //     movie[j].genre_ids.map(id => {
    //         return genreList[id].name;
    // })}
    // debugger
    let movieList = []

    movies.filter(movie => {
        // debugger

        const movieGenreList = movie.genre_ids.map(id => {
            return genreList[id].name;
        })

        // debugger

        for(let i = 0; i < movieGenreList.length; i++) {
            // debugger
            if (movieGenreList[i] === genre) {
                movieList.push(movie);
            };
        };
        
    });
    return movieList;
};

export default genreSelector;