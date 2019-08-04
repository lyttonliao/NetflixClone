import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import moviesReducer from './movies_reducer';
import genresReducer from './genres_reducer';
import listsReducer from './lists_reducer';
import listMoviesReducer from './list_movies_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    genres: genresReducer,
    lists: listsReducer,
    list_movies: listMoviesReducer,
})

export default entitiesReducer;