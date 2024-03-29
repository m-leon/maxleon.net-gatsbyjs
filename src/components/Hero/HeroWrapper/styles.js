export default (theme) => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '80vh',
      minHeight: 500,
      maxHeight: 1300
    }
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundPosition: 'center bottom',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    zIndex: -2
  },
  arrowDown: {
    bottom: theme.spacing(4)
  }
});
