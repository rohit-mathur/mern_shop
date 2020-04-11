import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app';
import configureStore from './store';
import rootSaga from './sagas';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/style.scss';

const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSaga)

ReactDOM.render(<App store={store} routes={routes} />, document.getElementById('root'));