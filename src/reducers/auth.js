import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  AUTH_FLASH,
  FETCH_MESSAGE,
  AUTH_EMAIL_SENT,
  ERROR_CLEAR
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {

    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case AUTH_EMAIL_SENT:
      return { ...state, error: '',emailSent: action.payload };
    case ERROR_CLEAR:
      return { ...state, error: '', emailSent: null};
    case FETCH_MESSAGE:
      return { ...state, message: action.payload };
  }

  return state;
}
