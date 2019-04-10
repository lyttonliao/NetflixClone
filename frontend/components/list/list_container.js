import { connect } from 'react-redux';
import ListMovies from './list_movies';
import { withRouter } from 'react-router-dom';
import { fetchList } from '../../actions/list_actions';
import { fetchListMovies } from '../../actions/list_movie_actions';
import { logout } from '../../actions/session_actions';

const msp = (state, ownProps) => {
    debugger
    const currentUser = state.entities.users[state.session.currentUserId];
    return ({
        list: state.entities.lists[ownProps.match.params.listId],
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

export default withRouter(connect(msp, mdp)(ListMovies));