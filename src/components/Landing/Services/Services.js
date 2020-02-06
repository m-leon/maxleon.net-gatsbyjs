import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';

import Button from '../../modules/Button';
import styles from './styles';
import Typography from '../../modules/Typography';

const useStyles = makeStyles(styles);

const Services = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/curvy_lines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography
          className={classes.title}
          component="h2"
          marked="center"
          variant="h4"
        >
          What I do
        </Typography>
        <Typography className={classes.subtitle} variant="h6">
          Services
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src="/static/icons/mockup.svg"
                  alt="Mockup"
                  className={classes.image}
                />
                <Typography align="center" variant="h6">
                  Website Development
                </Typography>
                <Typography variant="h5">
                  Websites expand your reach to the entire globe. I strike the
                  perfect balance between creating a great first impression for
                  new clients and retaining the attention of your established
                  clientele.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src="/static/icons/flow.svg"
                  alt="Flow"
                  className={classes.image}
                />
                <Typography variant="h6" align="center">
                  App Development
                </Typography>
                <Typography variant="h5">
                  Apps should target your most dedicated users to create an
                  ongoing conversation. This experience is best used to provide
                  a sense fulfillment to users and share your growth.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src="/static/icons/search.svg"
                  alt="Search"
                  className={classes.image}
                />
                <Typography variant="h6" align="center">
                  Search Engine Optimization
                </Typography>
                <Typography variant="h5">
                  Search engines provide sites the opportunity to reach new
                  users. Competition is steep. Help your business grow by taking
                  advantage of the reports I create to put you on the right
                  track.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Link to="contact" smooth={true} offset={-150} duration={500}>
          <Button
            className={classes.button}
            color="primary"
            size="large"
            variant="contained"
          >
            Get Started
          </Button>
        </Link>
      </Container>
    </section>
  );
};

export default Services;
