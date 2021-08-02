import { ADD_MOVIE, FETCH_MOVIES } from '../actions/types';

const initialState = {
    results: [],        // List of fetched movies
    selection: {},      // Selected movie
    nominated: [],      // List of nominated movies
    search_error: null, // error with searching movie
    nom_error: null,    // error with nomination movie
};

export default function reduce(state = initialState, action) {
    switch(action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                results: action.payload,
                search_error: action.error
            }
        case ADD_MOVIE:
            // console.log(state.nominated);
            if (state.nominated.filter(movie => movie["imdbID"] === action.payload["imdbID"]).length > 0) {
                return {
                    ...state,
                    nom_error: "Movie already nominated."
                }
            }
            return {
                ...state,
                nominated: [...state.nominated, action.payload],
                nom_error: null
            }
        default:
            return state;
    }
}