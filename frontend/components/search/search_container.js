import { connect } from 'react-redux';
import Search from './search_display';
import { createListMovie, removeListMovie } from '../../actions/list_movie_actions'


const msp = state => {
    const currentUser = state.entities.users[state.session.currentUserId]
    const listId = currentUser.list_id;
    const list = state.entities.lists[listId];
    const list_movies = state.entities.list_movies;
    return {
        movies: state.entities.movies,
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
        filterSearch: movie_titles => dispatch(filterSearch(movie_titles))
    }
}



export default connect(msp, mdp)(Search)