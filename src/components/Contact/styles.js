export default (theme) => ({
  root: {
    display: 'flex',
    marginBottom: 0,
    marginTop: theme.spacing(10)
  },
  cardWrapper: {
    zIndex: 1
  },
  card: {
    backgroundColor: theme.palette.success.main,
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(8, 3)
  },
  cardContent: {
    maxWidth: 400
  },
  textField: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(3),
    width: '100%'
  },
  buttonWrapper: {
    position: 'relative'
  },
  button: {
    backgroundColor: '#282828',
    color: theme.palette.secondary.contrastText,
    width: '100%',
    '&:hover': {
      backgroundColor: 'black'
    }
  },
  buttonOverlay: {
    color: theme.palette.primary.contrastText,
    left: '50%',
    marginLeft: -12,
    marginTop: -12,
    position: 'absolute',
    top: '50%'
  },
  imagesWrapper: {
    position: 'relative'
  },
  image: {
    bottom: 0,
    left: 0,
    maxWidth: 600,
    position: 'absolute',
    right: 0,
    top: -100,
    width: '100%'
  }
});
