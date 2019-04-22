import React from 'react';
// import { withRouter } from 'react-router-dom';
import NavBar from '../nav_bar';
import MovieIndexItem from '../movie/movie_index_item';

class ListMovies extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchList(this.props.match.params.listId).then(() => this.props.fetchListMovies(this.props.list))
    }

    componentDidUpdate(prevProps) {
        if (Object.values(prevProps.list_movies).length !== Object.values(this.props.list_movies).length) {
            debugger
            this.props.fetchListMovies(this.props.list)
        }
    }
    
    genreList() {
        return Object.values(this.props.genres).map(genre => {
            return genre.name;
        })
    }

    listMovies () {
        const { list_movies } = this.props;
        const movieIds = Object.values(list_movies).map(listMovie => listMovie.movie_id)
        const movies = movieIds.map(id => this.props.movies[id])
        const genres = this.genreList();

        return movies.map(movie => {
            return <MovieIndexItem movie={movie} key={movie.title} genres={genres} />
        })
    }

    render() {
        const { logout, currentUser, list } = this.props;
        debugger
        if (list === undefined) return null;
        debugger
        if (list.list_movie_ids.length === 0) {
            debugger
            return (
                <div className="personal-list">
                    <NavBar logout={logout} currentUser={currentUser} />
                    <div className="movie-categories my-list-show-page">
                        <div className="movie-categories-videos">
                            <h1><p className="my-list-title">My List</p></h1>
                        </div>
                    </div>

                    <div className="empty-personal-list">
                        <div><p>You haven't added any titles to your list yet.</p></div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="personal-list">
                    <NavBar logout={logout} currentUser={currentUser} />

                    <div className="movie-categories my-list-show-page">
                        <div className="movie-categories-videos">
                            <h1><p className="my-list-title">My List</p></h1>
                            <div className="my-list-show-page-movies">
                                {this.listMovies()}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default ListMovies;
