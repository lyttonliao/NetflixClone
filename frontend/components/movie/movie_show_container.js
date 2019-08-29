import { connect } from 'react-redux';
import MovieShow from './movie_show';
import { fetchMovie } from '../../actions/movie_actions';
// import { clearSearch } from '../../actions/search_actions'
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    return ({
        movie: state.entities.movies[ownProps.match.params.movieId]
    })
}

const mdp = dispatch => {
    return ({
        fetchMovie: id => dispatch(fetchMovie(id)),
        // clearSearch: () => dispatch(clearSearch())
    })
}

export default withRouter(connect(msp, mdp)(MovieShow));