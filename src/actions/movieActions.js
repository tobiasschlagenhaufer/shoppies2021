import { FETCH_MOVIES, ADD_MOVIE, DEL_MOVIE } from '../actions/types';

export const fetchMovies = (search) => dispatch => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    dispatch({
        type: FETCH_MOVIES,
        payload: [],
    });

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    .then(res => res.json())
    .then(results => {
        if (results["Response"] === "True") {
            dispatch({
                type: FETCH_MOVIES,
                payload: results["Search"],
                error: null,
            });
        } else {
            dispatch({
                type: FETCH_MOVIES,
                payload: [],
                error: results["Error"]
            });
        }
        
    });
}

export const nominateMovie = (movie) => dispatch => {
    dispatch({
        type: ADD_MOVIE,
        payload: movie
    });
}

export const deleteMovie = (movie) => dispatch => {
    dispatch({
        type: DEL_MOVIE,
        payload: movie
    });
}

