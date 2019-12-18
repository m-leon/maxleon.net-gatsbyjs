import analytics from 'analytics';
import doNotTrack from 'analytics-plugin-do-not-track';
import googleAnalytics from '@analytics/google-analytics';

const configureAnalytics = () => {
  return analytics({
    app: 'Portfolio',
    debug: true,
    plugins: [
      doNotTrack(),
      googleAnalytics({
        trackingId: 'UA-146080513-1'
      })
    ]
  });
};

export default configureAnalytics;
