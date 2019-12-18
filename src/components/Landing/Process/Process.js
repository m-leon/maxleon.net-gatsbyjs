import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';
import Typography from '../../modules/Typography';

const useStyles = makeStyles(styles);

const Process = () => {
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
          How I Do It
        </Typography>
        <Typography className={classes.subtitle} variant="h6">
          Process
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src="/static/icons/wireframe.svg"
                  alt="Wireframe"
                  className={classes.image}
                />
                <Typography align="center" variant="h6">
                  <span className={classes.number}>1. </span>
                  Plan &amp; Design
                </Typography>
                <Typography variant="h5">
                  Allows me to identify your needs. I'll deliver wireframes,
                  mockups, and other designs. When you love it, we proceed to
                  Build.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src="/static/icons/coding.svg"
                  alt="Coding"
                  className={classes.image}
                />
                <Typography variant="h6" align="center">
                  <span className={classes.number}>2. </span>
                  Build
                </Typography>
                <Typography variant="h5">
                  Make your dream a reality. I utilize the latest tools to
                  quickly prototype, test, and deploy. You will be able to see
                  my progress and provide feedback to make sure the result is
                  just what you wanted.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src="/static/icons/ab-testing.svg"
                  alt="AB Test"
                  className={classes.image}
                />
                <Typography variant="h6" align="center">
                  <span className={classes.number}>3. </span>
                  Review &amp; Refine
                </Typography>
                <Typography variant="h5">
                  Your success is our success. My reports will give you access
                  to the bigger picture behind the site.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Process;
