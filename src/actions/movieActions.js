import { FETCH_MOVIES, ADD_MOVIE } from '../actions/types';
const API_KEY = '8140e84f';
// const API_KEY = '1234';

export const fetchMovies = (search) => dispatch => {
    // check that variable is good

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    .then(res => res.json())
    .then(results => {
        console.log(results);
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

