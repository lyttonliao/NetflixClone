import * as MovieAPIUtil from '../util/movie_api_util';

export const RECEIVE_ALL_MOVIES = "RECEIVE_ALL_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";

export const receiveAllMovies = movies => {
    return {
        type: RECEIVE_ALL_MOVIES,
        movies
    };
};

export const receiveMovie = movie => {
    return {
        type: RECEIVE_MOVIE,
        movie
    };
};

export const fetchMovies = () => dispatch => {
    return (
        MovieAPIUtil.fetchMovies().then(movies => dispatch(receiveAllMovies(movies)))
    );
};

export const fetchMovie = id => dispatch => {
    return (
        MovieAPIUtil.fetchMovie(id).then(movie => dispatch(fetchMovie(movie)))
    );
};
