import createSagaMiddleware, {END} from 'redux-saga';
import sagaMonitor from '@redux-saga/simple-saga-monitor';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../reducers';

const configureStore = initialState => {
    const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware))
    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END)
    return store;
}

export default configureStore