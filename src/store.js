import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Simply the preloaded store. Empty for this app.
const initialState = {};

// Array of middleware used for redux.
    // Thunk: simple library that allows redux actions to return functions rather than objects. 
    //        Gives rise to side effects, async-calls, etc.
const middleware = [thunk];


// redux store
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;