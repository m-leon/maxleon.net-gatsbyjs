import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from './Copyright';
import styles from './styles';
import Typography from '../modules/Typography';

const useStyles = makeStyles(styles);

const AppFooter = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.root} component="footer">
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              className={classes.iconsWrapper}
              container
              direction="column"
              justify="flex-end"
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a href="mailto:max@maxleon.net" className={classes.icon}>
                  <img src="/static/icons/social/at.svg" alt="Email" />
                </a>
                <a href="https://github.com/m-leon" className={classes.icon}>
                  <img src="/static/icons/social/github.svg" alt="GitHub" />
                </a>
                <a
                  href="https://www.linkedin.com/in/max-leon-22398439/"
                  className={classes.icon}
                >
                  <img src="/static/icons/social/linkedin.svg" alt="LinkedIn" />
                </a>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">
              {'Icons made by '}
              <Link
                href="https://freepik.com"
                target="_blank"
                rel="sponsored"
                title="Freepik"
              >
                Freepik
              </Link>
              {' from '}
              <Link
                href="https://flaticon.com"
                target="_blank"
                rel="sponsored"
                title="Flaticon"
              >
                flaticon.com
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
};

export default AppFooter;