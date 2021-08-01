import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

// Create root reducer from all reducers
export default combineReducers({
    movies: movieReducer,
})