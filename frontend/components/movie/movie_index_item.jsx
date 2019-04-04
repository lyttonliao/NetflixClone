import React from 'react';
import { Link } from 'react-router-dom';

class MovieIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    playVideo() {

    }

    render() {

        return(
            <div className="movie-container">
                {/* <div className="movie-box-art"> */}
                    <Link to={`/play/${this.props.movie.id}`}>
                        <img className="movie-image" src={this.props.movie.imageUrl}/>
                    </Link>
                {/* </div> */}

                <div className="movie-info">
                    <div className="movie-title">
                        {this.props.movie.title}
                    </div>

                    <div className="movie-genre">
                        <ul className="movie-genre-horizontal-list">
                            {this.props.genres}
                        </ul>
                    </div>
                </div>

                <div className="dropdown-info">
                    <i className="fal fa-chevron-down"></i>
                </div>
                
                <div className="add-to-likes">
                    <i className="fal fa-plus-circle"></i>
                </div>
            </div>
        )
    }
}

export default MovieIndexItem;