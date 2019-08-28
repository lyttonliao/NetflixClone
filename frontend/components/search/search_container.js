import { connect } from 'react-redux';
import Search from './search';
import { filterContent, currentSearch } from '../../actions/search_actions'

const msp = state => {
    return {
        movies: state.entities.movies,
        current_search: state.ui.current_search
    }
}

const mdp = dispatch => {
    return {
        filterContent: movie_titles => dispatch(filterContent(movie_titles)),
        currentSearch: search => dispatch(currentSearch(search))
    }
}



export default connect(msp, mdp)(Search)