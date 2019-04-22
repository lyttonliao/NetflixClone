import React from 'react';
import AllMovies from './all_movies';
import genreSelector from '../../reducers/selectors';
// import AllMoviesPage from './all_movies_page'

class MovieIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMovies().then(() => this.props.fetchList(this.props.listId));
        debugger
    }


    render() {
        const movies = Object.values(this.props.movies);
        const { genres } = this.props;
        debugger
        if (movies.length === 0 || this.props.list === undefined) return null;
        return (
            <div className="movies-index-genres">
                <div>
                    <AllMovies
                        actionVideos={genreSelector(movies, 'action', genres)}
                        disneyVideos={genreSelector(movies, 'disney', genres)}
                        scifiVideos={genreSelector(movies, 'scifi', genres)}
                        dramaVideos={genreSelector(movies, 'drama', genres)}
                        superheroVideos={genreSelector(movies,'superhero', genres)}
                        genres={genres}
                        movies={this.props.movies} 
                        list={this.props.list}/>
                </div>
            </div>
        )
    }
}

export default MovieIndex;