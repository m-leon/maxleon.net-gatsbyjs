import React from 'react';
import { withRouter } from 'react-router-dom';

const AnalyticsContext = React.createContext({});

const AnalyticsHandler = ({ analytics, children, history }) => {
  history.listen(analytics.page);
  analytics.page();

  return (
    <AnalyticsContext.Provider value={analytics}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const AnalyticsProvider = withRouter(AnalyticsHandler);

export const AnalyticsConsumer = AnalyticsContext.Consumer;

export default AnalyticsContext;
