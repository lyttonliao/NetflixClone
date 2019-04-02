import React from 'react';
import { Link } from 'react-router-dom';

class MovieShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.movieId)
    }

    render() {
        if (this.props.movie === undefined) return null;

        return (
            <div>
                <div className="movie-show-display">
                    <Link to='/browse'>
                        <div className='show-to-browse'></div>
                    </Link>

                    <video src={this.props.movie.video} autoPlay controls ></video>
                </div>
            </div>
        )
    }
}