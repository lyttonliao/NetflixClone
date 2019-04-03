import React from 'react';
import AllMovies from './all_movies';
import { genreSelector } from '../../reducers/selectors';
// import AllMoviesPage from './all_movies_page'

class MovieIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchGenres();
        this.props.fetchMovies();
    }


    render() {
        const movies = Object.values(this.props.movies);
        if (movies.length === 0) return null;

        return (
            <div className="movies-index-genres">
                <div>
                    <AllMovies
                        actionVideos={genreSelector(movies, 'action')}
                        danceVideos={genreSelector(movies, 'dance')}
                        scifiVideos={genreSelector(movies,'scifi')}
                        dramaVideos={genreSelector(movies,'drama')}
                        superheroVideos={genreSelect(movies,'superhero')}
                        movies={this.props.movies} />
                </div>
            </div>
        )
    }
}

export default MovieIndex;