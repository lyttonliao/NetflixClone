import React from 'react';
import { Link } from 'react-router-dom';
import { createListMovie, removeListMovie } from '../../actions/list_movie_actions';
import { connect } from 'react-redux';

class MovieIndexItem extends React.Component {
    constructor(props) {
        super(props);

        // this.handleAddLike = this.handleAddLike.bind(this);
    }

    genreList() {
        if (this.props.genres === undefined) return null;

        return this.props.movie.genre_ids.map(id => {
            return <li className="genre-list{" key={id}>{this.props.genre[id-1]}</li>
        })
    }

    // handleAddLike() {
    //     this.props.createListMovie(this.props.movie)
    // }

    render() {
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
                    
                    <div className="add-to-likes" onClick={() => this.props.createListMovie(this.props.movie)}>
                        <i className="far fa-plus-square"></i>
                    </div>
                </div>
            </div>
        )
    }
}


const msp = state => {
    const lists = Object.values(state.entities.lists)
    const currentUserId = state.session.currentUserId;
    const list = lists.filter(list => list.user_id === currentUserId);
    debugger
    return ({
        list_movies: Object.values(state.entities.list_movies),
        list
    })
}

const mdp = dispatch => {
    return {
        createListMovie: (movie) => dispatch(createListMovie(movie)),
        removeListMovie: id => dispatch(removeListMovie(id))
    }
}

export default connect(msp, mdp)(MovieIndexItem);