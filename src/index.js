import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducers/reducer'
import thunk from 'redux-thunk'

import BaseLayout from './components/BaseLayout';
import App from './components/App'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/About'
import Home from './components/Home'
import ViewLocations from './components/ViewLocations'
import * as serviceWorker from './serviceWorker';
import './css/Custom.css'
import { setAuthHeader } from './utils/authenticate'
import requireAuth from './components/requireAuth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)

setAuthHeader(localStorage.getItem('jsonwebtoken'))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/save-location" component={requireAuth(App)} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/view-locations/user-id/:userId" component={ViewLocations} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
