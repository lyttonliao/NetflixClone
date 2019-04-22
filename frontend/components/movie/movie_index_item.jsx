import React from 'react';
import { Link } from 'react-router-dom';
import { createListMovie, removeListMovie } from '../../actions/list_movie_actions';
import { connect } from 'react-redux';
import MovieInfo from './movie_info';

class MovieIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            year: '',
            description: '',
        }

        this.handleLike = this.handleLike.bind(this);
    }

    // setDropDown() {
    //     const that = this;
    // }

    genreList() {
        if (this.props.genres === undefined) return null;
        return this.props.movie.genre_ids.map(id => {
            return <li className="genre-list" key={id}>{this.props.genres[id-1]}</li>
        })
    }

    handleLike() {
        const userMovies = Object.values(this.props.list_movies).filter(list_movie => list_movie.list_id === this.props.list.id)
        const listToMovieIds = Object.values(this.props.list_movies).map(list_movie => list_movie.movie_id)

        if (listToMovieIds.includes(this.props.movie.id)) {
            const movieToDelete = userMovies.filter(list_movie => list_movie.movie_id === this.props.movie.id)
            debugger
            return this.props.removeListMovie(movieToDelete[0].id)
        } else {
            return this.props.createListMovie(this.props.movie)
        }
    }

    render() {
        if (this.props.movie === undefined) return null;

        const listToMovieIds = Object.values(this.props.list_movies).map(list_movie => list_movie.movie_id)
        const checkedIcon = <i className="far fa-check-circle"></i>
        const addIcon = <i className="far fa-plus-square"></i>

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
                    
                    <div className="add-to-likes" onClick={this.handleLike}>
                        {listToMovieIds.includes(this.props.movie.id) ? checkedIcon : addIcon}
                    </div>
                </div>
            </div>
        )
    }
}


const msp = (state, ownProps) => {
    const currentUserId = state.session.currentUserId;
    const listId = state.entities.users[currentUserId].list_id;
    const list = ownProps.list || state.entities.lists[listId]
    return ({
        list_movies: Object.values(state.entities.list_movies),
        list
    })
}

const mdp = dispatch => {
    return {
        createListMovie: (movie) => dispatch(createListMovie(movie)),
        removeListMovie: id => dispatch(removeListMovie(id)),
    }
}

export default connect(msp, mdp)(MovieIndexItem);