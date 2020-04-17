import * as actionType from './../constants';

export const login = reqObj => ({
    type: actionType.SIGN_IN_REQUEST,
    payload: reqObj
})