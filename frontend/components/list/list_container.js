import { connect } from 'react-redux';
import ListMovies from './list_movies';
// import { withRouter } from 'react-router-dom';
import { fetchList } from '../../actions/list_actions';
import { fetchListMovies } from '../../actions/list_movie_actions';
import { logout } from '../../actions/session_actions';

const msp = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.currentUserId];
    const list = state.entities.lists[ownProps.match.params.listId];

    return ({
        list,
        movies: state.entities.movies,
        list_movies: state.entities.list_movies,
        genres: state.entities.genres,
        currentUser
    })
}

const mdp = dispatch => {
    return ({
        fetchList: (id) => dispatch(fetchList(id)),
        fetchListMovies: (list) => dispatch(fetchListMovies(list)),
        logout: () => dispatch(logout())
    })
}

export default connect(msp, mdp)(ListMovies);