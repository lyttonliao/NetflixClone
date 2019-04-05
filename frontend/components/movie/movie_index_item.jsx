import React from 'react';
import { Link } from 'react-router-dom';
// import { createListMovie } from '../../actions/list_movie_actions';
// import { connect } from 'react-redux';

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
                    
                    <div className="add-to-likes" >
                        <i className="far fa-plus-square"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieIndexItem;

// onClick={() => this.props.createListMovie(this.props.movie)}

// const msp = (state, ownProps) => {
//     const lists = Object.values(state.entities.lists)
//     const currentUserId = state.session.currentUserId;
//     const list = lists.filter(list => list.user_id === currentUserId);
//     return ({
//         list_movies: Object.values(state.entities.list_movies),
//         list_id: list.id
//     })
// }

// const mdp = dispatch => {
//     return {
//         createListMovie: (movie) => dispatch(createListMovie(movie))
//     }
// }

// export default connect(msp,mdp)(MovieIndexItem);