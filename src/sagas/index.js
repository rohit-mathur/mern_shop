import {all} from 'redux-saga/effects';
import signUpWatcherSaga from './saga.signup';
import loginWatcherSaga from './saga.login';
import addCategoryWatcherSaga from './saga.categories';

export default function* root() {
    yield all([
      signUpWatcherSaga(),
      loginWatcherSaga(),
      addCategoryWatcherSaga()
    ]);
  }
  