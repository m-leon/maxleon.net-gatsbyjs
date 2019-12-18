import { withRouter } from 'react-router-dom';

const AnalyticsProvider = ({ analytics, children, history }) => {
  history.listen(analytics.page);
  analytics.page();

  return children;
};

export default withRouter(AnalyticsProvider);
