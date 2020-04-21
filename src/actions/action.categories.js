import * as actionType from './../constants';

export const addCategory = reqObj => ({
    type: actionType.ADD_CATEGORY_REQUEST,
    payload: reqObj
})