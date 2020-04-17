import * as actionType from './../constants';
const defaultState = {}
const signupReducer = (state = defaultState, action) => {
    switch(action.type){
        case actionType.SIGN_UP_REQUEST:
            return {

            }
        default:
            return state
    }
}

export default signupReducer