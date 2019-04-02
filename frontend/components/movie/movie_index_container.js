import { connect } from 'react-redux';
import Movie from './movie_index';
import { fetchMovies } from '../../actions/movie_actions';

const msp = (state) => {
    // debugger
    return ({
        movie: state.entities.movies
    })
}

const mdp = dispatch => {
    return ({
        fetchMovies: () => dispatch(fetchMovies()),
    })
}

export default connect(msp, mdp)(Movie);