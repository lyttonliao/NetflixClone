import * as GenreAPIUtil from '../util/genre_api_util';

export const RECEIVE_ALL_GENRES = "RECEIVE_ALL_GENRES";
export const RECEIVE_GENRE = "RECEIVE_GENRE";

export const receiveAllGenres = genres => {
    return {
        type: RECEIVE_ALL_GENRES,
        genres
    }
}

export const receiveGenre = genre => {
    return {
        type: RECEIVE_GENRE,
        genre
    }
}

export const fetchGenres = () => dispatch => {
    return (
        GenreAPIUtil.fetchGenres().then(genres => dispatch(receiveAllGenres(genres)))
    )
}

export const fetchGenre = id => dispatch => {
    return (
        GenreAPIUtil.fetchGenre(id).then(genre => dispatch(receiveGenre(genre)))
    )
}