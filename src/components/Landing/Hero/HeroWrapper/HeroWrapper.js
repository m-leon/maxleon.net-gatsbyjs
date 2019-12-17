import React from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const HeroWrapper = ({ backgroundClassName, children }) => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {children}
        <div className={classes.backdrop} />
        <div className={clsx(classes.background, backgroundClassName)} />
        <img
          className={classes.arrowDown}
          src="/static/hero_arrow.png"
          height="16"
          width="12"
          alt="See More"
        />
      </Container>
    </section>
  );
};

export default HeroWrapper;
