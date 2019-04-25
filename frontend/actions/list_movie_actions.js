import * as ListMovieAPIUtil from '../util/list_movie_api_util';

export const RECEIVE_LIST_MOVIES = "RECEIVE_LIST_MOVIES";
export const RECEIVE_LIST_MOVIE = "RECEIVE_LIST_MOVIE";
export const REMOVE_LIST_MOVIE = "REMOVE_LIST_MOVIE";

export const receiveListMovies = list => {
    return {
        type: "RECEIVE_LIST_MOVIES",
        list_movies: list.list_movies
    }
}

export const receiveListMovie = list_movie => {
    debugger
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
    return ListMovieAPIUtil.fetchListMovies().then(list => dispatch(receiveListMovies(list), errors => dispatch(receiveListErrors(errors.responseJSON))))
}

export const fetchListMovie = () => dispatch => {
    return ListMovieAPIUtil.fetchListMovie().then(list_movie => dispatch(receiveListMovie(list_movie), errors => dispatch(receiveListErrors(errors.responseJSON))))
}


export const createListMovie = (movie) => dispatch => {
    debugger
    return ListMovieAPIUtil.createListMovie(movie).then(list_movie => dispatch(receiveListMovie(list_movie)))
}

export const removeListMovie = (id) => dispatch => {

    return ListMovieAPIUtil.deleteListMovie(id).then(() => dispatch(deleteListMovie(id)))
}