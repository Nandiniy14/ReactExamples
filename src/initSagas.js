import * as sagas from './sagas';
import { all } from 'redux-saga/effects';

// export const initSagas = (sagaMiddleware) => {
//     Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
// }

export default function* rootSaga() {
    yield all([
      sagas.userSaga()
     
    ]);
  }