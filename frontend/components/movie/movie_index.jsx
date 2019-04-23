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
    }

    componentDidUpdate(prevProps) {
        debugger
        if (prevProps.currentUser.movie_ids.length !== this.props.currentUser.movie_ids.length) {
            this.render();
        }
    }

    render() {
        const movies = Object.values(this.props.movies);
        const { genres } = this.props;
        if (movies.length === 0 || this.props.list === undefined) return null;
        debugger
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
                        createListMovie={this.props.createListMovie}
                        removeListMovie={this.props.removeListMovie}
                        listMovieIds={this.props.listMovieIds}
                        currentUser={this.props.currentUser}
                        list={this.props.list}/>
                </div>
            </div>
        )
    }
}

export default MovieIndex;