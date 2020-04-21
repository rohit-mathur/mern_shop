export const urlConstants = {
    // BASE_URL: process.env.REACT_APP_ENV_URL
    // BASE_URL: 'http://localhost:5000'
}

export const API_INTERFACE = {
    signup: '/user/signup',
    login: '/user/login',
    addCategory: '/categories/add',
}

export const uriConstants = {
    SIGN_UP_API: 
    // urlConstants.BASE_URL +
     API_INTERFACE.signup,
     LOGIN_API: API_INTERFACE.login,
     ADD_CATEGORY_API: API_INTERFACE.addCategory,
}