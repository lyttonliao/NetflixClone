import React from 'react';
import MovieInfo from '../movie/movie_info';
import NavBarContainer from '../nav_bar_container';
import MovieIndexItem from '../movie/movie_index_item';

class ListMovies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playlistId: null
        }
        this.closeDropDown = this.closeDropDown.bind(this);

    }

    componentDidMount() {
        this.props.fetchList(this.props.match.params.listId).then(() => this.props.fetchListMovies(this.props.list))
    }
    
    genreList() {
        return Object.values(this.props.genres).map(genre => {
            return genre.name;
        })
    }

    setDropDown(id) {
        const that = this;
        return (movieId) => {
            that.setState({
                [id]: movieId
            })
        }
    }

    closeDropDown() {
        this.setState({
            playlistId: null
        })
    }

    listMovies () {
        const { list_movies } = this.props;
        const movieIds = Object.values(list_movies).map(listMovie => listMovie.movie_id)
        const movies = movieIds.map(id => this.props.movies[id])
        const genres = this.genreList();

        return movies.map(movie => {
            return <MovieIndexItem movie={movie} key={movie.title} genres={genres} setDropDown={this.setDropDown('playlistId')} droppedMovie={this.state.playlistId}/>
        })
    }

    render() {
        const { logout, currentUser, list } = this.props;
        if (list === undefined) return null;

        if (Object.values(list).length === 0) {
            return (
                <div className="personal-list">
                    <NavBarContainer />
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
                    <NavBarContainer />

                    <div className="movie-categories my-list-show-page">
                        <div className="movie-categories-videos">
                            <h1><p className="my-list-title">My List</p></h1>
                            <div className="my-list-show-page-movies">
                                {this.listMovies()}
                            </div>
                            <MovieInfo movies={this.props.movies} movieId={this.state.playlistId} createListMovie={this.props.createListMovie} removeListMovie={this.props.removeListMovie} list_movies={this.props.list_movies} close={this.closeDropDown} />                            
                        </div>
                    </div>
            </div>
            )
        }
    }
}

export default ListMovies;
