import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Layout from 'app/components/Layout';
import example1 from './example1/';
import example2 from './example2/';
import example3 from './example3/';

// 路由配置
const createRoutes = () => (
  <Route path="/" component={Layout}>
    <IndexRoute component={example1} />
    {/* <Route paht="/example1" component={example1} /> */}
    <Route path="/example2" component={example2} />
    <Route path="/example3" component={example3} />
    <Redirect from="*" to="/" />
  </Route>
);

export default createRoutes;
