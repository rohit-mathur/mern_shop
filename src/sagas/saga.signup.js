import {takeLatest, call} from 'redux-saga/effects';
import {SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE} from './../constants';
import { api } from './../services';

function* signUpWalkerSaga(action){
    try{
        const result = yield call(api.signup, action.payload)
        console.log(result)
    } catch (e) {
        console.log(e)
    }
}

export default function* signUpWatcherSaga(){
    yield takeLatest(SIGN_UP_REQUEST, signUpWalkerSaga)
}