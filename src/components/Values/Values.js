import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import OnlineMarketingIcon from './online-marketing.svg';
import ReportIcon from './report.svg';
import styles from './styles';
import Typography from '../modules/Typography';
import WebsitesIcon from './websites.svg';

const useStyles = makeStyles(styles);

const Values = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography
          className={classes.title}
          component="h2"
          marked="center"
          variant="h4"
        >
          What You Need
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  className={classes.image}
                  src={WebsitesIcon}
                  alt="Website"
                />
                <Typography align="center" variant="h6">
                  Experience-Driven Engagement
                </Typography>
                <Typography variant="h5">
                  Each second a user spends on a site increases their conversion
                  likelihood. Retain your users by taking advantage the full
                  power of the digital medium.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  className={classes.image}
                  src={OnlineMarketingIcon}
                  alt="Audience"
                />
                <Typography align="center" variant="h6">
                  Targeted Audience Reach
                </Typography>
                <Typography variant="h5">
                  Increasing total traffic will provide your company with more
                  conversions. You know your audience; I know how to get their
                  attention.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img className={classes.image} src={ReportIcon} alt="Results" />
                <Typography align="center" variant="h6">
                  Data-Driven Results
                </Typography>
                <Typography variant="h5">
                  Optimize your site by identifying your user's goals. Let's
                  create a conversation to refine and optimize with a proven
                  method.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Values;
