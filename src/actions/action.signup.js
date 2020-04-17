import * as actionType from './../constants';

export const signup = reqObj => ({
    type: actionType.SIGN_UP_REQUEST,
    payload: reqObj
})