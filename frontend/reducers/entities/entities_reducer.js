import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import moviesReducer from './movies_reducer';
import genresReducer from './genres_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    genres: genresReducer
})

export default entitiesReducer;