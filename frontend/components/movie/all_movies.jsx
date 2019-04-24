import React from 'react';
import MovieIndexItem from './movie_index_item';
import MovieInfo from './movie_info';
import { withRouter, Link } from 'react-router-dom';

class AllMovies extends React.Component {
    constructor(props) {
        super(props);
        this.playMovie = this.playMovie.bind(this);
        this.state = {
            playlistId: null,
            actionId: null,
            disneyId: null,
            scifiId: null,
            dramaId: null,
            superheroId: null,
        }
    }

    // componentDidUpdate(prevProps) {
    //     debugger
    //     if (prevProps.currentUser.movie_ids.length !== this.props.currentUser.movie_ids.length) {
    //         this.props.fetchList(this.props.listId);
    //     }
    // }

    setDropDown(id) {
        const that = this;
        return (movieId) => {
            if (that.state[id]) {
                that.setState({
                    [id]: movieId
                })
            } else {
                that.setState({
                    playlistId: null,
                    actionId: null,
                    disneyId: null,
                    scifiId: null,
                    dramaId: null,
                    superheroId: null,
                });
                that.setState({
                    [id]: movieId
                })
            }
        }
    }

    playMovie(movieId) {
        let path = `/play/${movieId}`;
        this.props.history.push(path);
    }

    genreList() {
        return Object.values(this.props.genres).map(genre => {
            return genre.name;
        })
    }

    render() { 
        const frontPageMovie = this.props.movies[1];
        const genres = this.genreList();
        
        if (this.props.movies.length === 0) return null;
        const frontPageListMovies = frontPageMovie.list_movie_ids.filter(id => this.props.listMovieIds.includes(id))
        const playlistMovies = Object.values(this.props.movies).filter(movie => this.props.currentUser.movie_ids.includes(movie.id))
        
        debugger

        // let playlistDrop = <MovieInfo movies={this.props.movies} movieId={this.state.playlistId} createListMovie={this.props.createListMovie} removeListMovie={this.props.removeListMovie} listMovieIds={this.props.listMovieIds}/>
        // let actionDrop = <MovieInfo movies={this.props.movies} movieId={this.state.actionId} createListMovie={this.props.createListMovie} removeListMovie={this.props.removeListMovie} listMovieIds={this.props.listMovieIds}/>
        // let disneyDrop = <MovieInfo movies={this.props.movies} movieId={this.state.disneyId} createListMovie={this.props.createListMovie} removeListMovie={this.props.removeListMovie} listMovieIds={this.props.listMovieIds}/>
        // let scifiDrop = <MovieInfo movies={this.props.movies} movieId={this.state.scifiId} createListMovie={this.props.createListMovie} removeListMovie={this.props.removeListMovie} listMovieIds={this.props.listMovieIds}/>
        // let dramaDrop = <MovieInfo movies={this.props.movies} movieId={this.state.dramaId} createListMovie={this.props.createListMovie} removeListMovie={this.props.removeListMovie} listMovieIds={this.props.listMovieIds}/>
        // let superheroDrop = <MovieInfo movies={this.props.movies} movieId={this.state.superheroId} createListMovie={this.props.createListMovie} removeListMovie={this.props.removeListMovie} listMovieIds={this.props.listMovieIds}/>

        let playlistVideos = playlistMovies.map(movie => {
            return <MovieIndexItem movie={movie} key={"0-" + movie.title} genres={genres} list={this.props.list} setDropDown={this.setDropDown('playlistId')} droppedMovie={this.state.playlistId}/>;
        })
        let actionVideos = this.props.actionVideos.map(movie => {
            return <MovieIndexItem movie={movie} key={"1-" + movie.title} genres={genres} list={this.props.list} setDropDown={this.setDropDown('actionId')} droppedMovie={this.state.actionId}/>;
        });
        let disneyVideos = this.props.disneyVideos.map(movie => {
            return <MovieIndexItem movie={movie} key={"2-" + movie.title} genres={genres} list={this.props.list} setDropDown={this.setDropDown('disneyId')} droppedMovie={this.state.disneyId}/>;
        });
        let scifiVideos = this.props.scifiVideos.map(movie => {
            return <MovieIndexItem movie={movie} key={"3-" + movie.title} genres={genres} list={this.props.list} setDropDown={this.setDropDown('scifiId')} droppedMovie={this.state.scifiId}/>;
        });
        let dramaVideos = this.props.dramaVideos.map(movie => {
            return <MovieIndexItem movie={movie} key={"4-" + movie.title} genres={genres} list={this.props.list} setDropDown={this.setDropDown('dramaId')} droppedMovie={this.state.dramaId}/>;
        });
        let superheroVideos = this.props.superheroVideos.map(movie => {
            return <MovieIndexItem movie={movie} key={"5-" + movie.title} genres={genres} list={this.props.list} setDropDown={this.setDropDown('superheroId')} droppedMovie={this.state.superheroId}/>;
        });
        debugger
        return (
            <div>
                <div className="movie-display">
                    <div className="front-page-movie">
                        <video src={frontPageMovie.movieUrl} autoPlay poster={frontPageMovie.imageUrl}/>
                        <div className="front-page-movie-info">
                            <p className="front-page-movie-quote">A <strong>FLIXIT</strong> FILM</p>
                            <p className="front-page-movie-title">{frontPageMovie.title}</p>
                            <div className="front-page-options">
                                <div className="front-page-movie-play">
                                    <i className="fas fa-play">
                                        <Link to={`/play/${frontPageMovie.id}`}><p>Play</p></Link>
                                    </i>
                                </div>

                                {frontPageListMovies.length === 1 ? 
                                    <div className="front-page-movie-my-list" onClick={() => this.props.removeListMovie(frontPageListMovies[0])}>
                                        <i className="fas fa-check">
                                            <p>My List</p>
                                        </i>
                                    </div>
                                    :
                                    <div className="front-page-movie-my-list" onClick={() => this.props.createListMovie(frontPageMovie)}>
                                        <i className="fas fa-plus">
                                            <p>My List</p>
                                        </i>
                                    </div> 
                                }
                            </div>
                            <p className="front-page-movie-desc">{frontPageMovie.description}</p>
                        </div>
                    </div>
                </div>

                <div className="movie-categories">
                    <div id="movie-categories-0" className="movie-categories-videos">
                        <h1>
                            <p>
                                My List
                            </p>
                        </h1>
                        <div id="movie-row-0" className="movie-row">
                            {playlistVideos}
                        </div>
                        <MovieInfo movies={this.props.movies} movieId={this.state.playlistId} createListMovie={this.props.createListMovie} removeListMovie={this.props.removeListMovie} listMovieIds={this.props.listMovieIds} />
                    </div>

                    <div id="movie-categories-1" className="movie-categories-videos">
                        <h1>
                            <p>
                                Action
                            </p>
                        </h1>
                        <div id="movie-row-1" className="movie-row">
                            {actionVideos}
                        </div>
                        <MovieInfo movies={this.props.movies} movieId={this.state.actionId} createListMovie={this.props.createListMovie} removeListMovie={this.props.removeListMovie} listMovieIds={this.props.listMovieIds} />
                    </div>                

                    <div id="movie-categories-2" className="movie-categories-videos">
                        <h1>
                            <p>
                                Disney
                            </p>
                        </h1> 
                        <div id="movie-row-2" className="movie-row">
                            {disneyVideos}
                        </div>
                        <MovieInfo movies={this.props.movies} movieId={this.state.disneyId} createListMovie={this.props.createListMovie} removeListMovie={this.props.removeListMovie} listMovieIds={this.props.listMovieIds} />
                    </div>

                    <div id="movie-categories-3" className="movie-categories-videos">
                        <h1>
                            <p>
                                Sci-Fi
                            </p>
                        </h1>
                        <div id="movie-row-3" className="movie-row">
                            {scifiVideos}
                        </div>
                        <MovieInfo movies={this.props.movies} movieId={this.state.scifiId} createListMovie={this.props.createListMovie} removeListMovie={this.props.removeListMovie} listMovieIds={this.props.listMovieIds} />
                    </div>

                    <div id="movie-categories-4" className="movie-categories-videos">
                        <h1>
                            <p>
                                Drama
                            </p>
                        </h1>
                        <div id="movie-row-4" className="movie-row">
                            {dramaVideos}
                        </div>
                        <MovieInfo movies={this.props.movies} movieId={this.state.dramaId} createListMovie={this.props.createListMovie} removeListMovie={this.props.removeListMovie} listMovieIds={this.props.listMovieIds} />
                    </div>

                    <div id="movie-categories-5" className="movie-categories-videos">
                        <h1>
                            <p>
                                Superhero
                            </p>
                        </h1>
                        <div id="movie-row-5" className="movie-row">
                            {superheroVideos}
                        </div>
                        <MovieInfo movies={this.props.movies} movieId={this.state.superheroId} createListMovie={this.props.createListMovie} removeListMovie={this.props.removeListMovie} listMovieIds={this.props.listMovieIds} />
                    </div>
                </div>

                <footer>
                    <div className="social-media-icons">
                        <a href="https://github.com/lyttonliao"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/lytton-liao-55556710b"><i className="fab fa-linkedin"></i></a>
                    </div>
                    <div className="personal-info">
                        <p>Created by Lytton Liao</p>
                    </div>

                    <div className="personal-info">
                        <p>Lytton Liao  |  lytton.liao@gmail.com</p>
                    </div>
                    <div className="copyright">
                        <p>© 2019 Flixit, Inc.</p>
                    </div>
                </footer>

            </div>
        )
    }
}

export default withRouter(AllMovies);