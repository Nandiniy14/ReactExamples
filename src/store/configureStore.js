import { createStore } from 'redux';
import rootReducers from '../Reducers';
//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    return createStore(
        rootReducers,
        initialState,
        //applyMiddleware(reduxImmutableStateInvariant())
    );
}