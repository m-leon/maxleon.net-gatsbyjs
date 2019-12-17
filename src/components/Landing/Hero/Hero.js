import React from 'react';
import Button from '../../modules/Button';
import HeroWrapper from './HeroWrapper';
import Typography from '../../modules/Typography';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const Hero = () => {
  const classes = useStyles();

  return (
    <HeroWrapper backgroundClassName={classes.background}>
      <Typography align="center" color="inherit" marked="center" variant="h2">
        Modern Web Dev
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.tagline}
      >
        The goal isn't a website. The goal is to grow your business.
      </Typography>
      <Link to="contact" smooth={true} offset={-150} duration={500}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          className={classes.button}
        >
          Contact Me
        </Button>
      </Link>
    </HeroWrapper>
  );
};

export default Hero;
