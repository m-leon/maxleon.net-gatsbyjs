export default (theme) => ({
  root: {
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
  title: {
    marginBottom: theme.spacing(10)
  },
  item: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 5)
  },
  image: {
    height: 55,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4)
  }
});
