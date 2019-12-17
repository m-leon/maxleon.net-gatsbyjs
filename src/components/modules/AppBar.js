import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    color: theme.palette.common.white
  }
});

const useStyles = makeStyles(styles);

const AppBar = (props) => {
  const classes = useStyles();

  return (
    <MuiAppBar classes={classes} elevation={0} position="static" {...props} />
  );
};

export default AppBar;
