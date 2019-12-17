import React from 'react';
import AppBar from '../modules/AppBar';
import Toolbar from '../modules/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const AppTopBar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.root} color="inherit" position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Typography className={classes.title} color="inherit" variant="h6">
            Max Leon
          </Typography>
          <div className={classes.right} />
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
};

export default AppTopBar;
