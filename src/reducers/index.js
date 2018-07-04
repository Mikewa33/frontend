import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth';
import flashMsg from './flash';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  flash: flashMsg
});

export default rootReducer;
