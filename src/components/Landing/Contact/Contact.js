import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import ErrorIcon from '@material-ui/icons/Error';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Element } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';

import Button from '../../modules/Button';
import styles from './styles';
import TextField from '../../modules/TextField';
import Typography from '../../modules/Typography';
import { encode } from '../../../utils/form';

const useStyles = makeStyles(styles);

const Contact = () => {
  const classes = useStyles();

  const [errored, setErrored] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [state, setState] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...state
      })
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch(() => {
        setErrored(true);
      });
  };

  return (
    <Container className={classes.root} component="section">
      <Element name="contact" />
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form className={classes.cardContent} onSubmit={handleSubmit}>
              <Typography component="h2" gutterBottom variant="h2">
                Contact Me
              </Typography>
              <Typography variant="h5">Let's Build Your Project</Typography>
              <TextField
                className={classes.textField}
                name="name"
                noBorder
                onChange={handleChange}
                placeholder="Name"
                value={state.name}
              />
              <TextField
                className={classes.textField}
                name="email"
                noBorder
                onChange={handleChange}
                placeholder="Email"
                value={state.email}
              />
              <TextField
                className={classes.textField}
                multiline
                name="message"
                noBorder
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                value={state.message}
              />
              {errored && (
                <Button
                  className={classes.button}
                  color="inherit"
                  endIcon={<ErrorIcon />}
                  fullWidth
                  disabled={true}
                  type="submit"
                  variant="contained"
                >
                  An Unknown Error Occurred
                </Button>
              )}
              {!errored && submitted && (
                <Button
                  className={classes.button}
                  color="inherit"
                  endIcon={<CheckIcon />}
                  fullWidth
                  disabled={true}
                  type="submit"
                  variant="contained"
                >
                  Message Sent
                </Button>
              )}
              {!errored && !submitted && (
                <div className={classes.buttonWrapper}>
                  <Button
                    className={classes.button}
                    color="inherit"
                    fullWidth
                    disabled={errored || loading || submitted}
                    type="submit"
                    variant="contained"
                  >
                    Send Message
                  </Button>
                  {loading && (
                    <CircularProgress
                      className={classes.buttonOverlay}
                      size={24}
                    />
                  )}
                </div>
              )}
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <img
              src="/static/personal_text.svg"
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
