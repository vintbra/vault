import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import ContainerList from './components/ContainerList'
import ObjectList from './components/ObjectList'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ContainerList} />
      <Route path="/:containerName" component={ObjectList} />
    </Route>
  </Router>
);
