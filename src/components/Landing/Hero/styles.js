export default (theme) => ({
  background: {
    backgroundColor: '#dadadc',
    backgroundImage: 'url(/static/hero.jpg)',
    backgroundPosition: 'center bottom'
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
