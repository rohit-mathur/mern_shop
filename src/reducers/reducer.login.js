import * as actionType from './../constants';
const defaultState = {};

const loginReducer = (state = defaultState, action) => {
    switch(action.type){
        case actionType.SIGN_IN_SUCCESS:
            return {
                ...state,
                token:action.payload.token
            }
        default:
            return state
    }
}

export default loginReducer;