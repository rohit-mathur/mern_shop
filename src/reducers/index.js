import { combineReducers } from 'redux';
import signupReducer from './reducer.signup';
import loginReducer from './reducer.login';

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer
});
  
export default rootReducer;