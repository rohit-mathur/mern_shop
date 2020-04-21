import { takeLatest, call, put } from 'redux-saga/effects';
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from './../constants';
import { api } from './../services';

function* loginWalkerSaga(action) {
    try {
        const result = yield call(api.login, action.payload)
        if (result.data) {
            sessionStorage.setItem("authToken", result.data.token);
            yield put({
                type: SIGN_IN_SUCCESS,
                payload: result.data
            })
        } else {
        }

        // if(result.data){
        // }
    } catch (e) {
        yield put({
            type: SIGN_IN_FAILURE,
            payload: e
        })
    }
}

export default function* loginWatcherSaga() {
    yield takeLatest(SIGN_IN_REQUEST, loginWalkerSaga)
}