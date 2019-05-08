import React from 'react';
// import { withRouter } from 'react-router-dom';
import MovieInfo from '../movie/movie_info';
import NavBar from '../nav_bar';
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

    // componentDidUpdate(prevProps) {
    //     if (Object.values(prevProps.list_movies).length !== Object.values(this.props.list_movies).length) {
    //         this.props.fetchListMovies(this.props.list)
    //     }
    // }
    
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
                    <NavBar logout={logout} currentUser={currentUser} />
                    <div className="movie-categories my-list-show-page">
                        <div className="movie-categories-videos">
                            <h1><p className="my-list-title">My List</p></h1>
                        </div>
                    </div>

                    <div className="empty-personal-list">
                        <div><p>You haven't added any titles to your list yet.</p></div>
                    </div>
                {/* <footer>
                    <div className="social-media-icons">
                        <a href="https://github.com/lyttonliao" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/lytton-liao-55556710b" target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.linkedin.com/in/lytton-liao-55556710b" target="_blank"><i className="fab fa-angellist"></i></a>
                    </div>
                    <div className="personal-info">
                        <p>Created by Lytton Liao</p>
                    </div>

                    <div className="personal-info">
                        <p>Lytton Liao  |  lytton.liao@gmail.com</p>
                    </div>

                    <div className="personal-site">
                        <p>Personal Site</p>
                    </div>

                    <div className="copyright">
                        <p>© 2019 Flixit, Inc.</p>
                    </div>
                </footer> */}
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
                            <MovieInfo movies={this.props.movies} movieId={this.state.playlistId} createListMovie={this.props.createListMovie} removeListMovie={this.props.removeListMovie} list_movies={this.props.list_movies} close={this.closeDropDown} />                            
                        </div>
                    </div>
                {/* <footer>
                    <div className="social-media-icons">
                        <a href="https://github.com/lyttonliao" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/lytton-liao-55556710b" target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.linkedin.com/in/lytton-liao-55556710b" target="_blank"><i className="fab fa-angellist"></i></a>
                    </div>

                    <div className="personal-info">
                        <p>Created by Lytton Liao</p>
                    </div>

                    <div className="personal-info">
                        <a href="mailto:lytton.liao@gmail.com"><p>Email: lytton.liao@gmail.com</p></a>
                    </div>

                    <div className="personal-site">
                        <a href="https://lyttonliao.github.io" target="_blank"><p>Personal Site</p></a>
                    </div>

                    <div className="copyright">
                        <p>© 2019 Flixit, Inc.</p>
                    </div>
                </footer> */}
            </div>
            )
        }
    }
}

export default ListMovies;
