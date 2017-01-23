import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';

import MasterPage from './pages/common/MasterPage';
import App from './App';
import About from './pages/About';
import './index.css';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);
const root = document.getElementById('root');
const router = (
  <Router history={history}>
    <Route path="/" component={MasterPage}>
      <IndexRoute component={App}></IndexRoute>
      <Route path="/about" component={About}>
      </Route>
    </Route>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  root
);
