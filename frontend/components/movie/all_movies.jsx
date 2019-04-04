import React from 'react';
import { withRouter } from 'react-router-dom';

class AllMovies extends React.Component {
    constructor(props) {
        super(props);
        this.playMovie = this.playMovie.bind(this);
        // debugger
    }
    
    componentDidMount() {
        
    }

    playMovie(movieId) {
        let path = `/play/${movieId}`;
        this.props.history.push(path)
    }

    render() {
        debugger
        const frontPageMovie = this.props.movies[1];

        let actionVideos = this.props.actionVideos.map(movie => {
            return <MovieIndexItem movie={movie} key={movie.title} />;
        });
        let danceVideos = this.props.danceVideos.map(movie => {
            return <MovieIndexItem movie={movie} key={movie.title} />;
        });
        let scifiVideos = this.props.scifiVideos.map(movie => {
            return <MovieIndexItem movie={movie} key={movie.title} />;
        });
        let dramaVideos = this.props.dramaVideos.map(movie => {
            return <MovieIndexItem movie={movie} key={movie.title} />;
        });
        let superheroVideos = this.props.superheroVideos.map(movie => {
            return <MovieIndexItem movie={movie} key={movie.title} />;
        });

        debugger
        return (
            <div>
                <div className="movie-display">
                    <div className="front-page-movie">
                        <video src={frontPageMovie.imageUrl} controls />
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

                    <div className="movie-categories">
                        <div className="actionVideos">
                            {actionVideos}
                        </div>                

                        <div className="danceVideos">
                            {danceVideos}
                        </div>

                        <div className="scifiVideos">
                            {scifiVideos}
                        </div>

                        <div className="dramaVideos">
                            {dramaVideos}
                        </div>

                        <div className="superheroVideos">
                            {superheroVideos}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(AllMovies);