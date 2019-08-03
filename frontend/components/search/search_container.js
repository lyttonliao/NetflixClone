import { connect } from 'react-redux';
import Search from './search';
import { filterContent } from '../../actions/search_actions'

const msp = state => {
    return {
        movies: state.entities.movies,
    }
}

const mdp = dispatch => {
    return {
        filterContent: movie_titles => dispatch(filterContent(movie_titles))
    }
}



export default connect(msp, mdp)(Search)