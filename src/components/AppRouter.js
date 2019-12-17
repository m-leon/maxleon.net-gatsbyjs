import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Landing} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
