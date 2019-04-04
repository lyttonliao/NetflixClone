import React from 'react';
import { Link } from 'react-router-dom';

class MovieShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchMovie(this.props.match.params.movieId)
    }

    render() {
        if (this.props.movie === undefined) return null;
        // debugger
        return (
            <div className="video-container">
                <video controls>
                    <source src={this.props.movie.movieUrl} poster={frontPageMovie.imageUrl} preload="metadata" />
                </video>
                <div className="show-back-btn">
                    <Link to='/browse'>
                        <i className="fas fa-arrow-left">
                            <p className='show-to-browse'>Back To Browse</p>
                        </i>
                    </Link>
                </div>
            </div>
        )
    }
}

export default MovieShow;