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
  button: {
    backgroundColor: '#28282a',
    color: theme.palette.secondary.contrastText,
    width: '100%',
    '&:hover': {
      backgroundColor: '#000'
    }
  },
  imagesWrapper: {
    position: 'relative'
  },
  image: {
    bottom: 0,
    left: -28,
    maxWidth: 600,
    position: 'absolute',
    right: 0,
    top: -28,
    width: '100%'
  }
});
