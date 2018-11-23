import { createStore,applyMiddleware, compose } from 'redux';
import rootReducers from '../Reducers';
import createSagaMiddleware from 'redux-saga';
import { userSaga } from '../sagas';
import rootSaga from '../initSagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
    
    let middleware = applyMiddleware(sagaMiddleware);
    return createStore(
        rootReducers,
        initialState,
        applyMiddleware(createSagaMiddleware(rootSaga))
        //compose(middleware)
    );
}

//initSagas(sagaMiddleware);
//sagaMiddleware.run(rootSaga);