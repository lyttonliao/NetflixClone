import React from 'react';
import { Link } from 'react-router-dom';

class MovieIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    playVideo() {

    }

    genreList() {
        // debugger
        return this.props.movie.genre_ids.map(id => {
            return <li className="genre-list{" key={id}>{this.props.genre[id-1]}</li>
            // return this.props.genres[id];
        })

        // return movieGenreList.map((genre, idx) => {
        //     return <li className="genre-list" key={idx}>{genre}</li>;
        // }
    }

    render() {
        // debugger
        return(
            <div className="movie-container">
                <div className="movie-box-art">
                    <Link to={`/play/${this.props.movie.id}`}>
                        <img className="movie-image" src={this.props.movie.imageUrl}/>
                    </Link>
                </div>

                <div className="movie-info-container">
                    <div className="movie-info">
                        <div className="movie-play">
                            <i className="far fa-play-circle"></i>
                        </div>

                        <div className="movie-title">
                            {this.props.movie.title}
                        </div>

                        <div className="movie-genre">
                            <ul className="movie-genre-horizontal-list">
                                {this.genreList()}
                            </ul>
                        </div>
                    </div>


                    <div className="dropdown-info">
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    
                    <div className="add-to-likes">
                        <i className="far fa-plus-square"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieIndexItem;