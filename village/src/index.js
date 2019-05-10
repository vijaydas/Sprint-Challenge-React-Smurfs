import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,withRouter} from 'react-router-dom';

import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const AppWithRouter = withRouter(App);
ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>,
  rootElement
);