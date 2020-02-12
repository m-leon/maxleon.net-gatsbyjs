import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';

import Button from '../modules/Button';
import FlowIcon from './flow.svg';
import MockupIcon from './mockup.svg';
import SearchIcon from './search.svg';
import styles from './styles';
import Typography from '../modules/Typography';

const useStyles = makeStyles(styles);

// TODO: Change to fluid query
const query = graphql`
  query {
    file(relativePath: { eq: "curvy_lines.png" }) {
      childImageSharp {
        fixed(width: 1200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Services = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Img
          fixed={data.file.childImageSharp.fixed}
          className={classes.curvyLines}
          alt="curvy lines"
          style={{ position: 'absolute' }}
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
                <img src={MockupIcon} alt="Mockup" className={classes.image} />
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
                <img src={FlowIcon} alt="Flow" className={classes.image} />
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
                <img src={SearchIcon} alt="Search" className={classes.image} />
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
