import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
// import { reducers } from './reducers';

const reducer = combineReducers({});

export default function configureStore(initialState) {
    return createStore(
        reducer,
        initialState,
        applyMiddleware(thunk)
    );
}
