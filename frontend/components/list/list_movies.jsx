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
        if (prevProps.match.params.listId !== this.props.match.params.listId) {
            this.props.fetchList(this.props.match.params.listId)
        }
    }

    // hard coding for now until i can get more help

    listMovies () {
        const { list_movies } = this.props;
        const movieIds = Object.values(list_movies).map(listMovie => listMovie.movie_id)
        const movies = movieIds.map(id => this.props.movies[id])

        return movies.map(movie => {
            return <MovieIndexItem movie={movie} key={movie.title} />
        })
    }

    render() {
        const { logout, currentUser, list } = this.props;
        debugger
        if (list === undefined) return null;

        if (list.list_movie_ids.length === 0) {
            return (
                <div className="personal-list">
                    <NavBar logout={logout} currentUser={currentUser} />

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
