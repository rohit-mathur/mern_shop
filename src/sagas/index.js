import {all} from 'redux-saga/effects';
import signUpWatcherSaga from './saga.signup';
import loginWatcherSaga from './saga.login';

export default function* root() {
    yield all([
      signUpWatcherSaga(),
      loginWatcherSaga()
    ]);
  }
  