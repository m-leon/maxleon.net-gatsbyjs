export default (theme) => ({
  background: {
    backgroundColor: '#a9a9a9',
    backgroundImage: 'url(/shared_workspace.svg)'
  },
  button: {
    marginTop: theme.spacing(6),
    minWidth: 200
  },
  tagline: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10)
    }
  }
});
