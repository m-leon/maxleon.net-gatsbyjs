import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Element } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';

import Button from '../../modules/Button';
import styles from './styles';
import TextField from '../../modules/TextField';
import Typography from '../../modules/Typography';

const useStyles = makeStyles(styles);

const Contact = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} component="section">
      <Element name="contact" />
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form
              className={classes.cardContent}
              data-netlify
              method="post"
              name="contact"
            >
              <Typography component="h2" gutterBottom variant="h2">
                Contact Me
              </Typography>
              <Typography variant="h5">Let's Build Your Project</Typography>
              <input type="hidden" name="form-name" value="contact" />
              <TextField
                className={classes.textField}
                name="name"
                noBorder
                placeholder="Name"
              />
              <TextField
                className={classes.textField}
                name="email"
                noBorder
                placeholder="Email"
              />
              <TextField
                className={classes.textField}
                multiline
                name="message"
                noBorder
                placeholder="Message"
                rows={4}
              />
              <Button
                type="submit"
                color="inherit"
                variant="contained"
                className={classes.button}
              >
                Send Message
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <img
              src="/static/handshake.jpg"
              alt="Connect"
              className={classes.image}
            />
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
