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
            <div className="movie-info-dropdown">
                <div className="movie-dropdown">
                    <div className="movie-dropdown-details">
                        <h1>{movie.title}</h1>
                        <h2>{movie.year}</h2>
                        <h2>{movie.description}</h2>
                    </div>
                    <div className="movie-dropdown-options">
                        <Link to={`/play/${movie.id}`}>
                            <i id="dropdown-info-play" className="fas fa-play"><p> &nbsp; Play</p></i>
                        </Link>

                        {listMovie.length === 1 ?
                            <div className="movie-dropdown-my-list" onClick={() => this.props.removeListMovie(listMovie[0])}>
                                <i id="dropdown-info-check" className="fas fa-check">
                                    <p> &nbsp; My List</p>
                                </i>
                            </div>
                            :
                            <div className="movie-dropdown-my-list" onClick={() => this.props.createListMovie(movie)}>
                                <i id="dropdown-info-check" className="fas fa-plus">
                                    <p> &nbsp; My List</p>
                                </i>
                            </div>
                        }
                    </div>
                </div>

                <div className="movie-dropdown-image">
                    <img src={movie.imageUrl}/>
                    <Link to={`/play/${movie.id}`}><i className="fas fa-times" onClick={this.props.close}></i></Link>
                </div>
                
                {/* <div className="movie-dropdown-lin-gradient"></div> */}
            </div>
        )
    }
}

export default MovieInfo;