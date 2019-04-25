import React from 'react';
import AllMovies from './all_movies';
import genreSelector from '../../reducers/selectors';
// import AllMoviesPage from './all_movies_page'

class MovieIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchList(this.props.listId);
    }

    // componentDidUpdate(prevProps) {
    //     if (Object.values(prevProps.listMovies).length !== Object.values(this.props.listMovies).length) {
    //         this.props.fetchList(this.props.listId);
    //     }
    // }

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
                        createListMovie={this.props.createListMovie}
                        removeListMovie={this.props.removeListMovie}
                        currentUser={this.props.currentUser}
                        listMovies={this.props.listMovies}
                        list={this.props.list}/>
                </div>
            </div>
        )
    }
}

export default MovieIndex;