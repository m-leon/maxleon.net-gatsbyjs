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
  number: {
    color: theme.palette.primary.dark,
    fontFamily: theme.typography.fontFamily,
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium
  },
  image: {
    height: 55,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4)
  }
});
