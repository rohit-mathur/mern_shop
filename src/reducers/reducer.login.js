import * as actionType from './../constants';
const defaultState = {
    loading:false,
    token:''
};

const loginReducer = (state = defaultState, action) => {
    switch(action.type){
        case actionType.SIGN_IN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionType.SIGN_IN_SUCCESS:
            return {
                ...state,
                token:action.payload.token,
                loading: false
            }
        case actionType.SIGN_IN_FAILURE:
            return {
                ...state,
                loading:false
            }
        default:
            return state
    }
}

export default loginReducer;