import * as ListMovieAPIUtil from '../util/list_movie_api_util';

export const RECEIVE_LIST_MOVIES = "RECEIVE_LIST_MOVIES";
export const RECEIVE_LIST_MOVIE = "RECEIVE_LIST_MOVIE";
export const REMOVE_LIST_MOVIE = "REMOVE_LIST_MOVIE";

export const receiveListMovies = list_movies => {
    return {
        type: "RECEIVE_LIST_MOVIES",
        list_movies
    }
}

export const receiveListMovie = list_movie => {
    return {
        type: "RECEIVE_LIST_MOVIE",
        list_movie
    }
}


export const deleteListMovie = id => {
    return {
        type: "REMOVE_LIST_MOVIE",
        id
    }
}


export const fetchListMovies = () => dispatch => {
    return ListMovieAPIUtil.fetchListMovies().then(list_movies => dispatch(receiveListMovies(list_movies)))
}

export const fetchListMovie = () => dispatch => {
    return ListMovieAPIUtil.fetchListMovie().then(list_movie => dispatch(receiveListMovie(list_movie)))
}


export const createListMovie = (movie) => dispatch => {
    return ListMovieAPIUtil.createListMovie(movie).then(list_movie => dispatch(receiveListMovie(list_movie)))
}

export const removeListMovie = (id) => dispatch => {
    return ListMovieAPIUtil.deleteListMovie(id).then(id => dispatch(deleteListMovie(id)))
}