import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMovies } from '../../actions/movie_actions';
import MovieIndex from './movie_index';
import { fetchList } from '../../actions/list_actions';
import { createListMovie, removeListMovie } from '../../actions/list_movie_actions';

const mapStateToProps = state => {
    const currentUser = state.entities.users[state.session.currentUserId]
    const listId = currentUser.list_id;
    const listMovieIds = currentUser.list_movie_ids;
    const list = state.entities.lists[listId]
    return {
        movies: state.entities.movies,
        genres: state.entities.genres,
        list,
        listId,
        listMovieIds,
        currentUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
        fetchList: id => dispatch(fetchList(id)),
        createListMovie: movie => dispatch(createListMovie(movie)),
        removeListMovie: id => dispatch(removeListMovie(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieIndex));