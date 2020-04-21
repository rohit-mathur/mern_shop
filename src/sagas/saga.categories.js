import { takeLatest, call, put } from 'redux-saga/effects';
import { ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, ADD_CATEGORY_FAILURE } from './../constants';
import { api } from './../services';

function* addCategoryWalkerSaga(action) {
    try {
        const result = yield call(api.addCategory, action.payload)
        yield put({
            type: ADD_CATEGORY_SUCCESS,
            payload:result.data
        })
    } catch (e){
        yield put({
            type: ADD_CATEGORY_FAILURE,
            payload: e
        })
    }
}

export default function* addCategoryWatcherSaga() {
    yield takeLatest(ADD_CATEGORY_REQUEST, addCategoryWalkerSaga)
}