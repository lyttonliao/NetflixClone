import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movie_actions';
import { fetchGenres } from '../../actions/genre_actions';
import GenreIndex from './genre_index';

const mapStateToProps = (state, ownProps) => {
    const genres = Object.values(state.entities.genres)
    const movies = Object.values(state.entities.movies)
    return {
        genres,
        movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
        fetchGenres: () => dispatch(fetchGenres())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreIndex);