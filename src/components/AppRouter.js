import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AnalyticsProvider from './AnalyticsProvider';
import configureAnalytics from '../configureAnalytics';
import Landing from './Landing';

const analytics = configureAnalytics();

const AppRouter = () => (
  <BrowserRouter>
    <AnalyticsProvider analytics={analytics}>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </AnalyticsProvider>
  </BrowserRouter>
);

export default AppRouter;
