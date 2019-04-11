import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMovies } from '../../actions/movie_actions';
import { fetchGenres } from '../../actions/genre_actions';
import MovieIndex from './movie_index';

const mapStateToProps = (state, ownProps) => {
    return {
        movies: state.entities.movies,
        genres: state.entities.genres
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
        // fetchGenres: () => dispatch(fetchGenres()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieIndex));