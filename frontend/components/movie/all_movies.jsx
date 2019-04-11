import React from 'react';
import MovieIndexItem from './movie_index_item';
import { withRouter } from 'react-router-dom';

class AllMovies extends React.Component {
    constructor(props) {
        super(props);
        this.playMovie = this.playMovie.bind(this);
        // debugger
    }

    playMovie(movieId) {
        let path = `/play/${movieId}`;
        this.props.history.push(path);
    }

    genreList() {
        // debugger
        return Object.values(this.props.genres).map(genre => {
            return genre.name;
        })
    }

    render() { 
        const frontPageMovie = this.props.movies[1];
        const genres = this.genreList();

        let actionVideos = this.props.actionVideos.map(movie => {
            return <MovieIndexItem movie={movie} key={movie.title} genre={genres}/>;
        });
        let disneyVideos = this.props.disneyVideos.map(movie => {
            return <MovieIndexItem movie={movie} key={movie.title} genre={genres}/>;
        });
        let scifiVideos = this.props.scifiVideos.map(movie => {
            return <MovieIndexItem movie={movie} key={movie.title} genre={genres}/>;
        });
        let dramaVideos = this.props.dramaVideos.map(movie => {
            return <MovieIndexItem movie={movie} key={movie.title} genre={genres}/>;
        });
        let superheroVideos = this.props.superheroVideos.map(movie => {
            return <MovieIndexItem movie={movie} key={movie.title} genre={genres}/>;
        });

        // debugger
        return (
            <div>
                <div className="movie-display">
                    <div className="front-page-movie">
                        <video src={frontPageMovie.imageUrl} autoPlay poster={frontPageMovie.imageUrl} preload="metadata" />
                        <div className="front-page-movie-info">
                            <p className="front-page-movie-quote">A <strong>FLIXIT</strong> FILM</p>
                            <p className="front-page-movie-title">{frontPageMovie.title}</p>
                            <div className="front-page-options">
                                <div className="front-page-movie-play" onClick={() => this.playMovie(frontPageMovie.id)}>
                                    <i className="fas fa-play">
                                        <p>Play</p>
                                    </i>
                                </div>

                                <div className="front-page-movie-my-list">
                                    <i className="fas fa-plus">
                                        <p>My List</p>
                                    </i>
                                </div>
                            </div>
                            <p className="front-page-movie-desc">{frontPageMovie.description}</p>
                        </div>
                    </div>
                </div>

                <div className="movie-categories">
                    <div className="movie-categories-videos">
                        <h1>
                            <p>
                                Action
                            </p>
                        </h1>
                        {actionVideos}
                    </div>                

                    <div className="movie-categories-videos">
                        <h1>
                            <p>
                                Disney
                            </p>
                        </h1> 
                        {disneyVideos}
                    </div>

                    <div className="movie-categories-videos">
                        <h1>
                            <p>
                                Sci-Fi
                            </p>
                        </h1>
                        {scifiVideos}
                    </div>

                    <div className="movie-categories-videos">
                        <h1>
                            <p>
                                Drama
                            </p>
                        </h1>
                        {dramaVideos}
                    </div>

                    <div className="movie-categories-videos">
                        <h1>
                            <p>
                                Superhero
                            </p>
                        </h1>
                        {superheroVideos}
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