import { FETCH_MOVIES } from '../actions/types';

const initialState = {
    results: [],        // List of fetched movies
    selection: {},      // Selected movie
    nominated: [],      // List of nominated movies
    error: null,        // error state
};

export default function reduce(state = initialState, action) {
    switch(action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                results: action.payload,
                error: action.error
            }
        default:
            return state;
    }
}