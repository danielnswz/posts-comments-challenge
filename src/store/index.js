import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { authorsReducer } from './authors/reducer';
import authorSaga from './authors/sagas';
import { publicationsReducer } from './publications/reducer';
import publicationsSaga from './publications/sagas';

const rootReducer = combineReducers({
	authors: authorsReducer,
	publications: publicationsReducer,
});

function* rootSaga() {
	yield all([yield fork(authorSaga), yield fork(publicationsSaga)]);
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, composeWithDevTools(middlewares));

sagaMiddleware.run(rootSaga);

export default store;
