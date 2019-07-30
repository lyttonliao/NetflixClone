import { connect } from 'react-redux';
import Search from './search_display';

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



export default connect(msp)(Search)