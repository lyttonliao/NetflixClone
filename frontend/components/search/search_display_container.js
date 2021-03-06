import { connect } from 'react-redux';
import Search_Display from './search_display';
import { clearSearch } from '../../actions/search_actions'
import { createListMovie, removeListMovie } from '../../actions/list_movie_actions'


const msp = state => {
    const currentUser = state.entities.users[state.session.currentUserId]
    const listId = currentUser.list_id;
    const list = state.entities.lists[listId];
    const list_movies = state.entities.list_movies;
    return {
        movies: state.entities.movies,
        movie_titles: state.ui.search,
        genres: state.entities.genres,
        list,
        listId,
        list_movies,
        currentUser,
    }
}

const mdp = dispatch => {
    return {
        createListMovie: movie => dispatch(createListMovie(movie)),
        removeListMovie: id => dispatch(removeListMovie(id)),
        clearSearch: () => dispatch(clearSearch())
    }
}



export default connect(msp, mdp)(Search_Display)