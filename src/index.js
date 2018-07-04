import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route, IndexRoute, Redirect } from 'react-router-dom';
import { RoutesLib } from './routes';
import reduxThunk from 'redux-thunk';


import App from './components/app';

import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Forgotpassword from './components/auth/forgotpassword';
import Resetpassword from './components/auth/resetpassword';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';
import Confirmation from './components/auth/confirmation'

import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <RoutesLib />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container')
);






 