import React from 'react';
import AllMovies from './all_movies';
import genreSelector from '../../reducers/selectors';
// import AllMoviesPage from './all_movies_page'

class MovieIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchGenres();
        // debugger
        this.props.fetchMovies();
    }


    render() {
        const movies = Object.values(this.props.movies);
        const { genres } = this.props;
        if (movies.length === 0) return null;

        return (
            <div className="movies-index-genres">
                <div>
                    <AllMovies
                        actionVideos={genreSelector(movies, 'action', genres)}
                        danceVideos={genreSelector(movies, 'dance', genres)}
                        scifiVideos={genreSelector(movies,'scifi',genres)}
                        dramaVideos={genreSelector(movies,'drama',genres)}
                        superheroVideos={genreSelector(movies,'superhero',genres)}
                        genres={genres}
                        movies={this.props.movies} />
                </div>
            </div>
        )
    }
}

export default MovieIndex;