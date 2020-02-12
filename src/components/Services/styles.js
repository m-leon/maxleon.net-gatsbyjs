export default (theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    overflow: 'hidden'
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(10),
    marginTop: theme.spacing(10),
    position: 'relative'
  },
  item: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 5)
  },
  title: {
    marginBottom: theme.spacing(2)
  },
  subtitle: {
    marginBottom: theme.spacing(10)
  },
  image: {
    height: 55,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4)
  },
  curvyLines: {
    pointerEvents: 'none',
    opacity: 0.7,
    top: -180
  },
  button: {
    marginTop: theme.spacing(8)
  }
});
