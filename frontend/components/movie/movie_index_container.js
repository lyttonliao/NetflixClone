import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMovies } from '../../actions/movie_actions';
import MovieIndex from './movie_index';
import { fetchList } from '../../actions/list_actions';

const mapStateToProps = state => {
    const currentUserId = state.session.currentUserId;
    const listId = state.entities.users[currentUserId].list_id;
    const list = state.entities.lists[listId]
    return {
        movies: state.entities.movies,
        genres: state.entities.genres,
        listId,
        list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
        fetchList: id => dispatch(fetchList(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieIndex));