import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import moviesReducer from './movies_reducer';
import genresReducer from './genres_reducer';
import listsReducer from './lists_reducer';
import listMoviesReducer from './list_movies_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    genres: genresReducer,
    lists: listsReducer,
    list_movies: listMoviesReducer,
    search: searchReducer
})

export default entitiesReducer;