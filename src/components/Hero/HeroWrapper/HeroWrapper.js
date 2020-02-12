import React from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const query = graphql`
  query {
    file(relativePath: { eq: "hero_arrow.png" }) {
      childImageSharp {
        fixed(width: 12, height: 16) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const HeroWrapper = ({ backgroundClassName, children }) => {
  const classes = useStyles();
  const data = useStaticQuery(query);

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {children}
        <div className={clsx(classes.background, backgroundClassName)} />
        <Img
          fixed={data.file.childImageSharp.fixed}
          className={classes.arrowDown}
          alt="See More"
          style={{ position: 'absolute' }}
        />
      </Container>
    </section>
  );
};

export default HeroWrapper;
