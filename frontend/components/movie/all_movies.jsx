import React from 'react';

class AllMovies extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
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

        return (
            <div>
                <div className="movie-display">
                    <div className="front-page-movie">
                        <video src={frontPageMovie.movieUrl} autoPlay control />
                        <h2 className="front-page-movie-title">Must see film</h2>
                        <h1 className="front-page-movie-title">{frontPageMovie.title}</h1>
                        <h3 className="front-page-movie-desc">{frontPageMovie.description}</h3>

                    </div>



                </div>
            </div>
        )
    }
}

export default AllMovies;