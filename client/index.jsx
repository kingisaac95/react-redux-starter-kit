import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes/Routes';
import { storeConfig } from './store/store.config';
import App from './components/App.jsx';
import './assets/stylesheets/styles.scss';

const store = storeConfig();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);
