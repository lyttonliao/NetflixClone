import React from 'react';
import { Link } from 'react-router-dom';

class MovieIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    playVideo() {

    }

    render() {
        const genreList = this.props.movies.genres.map((genre, idx) => {
            return <li className="genre-list" key={idx}>{genre}</li>;
        });

        return(
            <div className="movie-container">
                <div className="movie-box-art">
                    <Link to={`/play/${this.props.movie.id}`}>
                        <img className="movie-image" src={this.props.movie.imageUrl}/>
                    </Link>
                </div>

                <div className="movie-info">
                    <div className="movie-title">
                        {this.props.movie.title}
                    </div>

                    <div className="movie-genre">
                        <ul className="movie-genre-horizontal-list">
                            {genreList}
                        </ul>
                    </div>
                </div>

                <div className="dropdown-info">
                    <i class="fal fa-chevron-down"></i>
                </div>
                
                <div className="add-to-likes">
                    <i class="fal fa-plus-circle"></i>
                </div>
            </div>
        )
    }
}

export default MovieIndexItem;