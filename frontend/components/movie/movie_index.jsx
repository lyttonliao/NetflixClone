import React from 'react';
import AllMovies from './all_movies';
import genreSelector from '../../reducers/selectors';
import NavBarContainer from './../nav_bar_container'

class MovieIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchList(this.props.listId).then(() => this.props.fetchListMovies(this.props.list));
    }

    render() {
        const movies = Object.values(this.props.movies);
        const { genres, logout, currentUser } = this.props;
        if (movies.length === 0 || this.props.list === undefined) return null;
        return (
            <div className="movies-index-genres">
                <NavBarContainer />

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
                        list_movies={this.props.list_movies}
                        list={this.props.list}/>
                </div>
            </div>
        )
    }
}

export default MovieIndex;