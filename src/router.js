import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import Layout from './components/Layout/MainLayout.js';
import IndexPage from './routes/IndexPage';
import WtChart from './routes/WtChart';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Layout} >
        <Route path="/wtChart" component={WtChart} />
        <Route path="/index" component={IndexPage} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
