import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import configureAnalytics from '../configureAnalytics';
import Landing from './Landing';
import { AnalyticsProvider } from './AnalyticsContext';

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
