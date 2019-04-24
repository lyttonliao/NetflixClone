import React from 'react'
import { Link } from 'react-router-dom';

class MovieInfo extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        if (!this.props.movieId) return null;
        const movie = this.props.movies[this.props.movieId]
        const listMovie = this.props.movies[this.props.movieId].list_movie_ids.filter(id => this.props.listMovieIds.includes(id))

        return (
            <div className="movie-dropdown">
                <div className="movie-dropdown-details">
                    <h1>{movie.title}</h1>
                    <h2>{movie.year}</h2>
                    <h2>{movie.description}</h2>
                </div>
                <div className="movie-dropdown-options">
                    <i className="fas fa-play">
                        <Link to={`/play/${movie.id}`}><p> &nbsp; Play</p></Link>
                    </i>

                    {listMovie.length === 1 ?
                        <div className="movie-dropdown-my-list" onClick={() => this.props.removeListMovie(listMovie[0])}>
                            <i className="fas fa-check">
                                <p> &nbsp; My List</p>
                            </i>
                        </div>
                        :
                        <div className="movie-dropdown-my-list" onClick={() => this.props.createListMovie(frontPageMovie)}>
                            <i className="fas fa-plus">
                                <p> &nbsp; My List</p>
                            </i>
                        </div>
                    }
                </div>
            </div>
        )
    }
    // handing down all movie information
    // pass down movie as prop: title, year, description, add in the add/remove from list 
    // pass down the list_movie props to check if movie is a list movie
    // set a dropdown so that on click it renders component
    // maintain a local state to check for which movie is pressed and
    // render that information so that the drop down menu persists if the state
    // is not empty
}

export default MovieInfo;