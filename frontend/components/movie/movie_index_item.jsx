import React from 'react';
import { Link } from 'react-router-dom';

class MovieIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="movie-container">
                <div className="movie-box-art">
                    <img src={this.props.movie.movieUrl}/>
                </div>

                <div className="movie-info">
                    <div className="">

                    </div>

                    <div>

                    </div>
                </div>
            </div>
        )
    }
}

export default MovieIndexItem;